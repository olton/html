import Tag from "../core/tag.js";

export class NoScript extends Tag {
    tag = 'noscript'
}

export const noscript = (children = '', options = {}) => new NoScript(children, options)