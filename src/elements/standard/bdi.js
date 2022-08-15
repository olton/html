import Tag from "../core/tag.js";

export class Bdi extends Tag {
    tag = 'bdi'
}

export const bdi = (children = '', options = {}) => new Bdi(children, options)