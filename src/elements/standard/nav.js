import Tag from "../core/tag.js";

export class Nav extends Tag {
    tag = 'nav'
}

export const nav = (...args) => new Nav(...args)