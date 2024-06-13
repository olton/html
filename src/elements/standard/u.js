import Tag from "../core/tag.js";

export class U extends Tag {
    tag = 'u'
}

export const u = (...args) => new U(...args)