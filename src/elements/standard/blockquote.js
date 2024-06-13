import Tag from "../core/tag.js";

export class Blockquote extends Tag {
    tag = 'blockquote'

    selfAttributes() {
        return ["cite"];
    }
}

export const blockquote = (...args) => new Blockquote(...args)