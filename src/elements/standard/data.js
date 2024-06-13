import Tag from "../core/tag.js";

export class Data extends Tag {
    tag = 'data'
}

export const data = (...args) => new Data(...args)