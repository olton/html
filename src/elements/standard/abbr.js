import Tag from "../core/tag.js";

export class Abbr extends Tag {
    tag = "abbr"
}

export const abbr = (...args) => new Abbr(...args)