import Tag from "../core/tag.js";

export class Main extends Tag {
    tag = 'main'
}

export const main = (...args) => new Main(...args)