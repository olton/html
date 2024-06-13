import SingleTag from "../core/single-tag.js"

export class Meta extends SingleTag {
    tag = 'meta'

    selfAttributes() {
        return ["content", "name", "http-equiv", "charset"]
    }
}

export const meta = options => new Meta(options)
