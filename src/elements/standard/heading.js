import Tag from "../core/tag.js";

export class Heading extends Tag {
    constructor(tag = 'h1', ...args) {
        super(...args);
        this.tag = tag
    }
}

export const heading = (tag = 'h1', ...args) => new Heading(tag, ...args)
export const h1 = (...args) => heading('h1', ...args)
export const h2 = (...args) => heading('h2', ...args)
export const h3 = (...args) => heading('h3', ...args)
export const h4 = (...args) => heading('h4', ...args)
export const h5 = (...args) => heading('h5', ...args)
export const h6 = (...args) => heading('h6', ...args)
