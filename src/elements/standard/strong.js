import Tag from "../core/tag.js";

export class Strong extends Tag {
    tag = 'strong'
}

export const strong = (children = '', options = {}) => new Strong(children, options)