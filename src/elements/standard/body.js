import Tag from "../core/tag.js";

export class Body extends Tag {
    tag = 'body'
}

export const body = (...args) => new Body(...args)