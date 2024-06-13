import Tag from "../core/tag.js";

export class Figure extends Tag {
    tag = 'figure'
}

export const figure = (...args) => new Figure(...args)

export class FigCaption extends Tag {
    tag = 'figcaption'
}

export const figcaption = (...args) => new FigCaption(...args)

