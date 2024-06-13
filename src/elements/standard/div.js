import Tag from "../core/tag.js";

export class Div extends Tag {
    tag = 'div'

    selfAttributes() {
        return ["align", "title"]
    }
}

export const div = (...args) => new Div(...args)