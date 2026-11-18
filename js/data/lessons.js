// Conteúdo dos módulos sobre pegada de carbono.
// Cada módulo tem: título, tempo de leitura, cores, resumo, introdução,
// seções de texto, dicas ("Como melhorar") e um vídeo curto do YouTube
// (`video.id` é o código que aparece depois de "watch?v=" no link do vídeo)
// e as referências usadas no texto (`refs`).
export const LESSONS = [
  {
    title: 'O que é a pegada de carbono', time: '8 min', color: '#16a34a', tint: '#dcfce7',
    summary: 'Gases de efeito estufa, de onde vêm e como medimos as emissões de uma pessoa.',
    lead: 'A pegada de carbono é a soma dos gases de efeito estufa que uma pessoa, família ou empresa emite, direta ou indiretamente. Ela é medida em toneladas de CO₂ equivalente (CO₂e).',
    sections: [
      { h: 'O efeito estufa', ps: ['Alguns gases da atmosfera, como o dióxido de carbono (CO₂), o metano (CH₄) e o óxido nitroso (N₂O), retêm parte do calor que a Terra devolveria ao espaço. Esse efeito é natural e mantém o planeta habitável.', 'O problema começa quando a concentração desses gases aumenta rápido demais, como vem acontecendo desde a Revolução Industrial. Com mais gases retendo calor, a temperatura média do planeta sobe e o clima muda.'] },
      { h: 'Por que “CO₂ equivalente”', ps: ['Cada gás aquece o planeta com intensidade diferente. O metano, por exemplo, retém muito mais calor que o CO₂ nas primeiras décadas depois de emitido.', 'Para somar tudo numa só conta, convertemos cada gás na quantidade de CO₂ que teria o mesmo efeito. Daí vem a unidade CO₂e, usada na calculadora do EducaTi.'] },
      { h: 'Emissões diretas e indiretas', ps: ['Emissões diretas saem de algo que você usa: o escapamento do carro, a chama do fogão a gás.', 'As indiretas acontecem antes de o produto chegar até você: a energia que fabricou a roupa, o caminhão que trouxe a comida, a área desmatada para criar gado. Para a maioria das pessoas, as indiretas pesam mais.'] },
      { h: 'O caso do Brasil', ps: ['No Brasil, a maior parte das emissões vem do desmatamento e da agropecuária. Em muitos outros países, o principal responsável é a queima de carvão e petróleo para gerar energia.', 'Isso muda quais ações fazem mais diferença por aqui: alimentação e consumo têm um peso grande, além do transporte.'] },
      { h: 'Qual pegada é aceitável?', ps: [
        'Para o aquecimento global ficar em até 1,5 °C, a meta do Acordo de Paris, o estudo “1.5-Degree Lifestyles” (Sitra e Universidade Aalto, Finlândia) calculou quanto cada pessoa pode emitir por ano com o seu estilo de vida: cerca de 2,5 toneladas de CO₂e em 2030, 1,4 t em 2040 e só 0,7 t em 2050. A ONU, no Relatório sobre a Lacuna de Emissões, chega a um número parecido para 2030: cerca de 2,3 t por pessoa.',
        'Hoje estamos longe disso. A média mundial do estilo de vida é de cerca de 4,6 t por pessoa. No Brasil, as emissões de CO₂ de combustíveis fósseis ficam perto de 2,2 t por pessoa. Somando todos os gases, o país chega a 10,5 t brutas e 7,2 t líquidas por pessoa (SEEG, dados de 2024), porque o desmatamento e a agropecuária pesam muito. Essa parte depende pouco das escolhas de cada pessoa.',
        'Nessa conta de estilo de vida, que soma só o que cada pessoa consome, o brasileiro médio fica em cerca de 3,2 t por ano (dados de 2019): 1,9 t de comida, 0,6 t de transporte, 0,5 t de moradia e cerca de 0,2 t de compras, lazer e serviços. Ou seja, o Brasil já está um pouco acima da meta para 2030.',
        'A pegada de estilo de vida tem seis partes: alimentação, moradia (luz e gás), transporte do dia a dia, viagens de avião, compras (roupas, eletrônicos, móveis) e lazer e serviços (restaurantes, hotéis, academia). A calculadora do EducaTi pergunta sobre todas elas, divide a luz, o gás e a carona entre as pessoas, soma a parte da construção e manutenção da casa e mostra o resultado em três faixas: até 2,5 t está dentro da meta para 2030; entre 2,5 e 4,6 t está acima da meta, mas abaixo da média mundial; acima de 4,6 t está muito acima.'
      ] }
    ],
    tips: ['Faça a calculadora, anote o resultado e repita daqui a um mês.', 'Descubra qual categoria pesa mais na sua pegada e comece por ela.', 'Converse em casa: muitas emissões dependem de decisões da família inteira.', 'Procure saber de onde vêm os produtos que você mais consome.'],
    video: { id: 's2yhSTcBGMI', title: 'Sustentabilidade em 1 minuto: o que é pegada de carbono? (eCycle)' },
    refs: [
      { label: 'IPCC — Sexto Relatório de Avaliação: Relatório Síntese (2023)', url: 'https://www.ipcc.ch/report/ar6/syr/' },
      { label: 'Sitra, Aalto e IGES — 1.5-Degree Lifestyles (2019)', url: 'https://www.sitra.fi/en/publications/1-5-degree-lifestyles/' },
      { label: 'PNUMA (ONU) — Relatório sobre a Lacuna de Emissões 2021', url: 'https://www.unep.org/resources/emissions-gap-report-2021' },
      { label: 'SEEG — Sistema de Estimativas de Emissões de Gases de Efeito Estufa', url: 'https://seeg.eco.br/' },
      { label: 'Hot or Cool Institute — 1.5-Degree Lifestyles: Towards a Fair Consumption Space for All (2021)', url: 'https://hotorcool.org/wp-content/uploads/2021/10/Hot_or_Cool_1_5_lifestyles_FULL_REPORT_AND_ANNEX_B.pdf' }
    ]
  },
  {
    title: 'Transporte e cidade', time: '8 min', color: '#f97316', tint: '#ffedd5',
    summary: 'Carro, ônibus, bicicleta, caminhada e avião: quanto emite cada jeito de se deslocar.',
    lead: 'O jeito como você se desloca é uma das partes da pegada que mais dá para mudar no dia a dia. A diferença entre um meio de transporte e outro pode ser grande.',
    sections: [
      { h: 'Quanto emite cada meio', ps: ['Contando todo o ciclo de vida (fabricação do carro, produção do combustível e uso), um carro compacto ou médio no Brasil emite cerca de 186 g de CO₂e por quilômetro rodando só com gasolina e 155 g com a mistura média de gasolina e etanol. Se mais pessoas vão juntas, essa emissão é dividida entre elas.', 'Na média do Brasil, cada passageiro de ônibus ou metrô emite cerca de 90 g de CO₂e por quilômetro. É menos que um carro flex com uma pessoa só, e quanto mais cheio o ônibus, menor a emissão de cada passageiro. Bicicleta e caminhada praticamente não emitem.'] },
      { h: 'Etanol ou gasolina', ps: ['Boa parte dos carros brasileiros é flex. O etanol de cana também libera CO₂ ao ser queimado, mas a cana absorveu carbono enquanto crescia.', 'Por isso, considerando o ciclo completo, um carro flex rodando só com etanol emite cerca de 107 g de CO₂e por quilômetro: 31% menos que com a mistura média e bem menos que só com gasolina. Um carro elétrico, com a eletricidade brasileira, fica em torno de 54 g.'] },
      { h: 'A cidade também influencia', ps: ['Quem mora longe do trabalho e dos serviços do dia a dia e não tem transporte público de qualidade acaba dependendo do carro.', 'Ciclovias, corredores de ônibus e bairros com comércio e serviços por perto reduzem as emissões de todo mundo. Mobilidade também é uma questão de planejamento urbano.'] },
      { h: 'Viagens de avião', ps: ['O avião é o meio de transporte que mais emite por hora de viagem. Além do CO₂, os aviões soltam vapor e outros gases em grande altitude, o que aumenta o efeito de aquecimento. Por isso, os cálculos oficiais do Reino Unido multiplicam as emissões da aviação por 1,9. Voos curtos emitem ainda mais por quilômetro do que voos longos, porque decolar gasta muito combustível.', 'Pela conta da calculadora do EducaTi, uma viagem de ida e volta entre São Paulo e Recife, com cerca de 6 horas de voo, emite cerca de 1,2 t de CO₂e por pessoa: quase metade da meta anual de 2,5 t para 2030.', 'Ao mesmo tempo, pouca gente voa. Um estudo de 2020 estimou que só cerca de 11% da população mundial pegou um avião em 2018, e que 1% das pessoas responde por metade das emissões dos voos de passageiros. Para quem voa com frequência, cortar uma viagem pode pesar mais do que muitas mudanças pequenas no dia a dia.'] }
    ],
    tips: ['Em trajetos de até 2 ou 3 km, vá a pé ou de bicicleta.', 'Combine carona com colegas que fazem o mesmo caminho.', 'Prefira ônibus, metrô ou trem para distâncias maiores.', 'Se o carro for flex, compare o preço e abasteça com etanol quando compensar.', 'Junte várias tarefas numa única saída.', 'Em distâncias médias, compare o avião com o ônibus de viagem, que emite várias vezes menos por passageiro.', 'Se for voar, prefira voos diretos e fique mais dias em vez de fazer várias viagens curtas.', 'Troque reuniões e viagens de trabalho curtas por chamadas de vídeo quando der.'],
    video: { id: 'k4clz9SODPM', title: 'Quem polui mais: ônibus ou carros? (IEMA)' },
    refs: [
      { label: 'Our World in Data — Qual meio de transporte tem a menor pegada de carbono?', url: 'https://ourworldindata.org/travel-carbon-footprint' },
      { label: 'IEMA — Instituto de Energia e Meio Ambiente', url: 'https://energiaeambiente.org.br/' },
      { label: 'ANP — RenovaBio e a intensidade de carbono dos biocombustíveis', url: 'https://www.gov.br/anp/pt-br/assuntos/renovabio' },
      { label: 'ICCT — Emissões ao longo do ciclo de vida de carros flex e elétricos no Brasil (2023)', url: 'https://theicct.org/publication/comparacao-das-emissoes-de-gee-ao-longo-do-ciclo-de-vida-de-motores-de-combustaoflex-e-eletricos-veiculos-de-passageiros-brasil-oct23' },
      { label: 'Hot or Cool Institute — 1.5-Degree Lifestyles, Anexo B: Brasil (2021)', url: 'https://hotorcool.org/wp-content/uploads/2021/10/Hot_or_Cool_1_5_lifestyles_FULL_REPORT_AND_ANNEX_B.pdf' },
      { label: 'Gössling e Humpe — The global scale, distribution and growth of aviation, Global Environmental Change (2020)', url: 'https://doi.org/10.1016/j.gloenvcha.2020.102194' }
    ]
  },
  {
    title: 'Energia em casa', time: '6 min', color: '#ca8a04', tint: '#fef9c3',
    summary: 'A matriz elétrica brasileira e hábitos simples que reduzem o consumo.',
    lead: 'Toda vez que você liga um aparelho, alguma usina está gerando essa energia. Quanto CO₂ isso emite depende de como a eletricidade é produzida.',
    sections: [
      { h: 'A matriz elétrica brasileira', ps: ['A maior parte da eletricidade no Brasil vem de fontes renováveis, principalmente hidrelétricas, seguidas por eólica e solar. Por isso cada kWh gasto aqui emite bem menos que em países que dependem de carvão: cerca de 83 g de CO₂e contando todo o ciclo de vida das usinas, segundo o ICCT. O fator oficial do governo, que conta só a queima de combustíveis nas usinas, foi de 38,5 g em 2023.', 'Em períodos de seca, porém, usinas termelétricas a gás e a óleo são acionadas, e a emissão de cada kWh sobe.'] },
      { h: 'Para onde vai a energia', ps: ['Na média do Brasil, a moradia soma cerca de 0,5 t de CO₂e por pessoa por ano. Mais da metade (58%) vem da construção e da manutenção da casa; a eletricidade e o gás respondem por cerca de um quinto cada.', 'Em uma casa típica, chuveiro elétrico, geladeira e ar-condicionado estão entre os maiores consumidores.', 'Aparelhos em modo de espera gastam pouco por vez, mas ficam ligados o mês inteiro e somam na conta.'] },
      { h: 'O gás de cozinha', ps: ['O botijão (GLP) e o gás encanado são combustíveis fósseis e emitem CO₂ diretamente na sua cozinha.', 'Cozinhar com a panela tampada e usar panela de pressão reduz o tempo de fogo aceso.'] }
    ],
    tips: ['Tome banhos mais curtos e use o chuveiro na posição verão quando der.', 'Ao comprar eletrodomésticos, procure o selo Procel com classificação A.', 'Troque lâmpadas antigas por LED.', 'Tire da tomada aparelhos que ficam em espera.', 'Aproveite a luz e a ventilação naturais.'],
    video: { id: 'R9X3A3pje0U', title: 'Matriz Energética do Brasil (Ministério de Minas e Energia)' },
    refs: [
      { label: 'ICCT — Emissões de GEE no ciclo de vida da eletricidade e dos carros no Brasil (2023)', url: 'https://theicct.org/publication/comparacao-das-emissoes-de-gee-ao-longo-do-ciclo-de-vida-de-motores-de-combustaoflex-e-eletricos-veiculos-de-passageiros-brasil-oct23' },
      { label: 'Hot or Cool Institute — 1.5-Degree Lifestyles, Anexo B: Brasil (2021)', url: 'https://hotorcool.org/wp-content/uploads/2021/10/Hot_or_Cool_1_5_lifestyles_FULL_REPORT_AND_ANNEX_B.pdf' },
      { label: 'EPE — Matriz energética e elétrica do Brasil', url: 'https://www.epe.gov.br/pt/abcdenergia/matriz-energetica-e-eletrica' },
      { label: 'MCTI — Fatores de emissão de CO₂ da eletricidade no Brasil', url: 'https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/sirene/dados-e-ferramentas/fatores-de-emissao' },
      { label: 'Inmetro — Programa Brasileiro de Etiquetagem (selo de eficiência)', url: 'https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem' }
    ]
  },
  {
    title: 'Comida e clima', time: '7 min', color: '#0284c7', tint: '#e0f2fe',
    summary: 'Como a alimentação influencia as emissões, do campo até o prato.',
    lead: 'O que vai para o prato carrega emissões de várias etapas: da plantação ou do pasto até o lixo. No Brasil, essa é uma das partes mais importantes da pegada.',
    sections: [
      { h: 'Do campo até o prato', ps: ['A comida emite em várias etapas: desmatamento para abrir pasto ou lavoura, uso de fertilizantes, digestão do gado, transporte, embalagem e, no fim, o desperdício.', 'No Brasil, a comida é a maior parte da pegada: cerca de 1,9 t de CO₂e por pessoa por ano, na média. A carne sozinha responde por 59% disso, embora seja só 13% do que se come.'] },
      { h: 'Por que a carne bovina pesa mais', ps: ['Bois e vacas produzem metano durante a digestão, e a criação ocupa grandes áreas, muitas vezes abertas com desmatamento.', 'Por quilo, a carne bovina está entre os alimentos com maior pegada. Frango, ovos e porco emitem menos. Feijão, arroz, legumes e verduras emitem bem menos.'] },
      { h: 'Desperdício também conta', ps: ['Comida jogada fora carrega todas as emissões da produção sem alimentar ninguém.', 'No aterro, ao apodrecer sem oxigênio, ela ainda libera metano.'] }
    ],
    tips: ['Troque a carne vermelha por outras proteínas em algumas refeições da semana.', 'Valorize o feijão com arroz.', 'Compre alimentos da estação e de produtores da sua região.', 'Planeje as compras e aproveite as sobras.', 'Separe o lixo orgânico para compostagem.'],
    video: { id: '8w-M0y8CmuU', title: 'Por que cientistas especialistas em clima defendem mudança global de dieta (BBC News Brasil)' },
    refs: [
      { label: 'Hot or Cool Institute — 1.5-Degree Lifestyles, Anexo B: Brasil (2021)', url: 'https://hotorcool.org/wp-content/uploads/2021/10/Hot_or_Cool_1_5_lifestyles_FULL_REPORT_AND_ANNEX_B.pdf' },
      { label: 'Our World in Data — Impactos ambientais dos alimentos', url: 'https://ourworldindata.org/environmental-impacts-of-food' },
      { label: 'Poore e Nemecek — Reducing food’s environmental impacts, Science (2018)', url: 'https://doi.org/10.1126/science.aaq0216' },
      { label: 'PNUMA (ONU) — Índice de Desperdício de Alimentos 2024', url: 'https://www.unep.org/resources/publication/food-waste-index-report-2024' },
      { label: 'SEEG — Emissões da agropecuária e do uso da terra no Brasil', url: 'https://seeg.eco.br/' }
    ]
  },
  {
    title: 'Consumo e compras', time: '7 min', color: '#db2777', tint: '#fce7f3',
    summary: 'Roupas, celulares e outros objetos: onde está a pegada e como comprar melhor.',
    lead: 'Tudo o que compramos tem uma história antes de chegar até nós: matéria-prima, fábrica, transporte e embalagem. Boa parte das emissões de um objeto acontece antes mesmo de você usá-lo pela primeira vez.',
    sections: [
      { h: 'Onde está a pegada', ps: ['Em roupas, celulares, computadores e móveis, a maior parte das emissões vem da fabricação: extrair e processar materiais, produzir as peças e montar o produto. No caso dos eletrônicos, o uso no dia a dia pesa bem menos do que a produção.', 'No Brasil, as compras de objetos somam em média cerca de 130 kg de CO₂e por pessoa por ano, só 4% da pegada. Em países ricos, como Canadá e Finlândia, passam de 1 t. Mesmo assim, o jeito mais eficaz de reduzir essa parte é fazer cada objeto durar mais e comprar menos vezes.'] },
      { h: 'Moda rápida', ps: ['A moda rápida (fast fashion) lança coleções novas o tempo todo, com roupas baratas que duram pouco. Segundo o Programa das Nações Unidas para o Meio Ambiente (PNUMA), a indústria da moda responde por 2% a 8% das emissões mundiais de gases de efeito estufa, além de gastar muita água e gerar montanhas de tecido descartado.', 'Usar mais vezes cada peça, comprar de segunda mão, trocar com amigos e consertar o que rasgou são jeitos simples de diminuir esse impacto.'] },
      { h: 'Eletrônicos que duram', ps: ['A Agência Europeia do Ambiente analisou celulares, televisores, máquinas de lavar e aspiradores e concluiu que eles são usados, em média, pelo menos 2,3 anos a menos do que foram projetados para durar ou do que os próprios donos gostariam. Fazer esses aparelhos durarem mais reduz bastante o impacto ambiental.', 'Antes de trocar, vale perguntar: dá para trocar só a bateria ou a tela? Quando a troca for inevitável, vender, doar ou entregar o aparelho antigo em um ponto de coleta evita que ele vire lixo eletrônico.'] },
      { h: 'Reduzir vem antes de reciclar', ps: ['A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) define uma ordem de prioridade: primeiro não gerar resíduo, depois reduzir, reutilizar, reciclar e só então tratar e descartar.', 'Reciclar é importante, mas gasta energia e não recupera tudo. O objeto que nunca precisou ser fabricado é o que menos emite.'] },
      { h: 'Delivery, lazer e serviços', ps: ['Pedir comida, ir a restaurantes, viajar e usar serviços também tem pegada: embalagens, entregas e a energia dos estabelecimentos. Recusar talheres e sachês que você não vai usar, juntar pedidos e preferir lugares mais próximos ajuda a diminuir essa parte.'] }
    ],
    tips: ['Antes de comprar, espere alguns dias e veja se ainda precisa.', 'Prefira produtos que durem mais e tenham conserto fácil.', 'Procure brechós, sites de usados e trocas entre amigos.', 'Conserte roupas, sapatos e eletrônicos antes de substituir.', 'Descarte eletrônicos e pilhas em pontos de coleta, nunca no lixo comum.'],
    video: { id: '0v7f0KeNpv8', title: 'Desperdício: a fast fashion está alimentando nossa crise ecológica (PNUMA/ONU)' },
    refs: [
      { label: 'Hot or Cool Institute — 1.5-Degree Lifestyles, Anexo B: Brasil (2021)', url: 'https://hotorcool.org/wp-content/uploads/2021/10/Hot_or_Cool_1_5_lifestyles_FULL_REPORT_AND_ANNEX_B.pdf' },
      { label: 'PNUMA (ONU) — Moda e mudança climática: guia para comunicadores', url: 'https://www.unep.org/news-and-stories/press-release/unep-and-un-climate-change-provide-fashion-communicators-practical' },
      { label: 'Agência Europeia do Ambiente — Os benefícios de eletrônicos que duram mais (2020)', url: 'https://www.eea.europa.eu/en/analysis/publications/europes-consumption-in-a-circular-economy-the-benefits-of-longer-lasting-electronics' },
      { label: 'Lei 12.305/2010 — Política Nacional de Resíduos Sólidos', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm' },
      { label: 'Fundação Ellen MacArthur — A New Textiles Economy (2017)', url: 'https://www.ellenmacarthurfoundation.org/a-new-textiles-economy' }
    ]
  },
  {
    title: 'Mitos e verdades', time: '6 min', color: '#475569', tint: '#e2e8f0',
    summary: 'Plantar árvores compensa? Crédito de carbono resolve? Respostas diretas para dúvidas comuns.',
    lead: 'Muita coisa que se fala sobre clima é meia verdade. Conhecer as respostas ajuda a gastar energia com o que realmente faz diferença.',
    sections: [
      { h: 'Comprar comida local é o que mais reduz a pegada do prato?', ps: ['Nem sempre. O transporte costuma ser uma parte pequena das emissões dos alimentos: no caso da carne bovina, menos de 1%. O que você come pesa muito mais do que a distância que a comida percorreu.', 'A exceção são alimentos que viajam de avião, que vale evitar.'] },
      { h: 'Plantar árvores compensa as minhas emissões?', ps: ['Ajuda, mas não substitui cortar emissões. Uma muda leva décadas para crescer e absorver carbono, e pode morrer, queimar ou ser cortada no caminho. O IPCC é claro: remover carbono da atmosfera não substitui reduções profundas de emissões.', 'Proteger a floresta que já existe vale mais do que plantar uma nova, porque ela já guarda muito carbono.'] },
      { h: 'Crédito de carbono resolve?', ps: ['Depende muito da qualidade. Um estudo publicado na revista Science em 2023 analisou 26 projetos de conservação de florestas que vendiam créditos e concluiu que a maioria reduziu o desmatamento bem menos do que prometia. Outros cientistas contestaram parte dos métodos, e o debate continua.', 'Por isso, crédito de carbono pode ser um complemento, nunca o primeiro passo. Primeiro vem reduzir o que dá para reduzir.'] },
      { h: 'Carro elétrico polui mais que carro a combustão?', ps: ['No Brasil, não. O ICCT (Conselho Internacional de Transporte Limpo) comparou o ciclo de vida completo, da fabricação da bateria ao uso, e concluiu que um carro elétrico emite cerca de um terço do que um carro flex com a mistura média de gasolina e etanol. Isso acontece porque a eletricidade brasileira é, em grande parte, renovável.', 'O carro flex abastecido só com etanol emite cerca de 31% menos que a média, mas ainda mais que o elétrico. E nenhum carro bate ônibus, metrô, bicicleta ou caminhada.'] },
      { h: 'Reciclar resolve o problema do lixo?', ps: ['Reciclar é melhor do que mandar para o aterro, mas é a última opção antes do descarte, não a primeira. Reduzir e reutilizar evitam a fabricação de um objeto novo, que é onde está a maior parte das emissões.'] },
      { h: 'Uma pessoa sozinha não faz diferença?', ps: ['Faz, de dois jeitos. Primeiro, pela soma: a pegada média de estilo de vida do brasileiro, de cerca de 3,2 t por ano, já passa um pouco da meta de 2,5 t para 2030. Segundo, pelo exemplo: hábitos se espalham. Um estudo na Califórnia, nos Estados Unidos, mostrou que cada painel solar instalado em um bairro aumentava a chance de os vizinhos instalarem também.', 'Mas mudar a rotina não basta. As maiores reduções dependem de governos e empresas, assunto do próximo módulo.'] }
    ],
    tips: ['Desconfie de soluções que prometem compensar tudo sem mudar nada.', 'Priorize as mudanças que mais pesam: transporte, alimentação e consumo.', 'Ao ver um número sobre clima, procure a fonte e o ano.', 'Converse sobre o assunto com quem está perto: informação boa também se espalha.'],
    video: { id: '8mf2MsicayY', title: 'Elétrico polui mais ou não? Por trás da realidade no Brasil e na Europa (Vrum)' },
    refs: [
      { label: 'Our World in Data — Foque no que você come, não em se a comida é local', url: 'https://ourworldindata.org/food-choice-vs-eating-local' },
      { label: 'IPCC — Sexto Relatório de Avaliação: Relatório Síntese (2023)', url: 'https://www.ipcc.ch/report/ar6/syr/' },
      { label: 'West e outros — Action needed to make carbon offsets from forest conservation work for climate change mitigation, Science (2023)', url: 'https://doi.org/10.1126/science.ade3535' },
      { label: 'ICCT — Emissões ao longo do ciclo de vida de carros flex e elétricos no Brasil (2023)', url: 'https://theicct.org/publication/comparacao-das-emissoes-de-gee-ao-longo-do-ciclo-de-vida-de-motores-de-combustaoflex-e-eletricos-veiculos-de-passageiros-brasil-oct23' },
      { label: 'Bollinger e Gillingham — Peer Effects in the Diffusion of Solar Photovoltaic Panels, Marketing Science (2012)', url: 'https://doi.org/10.1287/mksc.1120.0727' }
    ]
  },
  {
    title: 'Além do individual', time: '7 min', color: '#7c3aed', tint: '#ede9fe',
    summary: 'Governos, empresas e comunidades: as mudanças que dependem de muita gente junta.',
    lead: 'Mudar a própria rotina é importante, mas boa parte das emissões depende de decisões que nenhuma pessoa toma sozinha: como a energia é gerada, se a floresta é protegida, como as cidades são planejadas. Entender isso ajuda a saber onde mais dá para agir.',
    sections: [
      { h: 'De onde veio a ideia de “pegada”', ps: ['A expressão “pegada de carbono” ficou famosa em meados dos anos 2000 com uma campanha publicitária da petroleira BP, criada pela agência Ogilvy, que trazia uma calculadora para cada pessoa medir as próprias emissões. Críticos apontam que a campanha ajudou a desviar a atenção das empresas de petróleo para o consumidor.', 'Isso não torna a pegada individual inútil: ela mostra de onde vêm as emissões da nossa rotina. Mas ela é só uma parte da história.'] },
      { h: 'Quem emite mais', ps: ['Um relatório da organização CDP, de 2017, ligou apenas 100 produtoras de combustíveis fósseis a 71% das emissões industriais de gases de efeito estufa do mundo desde 1988.', 'No Brasil, a maior parte das emissões vem do desmatamento e da agropecuária. Pelos dados do SEEG, sem as mudanças de uso da terra, principalmente o desmatamento, as emissões por pessoa do país cairiam de 10,5 t para cerca de 6,1 t por ano. Acabar com o desmatamento depende de fiscalização, leis e mercados, não de escolhas individuais.'] },
      { h: 'O papel dos governos', ps: ['Na meta climática apresentada em 2024 (a NDC), o Brasil se comprometeu a reduzir as emissões líquidas entre 59% e 67% até 2035, em comparação com 2005. Cumprir essa meta depende de políticas públicas: combate ao desmatamento, transporte público, energia limpa e regras para a indústria e a agropecuária.', 'As prefeituras também decidem muito: ciclovias, corredores de ônibus, coleta seletiva, arborização e para onde a cidade pode crescer.'] },
      { h: 'O que fazer além da sua rotina', ps: ['Votar levando o clima em conta e acompanhar o que os eleitos fazem. Participar de conselhos e consultas públicas da sua cidade. Perguntar às empresas de que você é cliente o que elas fazem com as próprias emissões. No trabalho, propor mudanças que valem para todos, como evitar viagens desnecessárias ou trocar equipamentos por modelos eficientes.', 'E conversar sobre o assunto. Quando o clima aparece nas conversas em casa, no trabalho e nas redes, fica mais fácil cobrar mudanças em conjunto.'] },
      { h: 'Individual e coletivo andam juntos', ps: ['Não é uma escolha entre um e outro. Mudanças na rotina reduzem emissões agora, mostram que outro jeito de viver é possível e dão mais força para cobrar quem decide em grande escala.'] }
    ],
    tips: ['Descubra se a sua cidade tem um plano de ação climática e o que ele prevê.', 'Antes de votar, veja o que os candidatos propõem para clima, transporte e desmatamento.', 'Pergunte às empresas de que você é cliente o que fazem para reduzir emissões.', 'Proponha uma mudança no seu trabalho ou no seu condomínio.', 'Junte-se a grupos do seu bairro que cuidam de praças, hortas ou coleta seletiva.'],
    video: { id: 'Eih-TW7Fl7o', title: 'O que é ação climática? A ativista brasileira Paloma Costa explica (ONU Brasil)' },
    refs: [
      { label: 'Mashable — The carbon footprint sham (2020)', url: 'https://mashable.com/feature/carbon-footprint-pr-campaign-sham' },
      { label: 'CDP — 100 empresas são a fonte de mais de 70% das emissões (2017)', url: 'https://www.cdp.net/press-releases/new-report-shows-just-100-companies-are-source-of-over-70-of-emissions' },
      { label: 'SEEG — Sistema de Estimativas de Emissões de Gases de Efeito Estufa', url: 'https://seeg.eco.br/' },
      { label: 'Agência Gov — Brasil apresenta sua nova meta climática (2024)', url: 'https://agenciagov.ebc.com.br/noticias/202411/brasil-apresenta-sua-nova-meta-climatica-alinhada-a-missao-1-5oc' }
    ]
  },
  {
    title: 'O lado bom de reduzir', time: '7 min', color: '#0d9488', tint: '#ccfbf1',
    summary: 'Saúde, dinheiro, cidades e natureza: o que melhora quando a pegada diminui.',
    lead: 'Reduzir a pegada de carbono não é só abrir mão de coisas. Muitas mudanças que cortam emissões também deixam a vida mais saudável, mais barata e mais agradável, e boa parte desses ganhos aparece logo, não só daqui a décadas.',
    sections: [
      { h: 'Ar mais limpo', ps: ['Carros, ônibus a diesel, usinas e queimadas soltam CO₂ e, junto com ele, fumaça e partículas finas que entram nos pulmões. Segundo a Organização Mundial da Saúde (OMS), a poluição do ar ao ar livre causou cerca de 4,2 milhões de mortes precoces no mundo em 2019, por doenças do coração, dos pulmões e câncer.', 'Menos combustível queimado significa menos CO₂ e, ao mesmo tempo, ar mais limpo na rua onde você mora. Esse ganho é local e aparece rápido.'] },
      { h: 'Mais saúde no dia a dia', ps: ['Trocar trajetos curtos de carro por caminhada ou bicicleta coloca o corpo em movimento. A OMS recomenda pelo menos 150 minutos de atividade física moderada por semana, e cerca de 31% dos adultos do mundo não chegam a isso. Pessoas pouco ativas têm de 20% a 30% mais risco de morte do que as que se exercitam o suficiente.', 'Na alimentação acontece algo parecido. Um prato com mais feijão, arroz, legumes, verduras e frutas, e menos carne vermelha e ultraprocessados, emite menos e segue o que recomenda o Guia Alimentar para a População Brasileira. A comissão científica EAT-Lancet chegou à mesma conclusão: a dieta que faz bem ao planeta também faz bem à saúde.'] },
      { h: 'Dinheiro no bolso', ps: ['Boa parte das ações que reduzem emissões também reduz gastos. Banho mais curto e lâmpadas LED baixam a conta de luz; menos viagens de carro economizam combustível e estacionamento; planejar as compras de comida evita pagar por algo que vai acabar no lixo.', 'Comprar menos e escolher produtos que duram mais também alivia o orçamento e gera menos lixo.'] },
      { h: 'Cidades mais agradáveis', ps: ['Quando mais gente anda a pé, de bicicleta ou de transporte público, as ruas ficam com menos trânsito, menos barulho e menos acidentes.', 'Sobra espaço para calçadas, praças e árvores, que também deixam a cidade mais fresca nos dias de calor.'] },
      { h: 'Clima e natureza protegidos', ps: ['Cada fração de grau de aquecimento evitada faz diferença. O IPCC, painel de cientistas do clima da ONU, mostrou que limitar o aquecimento a 1,5 °C, em vez de 2 °C, reduz ondas de calor extremas, secas e perdas nas colheitas. Os recifes de coral, por exemplo, encolheriam de 70% a 90% com 1,5 °C, mas mais de 99% com 2 °C.', 'No Brasil, comer menos carne ligada ao desmatamento e apoiar o fim das derrubadas ajuda a manter a floresta em pé. Ela guarda carbono e abriga uma enorme variedade de plantas e animais.'] }
    ],
    tips: ['Escolha mudanças com ganho duplo, como ir a pé à padaria: você se movimenta e emite menos.', 'Anote quanto gasta hoje com luz e combustível e compare depois de um mês.', 'Troque uma refeição com carne vermelha por semana por uma com feijão, lentilha ou grão-de-bico.', 'Chame alguém da família ou do trabalho para mudar junto: fica mais fácil manter o hábito.', 'Refaça a calculadora e veja quanto a sua pegada caiu.'],
    video: { id: 'juvlWJ7v3_A', title: 'Mudanças Climáticas: seja parte da solução (WWF-Brasil)' },
    refs: [
      { label: 'OMS — Qualidade do ar ao ar livre e saúde', url: 'https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health' },
      { label: 'OMS — Atividade física', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
      { label: 'Ministério da Saúde — Guia Alimentar para a População Brasileira', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf' },
      { label: 'EAT-Lancet — Comissão sobre alimentação, planeta e saúde', url: 'https://eatforum.org/eat-lancet-commission/' },
      { label: 'IPCC — Relatório especial sobre o aquecimento global de 1,5 °C (2018)', url: 'https://www.ipcc.ch/sr15/' }
    ]
  }
];
