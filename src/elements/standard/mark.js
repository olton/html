import Tag from "../core/tag.js";

export class Mark extends Tag {
    tag = 'mark'
}

export const mark = (children = '', options = {}) => new Mark(children, options)