import Tag from "../core/tag.js";

export class Article extends Tag {
    tag = 'article'
}

export const article = (...args) => new Article(...args)