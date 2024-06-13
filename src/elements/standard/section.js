import Tag from "../core/tag.js";

export class Section extends Tag {
    tag = 'section'
}

export const section = (...args) => new Section(...args)