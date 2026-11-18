# EducaTi

Site sobre pegada de carbono para qualquer pessoa. Calcula a pegada de carbono a partir da rotina (transporte, viagens de avião, moradia, alimentação, compras e serviços), compara com a meta de 1,5 °C e oferece módulos curtos com dicas, vídeos e referências, incluindo os ganhos de reduzir a pegada (saúde, dinheiro, cidades e natureza).

Feito com **HTML, CSS e JavaScript puros**, sem build nem dependências.

## Telas

| Rota | Tela |
| --- | --- |
| `#/` | Início, com resumo da pegada e "Como funciona" |
| `#/calculadora` | Calculadora de CO₂, dividida em abas (Carro, Ônibus e avião, Moradia, Consumo), com o resultado e a meta de 1,5 °C ao lado |
| `#/aprender` | Lista de módulos |
| `#/aprender/N` | Módulo N, com seções, "Como melhorar", vídeo do YouTube e referências |

Os valores da calculadora ficam salvos no `localStorage` do navegador.

## Estrutura

```
educati/
├── index.html                  # estrutura da página (header, <main id="app">, footer)
├── favicon.svg
├── css/
│   └── style.css               # todo o visual (cores em variáveis no :root)
└── js/
    ├── main.js                 # ponto de entrada: cria os objetos e chama app.start()
    ├── App.js                  # troca a tela quando o endereço muda
    ├── data/
    │   ├── config.js           # fatores de emissão, metas, sliders, escolhas, textos fixos
    │   └── lessons.js          # conteúdo dos módulos
    ├── models/
    │   ├── CalculatorStore.js  # valores escolhidos na calculadora (+ localStorage)
    │   └── FootprintCalculator.js  # as contas da pegada de carbono
    ├── router/
    │   └── Router.js           # lê o #/endereço e diz qual tela mostrar
    ├── components/
    │   ├── NavBar.js           # destaca o link ativo no menu
│   └── ThemeToggle.js      # botão de modo noturno (lembra a escolha)
    ├── views/
    │   ├── View.js             # classe base das telas
    │   ├── HomeView.js         # Início
    │   ├── CalculatorView.js   # Calculadora
    │   ├── LessonsView.js      # Lista de módulos
    │   └── LessonView.js       # Um módulo
    └── utils/
        └── format.js           # formatar números e escapar HTML
```

### Como as peças conversam

1. `main.js` cria o `CalculatorStore`, o `FootprintCalculator`, o `Router`, o `NavBar` e as telas, e entrega tudo para o `App`.
2. O `Router` avisa o `App` sempre que o endereço muda (`#/calculadora`, `#/aprender/2`...).
3. O `App` escolhe a tela, chama `render()` para gerar o HTML e `mount()` para ligar os eventos.
4. A `CalculatorView` grava os valores no `CalculatorStore` e pede as contas ao `FootprintCalculator`.

Cada camada só conhece a de baixo: os **models** não sabem nada de HTML, e as **views** não fazem contas.

## Como rodar no VS Code

1. Abra a pasta no VS Code (`code .`).
2. Instale a extensão recomendada **Live Server** (o VS Code sugere ao abrir a pasta).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

O JavaScript usa módulos (`import`/`export`). Por isso o site precisa de um servidor: se você abrir o `index.html` com dois cliques, a página fica em branco. Sem o VS Code, dá para rodar `python3 -m http.server` na pasta e abrir http://localhost:8000.

## Como funciona o cálculo

Igual às calculadoras de referência: **quantidade × fator de emissão**, somando as categorias. Todos os fatores contam o ciclo de vida (produção + uso), como o estudo que define a meta e a média brasileira. Resultado em toneladas de CO₂e por pessoa por ano:

- **Carro:** km/semana × 52 × fator do combustível ÷ pessoas no carro. Fatores por km do ICCT (2023): gasolina 0,186 · flex 0,155 · etanol 0,107 · elétrico 0,054 kg
- **Ônibus/metrô:** km/semana × 52 × 0,09 kg (média brasileira por passageiro-km)
- **Avião:** horas/ano × 200 kg (média brasileira de ~0,34 kg por passageiro-km, já com o efeito da altitude, × ~600 km/h)
- **Moradia:** 0,3 t fixa (construção e manutenção da casa) + (kWh/mês × 12 × 0,083 kg + botijões/ano × 39 kg) ÷ pessoas em casa
- **Comida:** vegana 0,6 · vegetariana 0,9 · onívora 1,9 (média brasileira) · muita carne 2,4
- **Compras:** só o necessário 0,07 · moderado 0,13 (média brasileira) · compro muito 0,3
- **Lazer e serviços:** pouco 0,05 · moderado 0,09 (média brasileira) · muito 0,2

As médias brasileiras vêm do Hot or Cool Institute, *1.5-Degree Lifestyles* (2021), Anexo B, dados de 2019: 3,2 t por pessoa (comida 1,9 · moradia 0,5 · transporte 0,6 · compras 0,1 · lazer e serviços 0,1). Com os valores iniciais, que imitam o brasileiro médio, a calculadora dá cerca de 3,1 t.

O total é comparado com a meta de 1,5 °C (2,5 t por pessoa em 2030) e com essa média brasileira. A explicação de cada número fica em comentários no `js/data/config.js`.

**Limites:** é uma estimativa por médias, não uma medição. As opções de alimentação, compras e serviços partem da média brasileira; as variações (vegana, "compro muito" etc.) são aproximações. Água, esgoto e lixo não entram na conta.

## Tema e acessibilidade

- **Modo noturno:** botão no cabeçalho. Sem escolha salva, segue o tema do sistema. As cores ficam em variáveis no topo do `css/style.css`: o bloco `:root` é o tema claro e `:root[data-theme="dark"]`, o escuro.
- **Contraste:** textos com contraste mínimo de 4,5:1 (WCAG AA) nos dois temas.
- **Teclado:** link "Pular para o conteúdo" no topo e foco visível em tudo que é clicável. Ao trocar de tela, o foco vai para o título da página nova.
- **Leitor de tela:** os sliders leem o valor com a unidade ("80 km"), o novo total é anunciado quando a pessoa para de mexer e os links externos avisam que abrem em outra aba.
