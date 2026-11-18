import { View } from './View.js';
import { paths } from '../router/Router.js';
import { FIELDS, SHOW_AVERAGE, SLIDERS, TARGET_LEVELS, TARGET_SCALE_MAX } from '../data/config.js';
import { escapeHtml, formatNumber } from '../utils/format.js';

/** Grupos de campos, na ordem em que aparecem em FIELDS (Carro, Ônibus e avião, Moradia, Consumo). */
const GROUPS = [...new Set(FIELDS.map(field => field.group))];

/** Id seguro para usar em atributos HTML (ex.: "Transporte" → "transporte"). */
const groupId = group => group.normalize('NFD').replace(/[^\w]/g, '').toLowerCase();

/**
 * Tela da calculadora: os campos ficam divididos em abas (Carro, Ônibus e avião, Moradia, Consumo),
 * uma por vez, e o resultado fica ao lado (atualizado enquanto o usuário mexe).
 */
export class CalculatorView extends View {
  navKey = 'calc';

  /**
   * @param {import('../models/CalculatorStore.js').CalculatorStore} store
   * @param {import('../models/FootprintCalculator.js').FootprintCalculator} calculator
   */
  constructor(store, calculator) {
    super();
    this.store = store;
    this.calculator = calculator;
    this.activeGroup = GROUPS[0];
  }

  title() {
    return 'Calculadora · EducaTi';
  }

  render() {
    const values = this.store.getValues();
    return `
      <section class="container page page--calc">
        <div class="page__intro">
          <h1 class="page__title">Calculadora de CO₂</h1>
          <p class="page__lead">Ajuste os valores conforme a sua rotina. O resultado é uma estimativa simplificada, para você entender de onde vêm as suas emissões.</p>
        </div>
        <div class="calc">
          <div class="calc__inputs">
            <p class="calc__mini-total" data-mini-total>${this.renderMiniTotal()}</p>
            ${this.renderInputs(values)}
          </div>
          <div class="results" data-results>${this.renderResults()}</div>
        </div>
        <p class="sr-only" aria-live="polite" data-announce></p>
      </section>`;
  }

  /** Abas (uma por grupo) e um painel para cada aba. Só o painel da aba ativa aparece. */
  renderInputs(values) {
    const subtotals = this.subtotals();

    const tabs = GROUPS.map(group => {
      const id = groupId(group);
      const isActive = group === this.activeGroup;
      return `
        <button type="button" role="tab" class="calc-tab" id="tab-${id}" aria-controls="panel-${id}"
                aria-selected="${isActive}" tabindex="${isActive ? 0 : -1}" data-tab="${escapeHtml(group)}">
          <span class="calc-tab__name">${escapeHtml(group)}</span>
          <span class="calc-tab__value" data-subtotal="${id}">${formatNumber(subtotals[group])} t</span>
        </button>`;
    }).join('');

    const panels = GROUPS.map((group, index) => {
      const id = groupId(group);
      const next = GROUPS[index + 1];
      const nextButton = next
        ? `<button type="button" class="btn btn--outline calc__next" data-tab="${escapeHtml(next)}">Próximo: ${escapeHtml(next)} →</button>`
        : '';
      return `
        <div class="calc__panel" role="tabpanel" id="panel-${id}" aria-labelledby="tab-${id}"${group === this.activeGroup ? '' : ' hidden'}>
          ${FIELDS.filter(field => field.group === group).map(field => this.renderField(field, values[field.key])).join('')}
          ${nextButton}
        </div>`;
    }).join('');

    return `
      <div class="calc-tabs" role="tablist" aria-label="Partes da calculadora">${tabs}</div>
      ${panels}`;
  }

  /** Soma das toneladas de cada grupo, ex.: { Carro: 0.2, 'Ônibus e avião': 0.4, Moradia: 0.4, Consumo: 2.1 }. */
  subtotals() {
    const { parts } = this.calculator.calculate(this.store.getValues());
    const sums = Object.fromEntries(GROUPS.map(group => [group, 0]));
    parts.forEach(part => { sums[part.group] += part.tons; });
    return sums;
  }

  /** Total curto mostrado acima das abas no celular, onde o painel verde fica lá embaixo. */
  renderMiniTotal() {
    const { total, level } = this.calculator.calculate(this.store.getValues());
    return `Sua pegada: <strong>${formatNumber(total)} t CO₂e</strong> por ano · ${escapeHtml(level.label)}`;
  }

  renderField(field, value) {
    return field.type === 'slider' ? this.renderSlider(field, value) : this.renderChoices(field, value);
  }

  renderSlider(slider, value) {
    const text = escapeHtml(this.formatSliderValue(slider, value));
    return `
      <label class="field">
        <div class="field__head">
          <span class="field__label">${escapeHtml(slider.label)}</span>
          <span class="field__value" data-display="${slider.key}" aria-hidden="true">${text}</span>
        </div>
        ${slider.hint ? `<span class="field__hint">${escapeHtml(slider.hint)}</span>` : ''}
        <input type="range" min="${slider.min}" max="${slider.max}" step="${slider.step}" value="${value}"
               aria-valuetext="${text}" data-key="${slider.key}">
      </label>`;
  }

  /** Ex.: "6 botijões", "1 botijão", "80 km". */
  formatSliderValue(slider, value) {
    const unit = value === 1 && slider.unitOne ? slider.unitOne : slider.unit;
    return `${value} ${unit}`;
  }

  renderChoices(choice, selectedId) {
    const buttons = choice.options.map(option => {
      const isSelected = option.id === selectedId;
      return `<button type="button" class="choice${isSelected ? ' is-selected' : ''}" data-choice="${choice.key}" data-option="${option.id}" aria-pressed="${isSelected}">${escapeHtml(option.label)}</button>`;
    }).join('');
    const labelId = `${choice.key}-label`;

    return `
      <div class="field" role="group" aria-labelledby="${labelId}">
        <span class="field__label" id="${labelId}">${escapeHtml(choice.label)}</span>
        ${choice.hint ? `<span class="field__hint">${escapeHtml(choice.hint)}</span>` : ''}
        <div class="choices">${buttons}</div>
      </div>`;
  }

  /** Conteúdo do painel verde: total, barras por categoria e comparação. */
  renderResults() {
    const { total, parts, comparison, level } = this.calculator.calculate(this.store.getValues());
    const biggest = Math.max(...parts.map(part => part.tons)) || 1;

    const bars = parts.map(part => {
      const width = Math.round(part.tons / biggest * 100); // a maior categoria ocupa 100%
      return `
        <div class="bar-row">
          <div class="bar-row__head"><span>${escapeHtml(part.label)}</span><strong>${formatNumber(part.tons)} t</strong></div>
          <div class="bar-track" aria-hidden="true"><div class="bar-fill" style="width:${width}%;background:${part.color}"></div></div>
        </div>`;
    }).join('');

    const direction = comparison.isAbove ? 'acima' : 'abaixo';
    const compareText = `Isso é ${comparison.percent}% ${direction} da média brasileira de cerca de ${formatNumber(comparison.average)} t por pessoa.`;

    return `
      <h2 class="results__label">Sua pegada estimada por ano</h2>
      <div class="big-number">${formatNumber(total)}<span class="unit">t CO₂e</span></div>
      <div class="results__bars">${bars}</div>
      ${this.renderTarget(total, level)}
      ${SHOW_AVERAGE ? `<p class="results__compare">${escapeHtml(compareText)}</p>` : ''}
      <a class="btn btn--white" href="${paths.lessons}">${level.id === 'ok' ? 'Reduza cada vez mais' : 'Aprender a reduzir'}</a>`;
  }

  /** Escala colorida com as faixas da meta de 1,5 °C e um marcador no resultado. */
  renderTarget(total, level) {
    const percentOf = tons => Math.min(tons, TARGET_SCALE_MAX) / TARGET_SCALE_MAX * 100;

    let start = 0;
    const zones = TARGET_LEVELS.map(zone => {
      const end = Math.min(zone.max, TARGET_SCALE_MAX);
      const width = percentOf(end) - percentOf(start);
      start = end;
      return `<div class="target__zone" style="width:${width}%;background:${zone.color}"></div>`;
    }).join('');

    const ticks = TARGET_LEVELS
      .filter(zone => zone.max < TARGET_SCALE_MAX)
      .map(zone => `<span class="target__tick" style="left:${percentOf(zone.max)}%">${formatNumber(zone.max)} t</span>`)
      .join('');

    return `
      <div class="target">
        <div class="target__head">
          <span>Meta de 1,5 °C</span>
          <span class="target__badge" style="background:${level.color}">${escapeHtml(level.label)}</span>
        </div>
        <div class="target__scale" role="img"
             aria-label="${escapeHtml(`${formatNumber(total)} t: ${level.label}`)}">
          ${zones}
          <span class="target__marker" style="left:${percentOf(total)}%"></span>
        </div>
        <div class="target__ticks" aria-hidden="true">${ticks}</div>
        <p class="target__text">${escapeHtml(level.text)}</p>
      </div>`;
  }

  /** Liga os eventos dos sliders, dos botões de escolha e das abas. */
  mount(element) {
    element.addEventListener('input', event => {
      const input = event.target.closest('input[data-key]');
      if (input) this.onSliderInput(element, input);
    });

    element.addEventListener('click', event => {
      const button = event.target.closest('[data-choice]');
      if (button) this.onChoiceClick(element, button.dataset.choice, button.dataset.option);

      const tab = event.target.closest('[data-tab]');
      if (tab) this.showGroup(element, tab.dataset.tab, { focusTab: tab.classList.contains('calc__next') });
    });

    // Teclado nas abas: setas trocam de aba, Home e End vão para a primeira e a última.
    element.querySelector('[role="tablist"]').addEventListener('keydown', event => {
      const index = GROUPS.indexOf(this.activeGroup);
      const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: GROUPS.length - 1 };
      if (!(event.key in moves)) return;
      event.preventDefault();
      const target = (moves[event.key] + GROUPS.length) % GROUPS.length;
      this.showGroup(element, GROUPS[target], { focusTab: true });
    });
  }

  /** Mostra o painel de um grupo e esconde os outros. */
  showGroup(element, group, { focusTab = false } = {}) {
    this.activeGroup = group;
    GROUPS.forEach(name => {
      const id = groupId(name);
      const isActive = name === group;
      const tab = element.querySelector(`#tab-${id}`);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      element.querySelector(`#panel-${id}`).hidden = !isActive;
    });
    const activeTab = element.querySelector(`#tab-${groupId(group)}`);
    if (focusTab) activeTab.focus();
    // No celular, a aba pode estar fora da tela depois de "Próximo": traz de volta.
    activeTab.scrollIntoView({ block: 'nearest' });
  }

  onSliderInput(element, input) {
    const { key } = input.dataset;
    const value = Number(input.value);
    this.store.setSliderValue(key, value);
    const slider = SLIDERS.find(s => s.key === key);
    const text = this.formatSliderValue(slider, value);
    element.querySelector(`[data-display="${key}"]`).textContent = text;
    input.setAttribute('aria-valuetext', text); // leitor de tela lê "80 km", não só "80"
    this.updateResults(element);
  }

  onChoiceClick(element, key, optionId) {
    this.store.setChoice(key, optionId);
    element.querySelectorAll(`[data-choice="${key}"]`).forEach(button => {
      const isSelected = button.dataset.option === optionId;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
    this.updateResults(element);
  }

  // Redesenha só o painel de resultado, e não a tela toda,
  // para o slider não perder o foco enquanto é arrastado.
  updateResults(element) {
    element.querySelector('[data-results]').innerHTML = this.renderResults();
    element.querySelector('[data-mini-total]').innerHTML = this.renderMiniTotal();
    const subtotals = this.subtotals();
    GROUPS.forEach(group => {
      element.querySelector(`[data-subtotal="${groupId(group)}"]`).textContent = `${formatNumber(subtotals[group])} t`;
    });
    this.announce(element);
  }

  /**
   * Avisa o leitor de tela do novo total. Espera a pessoa parar de mexer
   * no slider, para não ler um número a cada passo.
   */
  announce(element) {
    clearTimeout(this.announceTimer);
    this.announceTimer = setTimeout(() => {
      const { total, level } = this.calculator.calculate(this.store.getValues());
      element.querySelector('[data-announce]').textContent =
        `Pegada estimada: ${formatNumber(total)} toneladas de CO₂ por ano. ${level.label}.`;
    }, 800);
  }
}
