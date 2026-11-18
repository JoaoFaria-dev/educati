// Ponto de entrada: cria os objetos e liga a aplicação.
// Este é o único script carregado pelo index.html; os outros vêm por `import`.

import { LESSONS } from './data/lessons.js';
import { CalculatorStore } from './models/CalculatorStore.js';
import { FootprintCalculator } from './models/FootprintCalculator.js';
import { Router } from './router/Router.js';
import { NavBar } from './components/NavBar.js';
import { ThemeToggle } from './components/ThemeToggle.js';
import { HomeView } from './views/HomeView.js';
import { CalculatorView } from './views/CalculatorView.js';
import { LessonsView } from './views/LessonsView.js';
import { LessonView } from './views/LessonView.js';
import { App } from './App.js';

// A tela inicial e a calculadora usam o mesmo store,
// então o resumo da página inicial mostra os valores escolhidos na calculadora.
const store = new CalculatorStore();
const calculator = new FootprintCalculator();

const app = new App({
  root: document.getElementById('app'),
  router: new Router(LESSONS.length),
  navBar: new NavBar(document),
  views: {
    home: new HomeView(store, calculator),
    calc: new CalculatorView(store, calculator),
    learn: new LessonsView(LESSONS),
    lesson: new LessonView(LESSONS)
  }
});

app.start();

new ThemeToggle(document.querySelector('[data-theme-toggle]')).start();

// "Pular para o conteúdo": o endereço usa "#" para as rotas, então em vez de
// seguir o link (que trocaria a tela) só movemos o foco para o <main>.
document.querySelector('[data-skip-link]').addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('app').focus();
});
