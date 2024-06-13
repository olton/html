import Tag from "../core/tag.js";

export class Code extends Tag {
    tag = 'code'
}

export const code = (...args) => new Code(...args)