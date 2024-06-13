import Tag from "../core/tag.js";

export class Var extends Tag {
    tag = 'var'
}

export const variable = (...args) => new Var(...args)