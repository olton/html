import Tag from "../core/tag.js";

export class Sub extends Tag {
    tag = 'sub'
}

export const sub = (children = '', options = {}) => new Sub(children, options)