import Tag from "../core/tag.js";

export class Paragraph extends Tag {
    tag = 'p'

    selfAttributes() {
        return ["align"]
    }
}

export const paragraph = (...args) => new Paragraph(...args)
export const p = (...args) => new Paragraph(...args)