import Tag from "../core/tag.js";

export class Details extends Tag {
    tag = 'details'
}

export const details = (...args) => new Details(...args)

export class Summary extends Tag {
    tag = 'summary'
}

export const summary = (...args) => new Summary(...args)

