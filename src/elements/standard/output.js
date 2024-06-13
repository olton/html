import Tag from "../core/tag.js";

export class Output extends Tag {
    tag = 'output'

    selfAttributes() {
        return ["for", "form", "name"]
    }
}

export const output = (...args) => new Output(...args)