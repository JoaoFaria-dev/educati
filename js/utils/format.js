// Funções pequenas usadas por várias telas.

/** Formata um número com 1 casa decimal no padrão brasileiro (ex.: 2,7). */
export function formatNumber(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/**
 * Troca caracteres especiais por entidades HTML.
 * Use sempre que colocar um texto dentro de uma string de HTML,
 * para que ele apareça como texto e nunca vire uma tag.
 */
export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => HTML_ESCAPES[char]);
}
