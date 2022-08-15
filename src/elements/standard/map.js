import Tag from "../core/tag.js";
import TagEmpty from "../core/tag-empty.js";

export class Map extends Tag {
    tag = 'map'

    selfAttributes() {
        return ["name"]
    }
}

export const map = (children = '', options = {}) => new Map(children, options)

export class Area extends TagEmpty {
    tag = 'area'

    selfAttributes() {
        return ["alt", "coords", "hreflang", "nohref", "shape", "target", "type", "href"]
    }
}

export const area = (options = {}) => new Area(options)
export const area2 = (href = '#', options = {}) => area({...options, href})