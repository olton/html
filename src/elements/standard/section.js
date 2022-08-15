import Tag from "../core/tag.js";

export class Section extends Tag {
    tag = 'section'
}

export const section = (children = '', options = {}) => new Section(children, options)