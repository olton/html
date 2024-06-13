import Tag from "../core/tag.js";

export class Ital extends Tag {
    tag = 'i'
}

export const ital = (...args) => new Ital(...args)
export const i = (...args) => new Ital(...args)