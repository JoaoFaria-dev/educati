// Configurações fixas do EducaTi: números da calculadora e textos curtos.
// Para mudar um fator de emissão ou uma opção da calculadora, edite só aqui.

/**
 * Média brasileira da pegada de estilo de vida, em toneladas de CO₂e por pessoa por ano
 * (Hot or Cool Institute, "1.5-Degree Lifestyles", 2021, dados de 2019).
 * Usa a mesma metodologia da meta abaixo, por isso dá para comparar as duas.
 */
export const AVERAGE_BR = 3.2;

/** Mostra (ou esconde) a frase que compara o resultado com a média brasileira. */
export const SHOW_AVERAGE = true;

/**
 * Meta climática por pessoa, em toneladas de CO₂e por ano, para limitar
 * o aquecimento a 1,5 °C (estudo "1.5-Degree Lifestyles", Sitra/Aalto).
 * Média mundial de estilo de vida no mesmo estudo: ~4,6 t.
 */
export const CLIMATE_TARGETS = { y2030: 2.5, y2040: 1.4, y2050: 0.7, worldAverage: 4.6 };

/**
 * Faixas usadas na calculadora, comparando o total com a meta de 2030
 * e com a média mundial. `max` é o limite superior de cada faixa.
 */
export const TARGET_LEVELS = [
  { id: 'ok', max: CLIMATE_TARGETS.y2030, label: 'Dentro da meta', color: '#bbf7d0',
    text: 'Sua pegada cabe na meta de 1,5 °C para 2030. O próximo passo é chegar a 1,4 t em 2040 e 0,7 t em 2050.' },
  { id: 'near', max: CLIMATE_TARGETS.worldAverage, label: 'Acima da meta', color: '#fde68a',
    text: 'Você passa da meta de 2,5 t por pessoa em 2030, mas está abaixo da média mundial. Veja qual categoria pesa mais e comece por ela.' },
  { id: 'over', max: Infinity, label: 'Muito acima', color: '#fca5a5',
    text: 'Sua pegada está acima da média mundial e bem longe da meta de 2,5 t. Veja nos módulos o que mudar primeiro.' }
];

/** Fim da escala da barra de meta, em toneladas (valores maiores ficam no fim). */
export const TARGET_SCALE_MAX = 8;

/*
 * COMO A CONTA É FEITA
 * Igual às calculadoras de referência: quantidade × fator de emissão, somando as categorias.
 * Todos os fatores contam o ciclo de vida (produção + uso), como o estudo que define a meta
 * e a média brasileira, para que o resultado possa ser comparado com eles.
 *
 * Fonte principal para o Brasil: Hot or Cool Institute, "1.5-Degree Lifestyles: Towards a Fair
 * Consumption Space for All" (2021), Anexo B, média brasileira de 2019:
 *   comida 1,89 t · moradia 0,51 t · transporte 0,64 t · compras 0,13 t · lazer e serviços 0,09 t
 */

/** Fatores de emissão, em kg de CO₂e. */
export const EMISSION_FACTORS = {
  // Ônibus/metrô, por passageiro-km: média brasileira (33% de 0,64 t ÷ 2.200 km de transporte coletivo).
  bus: 0.09,
  // Avião, por hora de voo: ~0,34 kg CO₂e por passageiro-km na média brasileira (36% de 0,64 t ÷ 670 km),
  // já com o efeito da altitude, × ~600 km/h de velocidade média de um voo doméstico.
  flight: 200,
  // Eletricidade, por kWh: ciclo de vida da matriz brasileira (ICCT, 2023). O fator oficial do MCTI
  // (38,5 g em 2023) conta só a queima de combustíveis nas usinas.
  kwh: 0.083,
  // Botijão de GLP de 13 kg: 63,1 t CO₂/TJ × 47,3 GJ/t (fatores do IPCC) = ~2,99 kg CO₂ por kg de gás.
  gas: 39
};

/**
 * Parte fixa da moradia, por pessoa e por ano, em t CO₂e: construção e manutenção da casa
 * (58% de 0,51 t na média brasileira). Não depende das respostas.
 */
export const HOUSING_BASE_TONS = 0.3;

/**
 * Combustível do carro, em kg de CO₂e por km rodado (ciclo de vida, carros compactos e médios,
 * ICCT 2023). O valor é dividido pelo número de pessoas no carro.
 */
export const FUELS = [
  { id: 'gasolina', label: 'Gasolina', kgPerKm: 0.186 },
  { id: 'flex', label: 'Flex (gasolina e etanol)', kgPerKm: 0.155 },
  { id: 'etanol', label: 'Só etanol', kgPerKm: 0.107 },
  { id: 'eletrico', label: 'Elétrico', kgPerKm: 0.054 }
];

/**
 * Alimentação, em t CO₂e por ano. "Onívora" é a dieta média brasileira (1,89 t, sendo 1,11 t de carne
 * e 0,24 t de laticínios). As outras partem dela: vegetariana tira a carne e soma ~0,1 t de proteína
 * vegetal e laticínios extras; vegana tira também laticínios e ovos; "muita carne" soma 50% de carne.
 */
export const DIETS = [
  { id: 'vegana', label: 'Vegana', tons: 0.6 },
  { id: 'vegetariana', label: 'Vegetariana', tons: 0.9 },
  { id: 'onivora', label: 'Onívora', tons: 1.9 },
  { id: 'carne', label: 'Muita carne', tons: 2.4 }
];

/**
 * Compras (roupas, eletrônicos, móveis...), em t CO₂e por ano. "Moderado" é a média brasileira
 * (US$ 310 por ano × 0,42 kg CO₂e/US$ = 0,13 t). As outras opções são cerca de metade e o dobro e meio.
 */
export const SHOPPING = [
  { id: 'pouco', label: 'Só o necessário', tons: 0.07 },
  { id: 'moderado', label: 'Moderado', tons: 0.13 },
  { id: 'muito', label: 'Compro muito', tons: 0.3 }
];

/**
 * Lazer e serviços, em t CO₂e por ano. "Moderado" é a média brasileira
 * (lazer US$ 280 × 0,14 + serviços US$ 410 × 0,12 ≈ 0,09 t). As outras são cerca de metade e o dobro.
 */
export const SERVICES = [
  { id: 'pouco', label: 'Pouco', tons: 0.05 },
  { id: 'moderado', label: 'Moderado', tons: 0.09 },
  { id: 'muito', label: 'Muito', tons: 0.2 }
];

/**
 * Campos da calculadora, na ordem em que aparecem na tela.
 * `type`: 'slider' (número) ou 'choice' (botões). `key`: nome do valor guardado no estado.
 * `group`: aba onde o campo aparece (a ordem das abas segue a ordem dos campos). `unitOne`: unidade no singular, usada quando o valor é 1.
 */
export const FIELDS = [
  { type: 'slider', key: 'car', group: 'Carro', label: 'Carro por semana', hint: 'Quilômetros que você anda de carro, como motorista ou passageiro.',
    min: 0, max: 500, step: 10, unit: 'km' },
  { type: 'choice', key: 'fuel', group: 'Carro', label: 'Combustível do carro', options: FUELS },
  { type: 'slider', key: 'carPeople', group: 'Carro', label: 'Pessoas no carro', hint: 'Contando com você. A emissão do carro é dividida entre todos.',
    min: 1, max: 5, step: 1, unit: 'pessoas', unitOne: 'pessoa' },
  { type: 'slider', key: 'bus', group: 'Ônibus e avião', label: 'Ônibus ou metrô por semana', min: 0, max: 300, step: 10, unit: 'km' },
  { type: 'slider', key: 'flight', group: 'Ônibus e avião', label: 'Avião por ano', hint: 'Horas de voo somando ida e volta.',
    min: 0, max: 60, step: 1, unit: 'h' },
  { type: 'slider', key: 'people', group: 'Moradia', label: 'Pessoas em casa',
    hint: 'Contando com você. A luz e o gás são divididos entre todos. A construção e a manutenção da casa somam mais 0,3 t por pessoa (média brasileira).',
    min: 1, max: 10, step: 1, unit: 'pessoas', unitOne: 'pessoa' },
  { type: 'slider', key: 'kwh', group: 'Moradia', label: 'Energia elétrica da casa por mês', hint: 'O consumo em kWh que aparece na conta de luz.',
    min: 0, max: 600, step: 10, unit: 'kWh' },
  { type: 'slider', key: 'gas', group: 'Moradia', label: 'Gás de cozinha da casa por ano', hint: 'Botijões de 13 kg usados em casa.',
    min: 0, max: 24, step: 1, unit: 'botijões', unitOne: 'botijão' },
  { type: 'choice', key: 'diet', group: 'Consumo', label: 'Alimentação', options: DIETS },
  { type: 'choice', key: 'shopping', group: 'Consumo', label: 'Compras', hint: 'Roupas, celular, eletrônicos, móveis e outros objetos.', options: SHOPPING },
  { type: 'choice', key: 'services', group: 'Consumo', label: 'Lazer e serviços', hint: 'Restaurantes, delivery, hotéis, shows, academia, streaming.', options: SERVICES }
];

/** Só os sliders e só as escolhas (usados para validar os valores salvos). */
export const SLIDERS = FIELDS.filter(field => field.type === 'slider');
export const CHOICES = FIELDS.filter(field => field.type === 'choice');

/**
 * Valores iniciais: perto do brasileiro médio, para o total inicial ficar perto da média (3,2 t).
 * Carro ~1.200 km/ano, ônibus ~2.200 km/ano e avião ~670 km/ano (Hot or Cool, 2021);
 * 3 pessoas em casa (média de 2,79 moradores por domicílio, IBGE, Censo 2022).
 */
export const DEFAULT_VALUES = {
  car: 20, fuel: 'flex', carPeople: 1, bus: 40, flight: 1,
  people: 3, kwh: 150, gas: 6,
  diet: 'onivora', shopping: 'moderado', services: 'moderado'
};

/** Passos da seção "Como funciona" na página inicial. */
export const STEPS = [
  { n: '1', title: 'Responda sobre a rotina', text: 'Transporte, moradia, alimentação, compras e lazer. Leva cerca de dois minutos.', tone: 'mint' },
  { n: '2', title: 'Veja o seu CO₂', text: 'A calculadora mostra quanto você emite por ano e de onde vem cada parte.', tone: 'sun' },
  { n: '3', title: 'Aprenda a reduzir', text: 'Módulos curtos mostram o que mudar primeiro e o que você ganha com isso, cada um com um vídeo rápido.', tone: 'sky' }
];
