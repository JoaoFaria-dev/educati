import { View } from './View.js';
import { paths } from '../router/Router.js';
import { STEPS } from '../data/config.js';
import { escapeHtml, formatNumber } from '../utils/format.js';

/** Página inicial: apresentação, resumo da pegada e "Como funciona". */
export class HomeView extends View {
  navKey = 'home';

  /**
   * @param {import('../models/CalculatorStore.js').CalculatorStore} store
   * @param {import('../models/FootprintCalculator.js').FootprintCalculator} calculator
   */
  constructor(store, calculator) {
    super();
    this.store = store;
    this.calculator = calculator;
  }

  render() {
    return this.renderHero() + this.renderSteps();
  }

  renderHero() {
    return `
      <section class="container hero">
        <div class="hero__text">
          <span class="badge badge--sun">Clima no dia a dia</span>
          <h1 class="hero__title">Descubra quanto CO₂ você emite e aprenda a reduzir.</h1>
          <p class="hero__lead">O EducaTi calcula a sua pegada de carbono a partir da rotina e mostra, em conteúdos curtos, o que fazer para reduzir.</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${paths.calculator}">Calcular minha pegada</a>
            <a class="btn btn--outline" href="${paths.lessons}">Ver os módulos</a>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__blob" aria-hidden="true"></div>
          ${this.renderSummaryCard()}
        </div>
      </section>`;
  }

  /** Cartão com o total, a barra dividida por categoria e a legenda. */
  renderSummaryCard() {
    const { total, parts } = this.calculator.calculate(this.store.getValues());

    // A largura de cada pedaço da barra é proporcional às toneladas.
    // O mínimo de 0,01 evita que uma categoria zerada some de vez.
    const barSegments = parts
      .map(part => `<div style="flex:${Math.max(part.tons, 0.01)};background:${part.color}"></div>`)
      .join('');

    const legendItems = parts.map(part => `
      <div class="legend__item">
        <span class="legend__dot" style="background:${part.color}"></span>
        <span class="legend__label">${escapeHtml(part.label)}</span>
        <strong>${formatNumber(part.tons)}</strong>
      </div>`).join('');

    return `
      <div class="summary-card">
        <div class="summary-card__head">
          <span class="summary-card__title">Sua pegada estimada</span>
          <span class="summary-card__period">por ano</span>
        </div>
        <div class="big-number">${formatNumber(total)}<span class="unit">t CO₂e</span></div>
        <div class="stack-bar" aria-hidden="true">${barSegments}</div>
        <div class="legend">${legendItems}</div>
      </div>`;
  }

  renderSteps() {
    const steps = STEPS.map(step => `
      <div class="step step--${step.tone}">
        <span class="step__n">${step.n}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>`).join('');

    return `
      <section class="how">
        <div class="container how__inner">
          <h2 class="section-title">Como funciona</h2>
          <div class="steps">${steps}</div>
        </div>
      </section>`;
  }
}
