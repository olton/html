import Tag from "../core/tag.js";

export class Bold extends Tag {
    tag = 'b'
}

export const bold = (...args) => new Bold(...args)
export const b = (...args) => new Bold(...args)