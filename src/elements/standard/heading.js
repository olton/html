import Tag from "../core/tag.js";

export class Heading extends Tag {
    constructor(tag = 'h1', ...args) {
        super(...args);
        this.tag = tag
    }
}

export const heading = (tag = 'h1', ...args) => new Heading(tag, ...args)
