import Tag from "../core/tag.js";

export class Canvas extends Tag {
    tag = 'canvas'

    selfAttributes() {
        return ["width", "height"]
    }
}

export const canvas = (...args) => new Canvas(...args)