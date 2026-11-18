import { AVERAGE_BR, CHOICES, EMISSION_FACTORS, HOUSING_BASE_TONS, TARGET_LEVELS } from '../data/config.js';

const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;
const KG_PER_TON = 1000;

/**
 * Faz as contas da pegada de carbono.
 * Não mexe em HTML: recebe os valores da calculadora e devolve números.
 */
export class FootprintCalculator {
  /**
   * @param {{car: number, fuel: string, carPeople: number, bus: number, flight: number,
   *          people: number, kwh: number, gas: number,
   *          diet: string, shopping: string, services: string}} values
   * @returns {{
   *   total: number,
   *   parts: {label: string, group: string, color: string, tons: number}[],
   *   comparison: {average: number, percent: number, isAbove: boolean},
   *   level: {id: string, max: number, label: string, color: string, text: string}
   * }}
   */
  calculate(values) {
    // Luz e gás são da casa inteira: cada morador fica com a sua parte.
    // A construção e a manutenção da casa entram como uma parte fixa por pessoa.
    const people = Math.max(1, values.people || 1);
    const home = HOUSING_BASE_TONS
      + (this.fromMonthlyKwh(values.kwh, EMISSION_FACTORS.kwh)
        + this.fromYearlyAmount(values.gas, EMISSION_FACTORS.gas)) / people;

    // O carro emite o mesmo levando 1 ou 4 pessoas: a emissão é dividida entre elas.
    const carPeople = Math.max(1, values.carPeople || 1);
    const car = this.fromWeeklyKm(values.car, this.choiceOption('fuel', values.fuel).kgPerKm) / carPeople;

    const parts = [
      { label: 'Carro', group: 'Carro', color: '#f97316', tons: car },
      { label: 'Ônibus', group: 'Ônibus e avião', color: '#38bdf8', tons: this.fromWeeklyKm(values.bus, EMISSION_FACTORS.bus) },
      { label: 'Avião', group: 'Ônibus e avião', color: '#c084fc', tons: this.fromYearlyAmount(values.flight, EMISSION_FACTORS.flight) },
      { label: 'Moradia', group: 'Moradia', color: '#facc15', tons: home },
      { label: 'Comida', group: 'Consumo', color: '#a3e635', tons: this.fromChoice('diet', values.diet) },
      { label: 'Compras', group: 'Consumo', color: '#fb7185', tons: this.fromChoice('shopping', values.shopping) },
      { label: 'Lazer e serviços', group: 'Consumo', color: '#94a3b8', tons: this.fromChoice('services', values.services) }
    ];
    const total = parts.reduce((sum, part) => sum + part.tons, 0);
    return { total, parts, comparison: this.compareWithAverage(total), level: this.levelFor(total) };
  }

  /** km por semana → toneladas de CO₂ por ano. */
  fromWeeklyKm(kmPerWeek, kgPerKm) {
    return kmPerWeek * WEEKS_PER_YEAR * kgPerKm / KG_PER_TON;
  }

  /** kWh por mês → toneladas de CO₂ por ano. */
  fromMonthlyKwh(kwhPerMonth, kgPerKwh) {
    return kwhPerMonth * MONTHS_PER_YEAR * kgPerKwh / KG_PER_TON;
  }

  /** Quantidade por ano (horas de voo, botijões) → toneladas de CO₂ por ano. */
  fromYearlyAmount(amountPerYear, kgPerUnit) {
    return amountPerYear * kgPerUnit / KG_PER_TON;
  }

  /** Opção escolhida (alimentação, compras, serviços) → toneladas de CO₂ por ano. */
  fromChoice(key, optionId) {
    return this.choiceOption(key, optionId).tons;
  }

  /** Acha a opção escolhida. Se o id for desconhecido, usa a opção do meio como padrão. */
  choiceOption(key, optionId) {
    const { options } = CHOICES.find(choice => choice.key === key);
    return options.find(o => o.id === optionId) || options[Math.floor(options.length / 2)];
  }

  /** Em qual faixa da meta climática o total cai. */
  levelFor(total) {
    return TARGET_LEVELS.find(level => total <= level.max) || TARGET_LEVELS[TARGET_LEVELS.length - 1];
  }

  /** Quantos % o total está acima (ou abaixo) da média brasileira. */
  compareWithAverage(total) {
    return {
      average: AVERAGE_BR,
      percent: Math.round(Math.abs(total - AVERAGE_BR) / AVERAGE_BR * 100),
      isAbove: total > AVERAGE_BR
    };
  }
}
