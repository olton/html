import Tag from "../core/tag.js";

export class Anchor extends Tag {
    tag = 'a'

    selfAttributes() {
        return ["coords", "download", "hreflang", "name", "rel", "rev", "shape", "target", "type", "href"]
    }
}

export const anchor = (...args) => new Anchor(...args)
export const a = (...args) => new Anchor(...args)
