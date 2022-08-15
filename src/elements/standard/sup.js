import Tag from "../core/tag.js";

export class Sup extends Tag {
    tag = 'sup'
}

export const sup = (children = '', options = {}) => new Sup(children, options)