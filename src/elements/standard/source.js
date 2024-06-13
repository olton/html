import SingleTag from "../core/single-tag.js";

export class Source extends SingleTag {
    tag = 'source'

    selfAttributes() {
        return ["media", "src", "type"]
    }
}

export const source = (options = {}) => new Source(options)