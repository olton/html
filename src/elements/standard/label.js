import Tag from "../core/tag.js";

export class Label extends Tag {
    tag = 'label'

    selfAttributes() {
        return ["for"]
    }
}

export const label = (...args) => new Label(...args)