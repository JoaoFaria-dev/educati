/**
 * Classe base de todas as telas.
 *
 * Cada tela (HomeView, CalculatorView...) herda desta classe e implementa:
 *   - render(route): devolve o HTML da tela, como texto.
 *   - title(route):  título da aba do navegador (opcional).
 *   - mount(element, route): liga os eventos depois que o HTML
 *     já está na página (opcional; usado pela calculadora e pelos módulos).
 *   - navKey: qual link do menu fica destacado.
 */
export class View {
  navKey = 'home';

  title() {
    return 'EducaTi';
  }

  render() {
    throw new Error(`${this.constructor.name} precisa implementar render()`);
  }

  mount() {
    // Por padrão a tela não tem eventos.
  }
}
