import Tag from "../core/tag.js";

export class Footer extends Tag {
    tag = 'footer'
}

export const footer = (...args) => new Footer(...args)