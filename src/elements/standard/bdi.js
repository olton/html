import Tag from "../core/tag.js";

export class Bdi extends Tag {
    tag = 'bdi'
}

export const bdi = (...args) => new Bdi(...args)