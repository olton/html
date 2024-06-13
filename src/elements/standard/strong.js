import Tag from "../core/tag.js";

export class Strong extends Tag {
    tag = 'strong'
}

export const strong = (...args) => new Strong(...args)