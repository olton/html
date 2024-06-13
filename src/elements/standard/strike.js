import Tag from "../core/tag.js";

export class Strike extends Tag {
    tag = 'strike'
}

export const strike = (...args) => new Strike(...args)
export const s = (...args) => new Strike(...args)