import Tag from "../core/tag.js";

export class Dialog extends Tag {
    tag = 'dialog'

    selfAttributes() {
        return ["open"]
    }
}

export const dialog = (...args) => new Dialog(...args)