import Tag from "../core/tag.js";

export class Picture extends Tag {
    tag = 'picture'
}

export const picture = (...args) => new Picture(...args)