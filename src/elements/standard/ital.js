import Tag from "../core/tag.js";

export class Ital extends Tag {
    tag = 'i'
}

export const ital = (children = '', options = {}) => new Ital(children, options)
export const i = (children = '', options = {}) => new Ital(children, options)