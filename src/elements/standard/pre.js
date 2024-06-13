import Tag from "../core/tag.js";

export class Pre extends Tag {
    tag = 'pre'
}

export const pre = (...args) => new Pre(...args)