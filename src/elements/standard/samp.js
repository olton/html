import Tag from "../core/tag.js";

export class Samp extends Tag {
    tag = 'samp'
}

export const samp = (...args) => new Samp(...args)