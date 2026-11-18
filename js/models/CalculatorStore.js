import { CHOICES, DEFAULT_VALUES, SLIDERS } from '../data/config.js';

const STORAGE_KEY = 'educati_calc';

/**
 * Guarda os valores que o usuário escolheu na calculadora
 * (sliders de transporte e moradia, e as escolhas de alimentação, compras e serviços)
 * e salva tudo no localStorage, para não perder ao recarregar a página.
 */
export class CalculatorStore {
  constructor() {
    this.values = this.load();
  }

  /** Devolve uma cópia dos valores atuais. */
  getValues() {
    return { ...this.values };
  }

  /** Muda o valor de um slider (car, bus, flight, people, kwh ou gas). Valores inválidos são ignorados. */
  setSliderValue(key, value) {
    if (!CalculatorStore.isValidSliderValue(key, value)) return;
    this.values[key] = value;
    this.save();
  }

  /** Muda uma escolha (diet, shopping ou services). Ids desconhecidos são ignorados. */
  setChoice(key, optionId) {
    if (!CalculatorStore.isValidChoice(key, optionId)) return;
    this.values[key] = optionId;
    this.save();
  }

  /** Lê os valores salvos. Se não houver nada (ou algo inválido), usa os padrões. */
  load() {
    const values = { ...DEFAULT_VALUES };
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch (error) {
      // localStorage bloqueado ou conteúdo corrompido: segue com os padrões.
    }
    if (!saved) return values;

    SLIDERS.forEach(({ key }) => {
      const value = Number(saved[key]);
      if (CalculatorStore.isValidSliderValue(key, value)) values[key] = value;
    });
    CHOICES.forEach(({ key }) => {
      if (CalculatorStore.isValidChoice(key, saved[key])) values[key] = saved[key];
    });
    return values;
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.values));
    } catch (error) {
      // Sem localStorage a calculadora continua funcionando, só não lembra os valores.
    }
  }

  static isValidSliderValue(key, value) {
    const slider = SLIDERS.find(s => s.key === key);
    return Boolean(slider) && Number.isFinite(value) && value >= slider.min && value <= slider.max;
  }

  static isValidChoice(key, optionId) {
    const choice = CHOICES.find(c => c.key === key);
    return Boolean(choice) && choice.options.some(option => option.id === optionId);
  }
}
