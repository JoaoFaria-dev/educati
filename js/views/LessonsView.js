import { View } from './View.js';
import { paths } from '../router/Router.js';
import { escapeHtml } from '../utils/format.js';

/** Lista com um cartão para cada módulo. */
export class LessonsView extends View {
  navKey = 'learn';

  /** @param {object[]} lessons conteúdo de data/lessons.js */
  constructor(lessons) {
    super();
    this.lessons = lessons;
  }

  title() {
    return 'Módulos · EducaTi';
  }

  render() {
    return `
      <section class="container page">
        <div class="page__intro">
          <h1 class="page__title">Aprenda a reduzir a sua pegada</h1>
          <p class="page__lead">Leituras curtas para quem quer entender o clima e mudar a rotina. Cada módulo explica o tema, mostra como melhorar e traz um vídeo curto sobre o assunto.</p>
        </div>
        <div class="lessons-grid">
          ${this.lessons.map((lesson, index) => this.renderCard(lesson, index + 1)).join('')}
        </div>
      </section>`;
  }

  renderCard(lesson, number) {
    return `
      <a class="lesson-card" href="${paths.lesson(number)}" style="--accent:${lesson.color}">
        <div class="lesson-card__stripe"></div>
        <div class="lesson-card__body">
          <span class="eyebrow">Módulo ${number} · leitura de ${escapeHtml(lesson.time)}</span>
          <h2>${escapeHtml(lesson.title)}</h2>
          <p>${escapeHtml(lesson.summary)}</p>
          <span class="lesson-card__cta">Ler o módulo →</span>
        </div>
      </a>`;
  }
}
