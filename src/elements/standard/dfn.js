import Tag from "../core/tag.js";

export class Dfn extends Tag {
    tag = 'dfn'
}

export const dfn = (...args) => new Dfn(...args)