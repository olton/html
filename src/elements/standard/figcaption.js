import Tag from "../core/tag.js";

export class FigCaption extends Tag {
    tag = 'figcaption'
}

export const figcaption = (...args) => new FigCaption(...args)

