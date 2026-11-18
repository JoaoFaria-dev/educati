const STORAGE_KEY = 'educati_theme';

/** Cor da barra do navegador no celular, para cada tema (igual ao --bg do CSS). */
const THEME_COLORS = { light: '#fbf7ee', dark: '#0f1712' };

/**
 * Botão de modo noturno no cabeçalho.
 * O tema inicial já foi escolhido por um script no <head> do index.html;
 * esta classe só troca o tema no clique e lembra a escolha.
 */
export class ThemeToggle {
  /**
   * @param {HTMLButtonElement} button botão com [data-theme-toggle]
   * @param {HTMLElement} root elemento que recebe data-theme (o <html>)
   */
  constructor(button, root = document.documentElement) {
    this.button = button;
    this.root = root;
  }

  start() {
    this.apply(this.current());
    this.button.addEventListener('click', () => {
      const next = this.current() === 'dark' ? 'light' : 'dark';
      this.apply(next);
      this.save(next);
    });

    // Enquanto a pessoa não escolher um tema, acompanha o tema do sistema.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (!this.hasSavedChoice()) this.apply(event.matches ? 'dark' : 'light');
    });
  }

  current() {
    return this.root.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  apply(theme) {
    this.root.dataset.theme = theme;
    this.button.setAttribute('aria-pressed', String(theme === 'dark'));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  }

  save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Sem localStorage o tema funciona, só não é lembrado.
    }
  }

  hasSavedChoice() {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return false;
    }
  }
}
