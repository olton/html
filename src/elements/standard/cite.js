import Tag from "../core/tag.js";

export class Cite extends Tag {
    tag = 'cite'
}

export const cite = (children = '', options = {}) => new Cite(children, options)