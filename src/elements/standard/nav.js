import Tag from "../core/tag.js";

export class Nav extends Tag {
    tag = 'nav'
}

export const nav = (children = '', options = {}) => new Nav(children, options)