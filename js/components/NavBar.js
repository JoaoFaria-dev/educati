/**
 * Menu do cabeçalho (Início, Calculadora, Aprender).
 * O HTML do menu fica no index.html; esta classe só destaca o link ativo.
 */
export class NavBar {
  constructor(root = document) {
    this.links = Array.from(root.querySelectorAll('[data-nav]'));
  }

  /** @param {string} name valor do atributo data-nav do link a destacar */
  setActive(name) {
    this.links.forEach(link => {
      const isActive = link.dataset.nav === name;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
}
