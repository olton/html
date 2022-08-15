import Tag from "../core/tag.js";

export class Span extends Tag {
    tag = 'span'
}

export const span = (children = '', options = {}) => new Span(children, options)