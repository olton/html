import Tag from "../core/tag.js";

export class Form extends Tag {
    tag = 'form'

    selfAttributes() {
        return ["accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"]
    }
}

export const form = (...args) => new Form(...args)