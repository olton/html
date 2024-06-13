import Tag from "../core/tag.js";

export class Small extends Tag {
    tag = 'small'
}

export const small = (...args) => new Small(...args)