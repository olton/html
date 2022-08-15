import Tag from "../core/tag.js";

export class Small extends Tag {
    tag = 'small'
}

export const small = (children = '', options = {}) => new Small(children, options)