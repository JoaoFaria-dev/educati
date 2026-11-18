/**
 * Endereços das telas. As telas usam estes caminhos nos links,
 * assim, se um endereço mudar, só é preciso mudar aqui.
 */
export const paths = {
  home: '#/',
  calculator: '#/calculadora',
  lessons: '#/aprender',
  lesson: number => `#/aprender/${number}` // number começa em 1
};

/**
 * Lê o endereço depois do "#" e diz qual tela deve aparecer.
 *
 *   #/              → { page: 'home' }
 *   #/calculadora   → { page: 'calc' }
 *   #/aprender      → { page: 'learn' }
 *   #/aprender/2    → { page: 'lesson', lessonIndex: 1 }
 *
 * Links antigos com #/aulas continuam funcionando.
 *
 * Usar o "#" permite que o botão Voltar do navegador funcione
 * sem precisar de servidor configurado.
 */
export class Router {
  /** @param {number} lessonCount quantidade de módulos, para validar #/aprender/N */
  constructor(lessonCount) {
    this.lessonCount = lessonCount;
  }

  /** Chama `onChange(rota)` agora e toda vez que o endereço mudar. */
  start(onChange) {
    window.addEventListener('hashchange', () => onChange(this.currentRoute()));
    onChange(this.currentRoute());
  }

  currentRoute() {
    const [page, id] = window.location.hash.replace(/^#\/?/, '').split('/');

    if (page === 'calculadora') return { page: 'calc' };

    if (page === 'aprender' || page === 'aulas') {
      const index = Number(id) - 1;
      const isValidLesson = Boolean(id) && Number.isInteger(index) && index >= 0 && index < this.lessonCount;
      return isValidLesson ? { page: 'lesson', lessonIndex: index } : { page: 'learn' };
    }

    return { page: 'home' };
  }
}
