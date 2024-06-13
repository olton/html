import Tag from "../core/tag.js";

export class Del extends Tag {
    tag = 'del'

    selfAttributes() {
        return ["cite", "datetime"]
    }
}

export const del = (...args) => new Del(...args)