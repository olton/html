import Tag from "../core/tag.js";

export class Select extends Tag {
    tag = 'select'

    selfAttributes() {
        return ["autofocus", "form", "name", "size"]
    }
}

export const select = (...args) => new Select(...args)

export class OptionGroup extends Tag {
    tag = 'optgroup'

    selfAttributes() {
        return ["label"]
    }
}

export const optgroup = (...args) => new OptionGroup(...args)

export class Option extends Tag {
    tag = 'option'

    selfAttributes() {
        return ["label", "value"]
    }
}

export const option = (...args) => new Option(...args)

