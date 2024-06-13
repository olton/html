import Tag from "../core/tag.js";
import SingleTag from "../core/single-tag.js";

export class Map extends Tag {
    tag = 'map'

    selfAttributes() {
        return ["name"]
    }
}

export const map = (...args) => new Map(...args)

export class Area extends SingleTag {
    tag = 'area'

    selfAttributes() {
        return ["alt", "coords", "hreflang", "nohref", "shape", "target", "type", "href"]
    }
}

export const area = (options = {}) => new Area(options)