import Tag from "../core/tag.js";

export class Bdo extends Tag {
    tag = 'bdo'
}

export const bdo = (...args) => new Bdo(...args)