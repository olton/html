import Tag from "../core/tag.js";

export class Fieldset extends Tag {
    tag = 'fieldset'

    selfAttributes() {
        return ["form", "title"]
    }
}

export const fieldset = (...args) => new Fieldset(...args)

export class Legend extends Tag {
    tag = 'legend'

    selfAttributes() {
        return ["align", "title"]
    }
}

export const legend = (...args) => new Legend(...args)
