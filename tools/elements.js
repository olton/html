const htmlElements = [
    // Основна структура документа
    'html', 'head', 'body', 'title',

    // Метадані
    'base', 'link', 'meta', 'style',

    // Скриптові елементи
    'script', 'noscript',

    // Секційні елементи
    'header', 'footer', 'main', 'section', 'article', 'aside', 'nav', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address',

    // Групування контенту
    'div', 'p', 'hr', 'pre', 'blockquote', 'ol', 'ul', 'li', 'dl', 'dt', 'dd', 'figure', 'figcaption',

    // Текстові елементи
    'a', 'em', 'strong', 'small', 'cite', 'q', 'dfn', 'abbr', 'data', 'time', 'code', 'var', 'samp',
    'kbd', 'sub', 'sup', 'i', 'b', 'u', 'mark', 'ruby', 'rt', 'rp', 'bdi', 'bdo', 'span', 'br', 'wbr',

    // Редагування
    'ins', 'del',

    // Вбудований контент
    'img', 'iframe', 'embed', 'object', 'param', 'video', 'audio', 'source', 'track', 'map', 'area',
    'math', 'svg', 'picture', 'source',

    // Таблиці
    'table', 'caption', 'colgroup', 'col', 'tbody', 'thead', 'tfoot', 'tr', 'td', 'th',

    // Форми
    'form', 'label', 'input', 'button', 'select', 'datalist', 'optgroup', 'option',
    'textarea', 'output', 'progress', 'meter', 'fieldset', 'legend',

    // Інтерактивні елементи
    'details', 'summary', 'dialog', 'menu',

    // Canvas для графіки
    'canvas',

    // Спеціалізовані елементи
    'template', 'slot', 'portal'
];

export default htmlElements;