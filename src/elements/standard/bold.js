import Tag from "../core/tag.js";

export class Bold extends Tag {
    tag = 'b'
}

export const bold = (children = '', options = {}) => new Bold(children, options)
export const b = (children = '', options = {}) => new Bold(children, options)