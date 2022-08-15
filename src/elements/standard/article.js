import Tag from "../core/tag.js";

export class Article extends Tag {
    tag = 'article'
}

export const article = (children = '', options = {}) => new Article(children, options)