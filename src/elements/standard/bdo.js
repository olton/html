import Tag from "../core/tag.js";

export class Bdo extends Tag {
    tag = 'bdo'
}

export const bdo = (children = '', options = {}) => new Bdo(children, options)