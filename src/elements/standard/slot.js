import Tag from "../core/tag.js";

export class Slot extends Tag {
    tag = 'slot'

    selfAttributes() {
        return ["name"]
    }
}

export const slot = (...args) => new Slot(...args)