import Tag from "../core/tag.js";

export class Kbd extends Tag {
    tag = 'kbd'
}

export const kbd = (children = '', options = {}) => new Kbd(children, options)