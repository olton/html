import Tag from "../core/tag.js";

export class Header extends Tag {
    tag = 'header'
}

export const header = (...args) => new Header(...args)