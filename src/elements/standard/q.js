import Tag from "../core/tag.js";

export class Quoted extends Tag {
    tag = 'q'

    selfAttributes() {
        return ["cite"]
    }
}

export const q = (...args) => new Quoted(...args)
export const quoted = (...args) => new Quoted(...args)