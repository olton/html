import Tag from "../core/tag.js";

export class Ins extends Tag {
    tag = 'ins'

    selfAttributes() {
        return ["cite", "datetime"]
    }
}

export const ins = (children = '', options = {}) => new Ins(children, options)