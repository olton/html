import Tag from "../core/tag.js";

export class Main extends Tag {
    tag = 'main'
}

export const main = (children = '', options = {}) => new Main(children, options)