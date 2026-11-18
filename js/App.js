/**
 * Junta as peças: ouve o Router e, a cada mudança de endereço,
 * desenha a tela certa dentro do <main>, atualiza o menu e o título da aba.
 */
export class App {
  /**
   * @param {object} options
   * @param {HTMLElement} options.root  elemento onde as telas são desenhadas (<main id="app">)
   * @param {import('./router/Router.js').Router} options.router
   * @param {import('./components/NavBar.js').NavBar} options.navBar
   * @param {Record<string, import('./views/View.js').View>} options.views  uma tela para cada `page` da rota
   */
  constructor({ root, router, navBar, views }) {
    this.root = root;
    this.router = router;
    this.navBar = navBar;
    this.views = views;
    this.isFirstScreen = true;
  }

  start() {
    this.router.start(route => this.show(route));
  }

  show(route) {
    const view = this.views[route.page];

    // Cada tela ganha um elemento novo. Assim os eventos ligados
    // na tela anterior somem junto com ela e não se acumulam.
    const screen = document.createElement('div');
    screen.innerHTML = view.render(route);
    this.root.replaceChildren(screen);
    view.mount(screen, route);

    this.navBar.setActive(view.navKey);
    document.title = view.title(route);
    window.scrollTo(0, 0);
    this.focusHeading(screen);
  }

  /**
   * Ao trocar de tela, leva o foco para o título principal.
   * Assim quem usa leitor de tela ouve a página nova, e quem usa teclado
   * continua a partir do começo dela. Na primeira tela o foco fica no lugar.
   */
  focusHeading(screen) {
    if (this.isFirstScreen) {
      this.isFirstScreen = false;
      return;
    }
    const heading = screen.querySelector('h1');
    if (!heading) return;
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}
