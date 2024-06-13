import Tag from "../core/tag.js";

export class Script extends Tag {
    tag = 'script'

    selfAttributes() {
        return ["async", "defer", "language", "src", "type"]
    }
}

export const script = (...args) => new Script(...args)