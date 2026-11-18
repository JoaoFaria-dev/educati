import { View } from './View.js';
import { paths } from '../router/Router.js';
import { escapeHtml } from '../utils/format.js';

/** Um módulo aberto: texto, "Como melhorar", vídeo, referências e navegação entre módulos. */
export class LessonView extends View {
  navKey = 'learn';

  /** @param {object[]} lessons conteúdo de data/lessons.js */
  constructor(lessons) {
    super();
    this.lessons = lessons;
  }

  title({ lessonIndex }) {
    return `${this.lessons[lessonIndex].title} · EducaTi`;
  }

  render({ lessonIndex }) {
    const lesson = this.lessons[lessonIndex];
    const number = lessonIndex + 1;
    return `
      <article class="container lesson" style="--accent:${lesson.color};--tint:${lesson.tint}">
        <header class="lesson__header">
          <a class="back-link" href="${paths.lessons}">← Todos os módulos</a>
          <span class="badge badge--tint">Módulo ${number} · leitura de ${escapeHtml(lesson.time)}</span>
          <h1 class="lesson__title">${escapeHtml(lesson.title)}</h1>
          <p class="lesson__lead">${escapeHtml(lesson.lead)}</p>
        </header>

        <div class="lesson__rule" aria-hidden="true"></div>

        ${this.renderToc(lesson)}
        ${lesson.sections.map((section, index) => this.renderSection(section, index)).join('')}
        ${this.renderTips(lesson.tips)}
        ${this.renderVideo(lesson.video)}
        ${this.renderRefs(lesson.refs)}
        ${this.renderNavigation(lessonIndex)}
      </article>`;
  }

  /**
   * Índice "Neste módulo": um atalho para cada parte da página.
   * São botões (e não links com "#") porque o "#" do endereço é usado pelas rotas.
   */
  renderToc(lesson) {
    const items = [
      ...lesson.sections.map((section, index) => ({ target: `sec-${index}`, label: section.h })),
      { target: 'sec-tips', label: 'Como melhorar' },
      { target: 'sec-video', label: 'Vídeo' },
      { target: 'sec-refs', label: 'Referências' }
    ];
    const buttons = items.map(item => `
      <li><button type="button" class="toc__item" data-jump="${item.target}" title="${escapeHtml(item.label)}">${escapeHtml(item.label)}</button></li>`).join('');

    return `
      <nav class="toc" aria-label="Neste módulo">
        <span class="eyebrow">Neste módulo</span>
        <ul class="toc__list">${buttons}</ul>
      </nav>`;
  }

  renderSection(section, index) {
    return `
      <section class="lesson__section" id="sec-${index}" tabindex="-1">
        <h2>${escapeHtml(section.h)}</h2>
        ${section.ps.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </section>`;
  }

  renderTips(tips) {
    const items = tips.map((tip, index) => `
      <li>
        <span class="tips__n" aria-hidden="true">${index + 1}</span>
        <span class="tips__text">${escapeHtml(tip)}</span>
      </li>`).join('');

    return `
      <section class="tips" id="sec-tips" tabindex="-1">
        <h2>Como melhorar</h2>
        <ol class="tips__list">${items}</ol>
      </section>`;
  }

  /** Vídeo do YouTube (versão sem cookies), carregado só quando a pessoa chega nele. */
  renderVideo(video) {
    const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?rel=0`;
    return `
      <section class="video" id="sec-video" tabindex="-1">
        <span class="eyebrow">Assista</span>
        <div class="video__frame">
          <iframe src="${src}" title="${escapeHtml(video.title)}" loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p class="video__caption">${escapeHtml(video.title)}</p>
      </section>`;
  }

  /** Liga os atalhos do índice: rola até a parte escolhida e leva o foco para ela. */
  mount(element) {
    element.addEventListener('click', event => {
      const button = event.target.closest('[data-jump]');
      if (!button) return;
      const target = element.querySelector(`#${button.dataset.jump}`);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      target.focus({ preventScroll: true });
    });
  }

  /** Fontes usadas no texto do módulo. Os links abrem em outra aba. */
  renderRefs(refs) {
    const items = refs.map(ref => `
      <li>
        <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ref.label)}<span class="sr-only"> (abre em nova aba)</span></a>
      </li>`).join('');

    return `
      <section class="refs" id="sec-refs" tabindex="-1" aria-labelledby="refs-title">
        <h2 id="refs-title">Referências</h2>
        <ol class="refs__list">${items}</ol>
      </section>`;
  }

  /** Botões "Módulo anterior" e "Próximo módulo" (ou "Refazer a calculadora" no último). */
  renderNavigation(lessonIndex) {
    const previous = this.lessons[lessonIndex - 1];
    const next = this.lessons[lessonIndex + 1];
    const number = lessonIndex + 1;

    const previousLink = previous ? `
      <a class="lesson-nav__link lesson-nav__link--prev" href="${paths.lesson(number - 1)}">
        <small>← Módulo anterior</small>
        <strong>${escapeHtml(previous.title)}</strong>
      </a>` : '';

    const nextLink = next ? `
      <a class="lesson-nav__link lesson-nav__link--next" href="${paths.lesson(number + 1)}">
        <small>Próximo módulo →</small>
        <strong>${escapeHtml(next.title)}</strong>
      </a>` : `
      <a class="lesson-nav__link lesson-nav__link--finish" href="${paths.calculator}">
        <small>Terminou os módulos</small>
        <strong>Refazer a calculadora →</strong>
      </a>`;

    return `
      <nav class="lesson-nav" aria-label="Navegação entre módulos">
        ${previousLink}
        ${nextLink}
      </nav>`;
  }
}
