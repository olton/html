import Tag from "../core/tag.js";

export class Span extends Tag {
    tag = 'span'
}

export const span = (...args) => new Span(...args)