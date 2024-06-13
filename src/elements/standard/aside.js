import Tag from "../core/tag.js"

export class Aside extends Tag {
    tag = 'aside'
}

export const aside = (...args) => new Aside(...args)