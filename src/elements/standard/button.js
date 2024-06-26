import Tag from "../core/tag.js";

export class Button extends Tag {
    tag = 'button'

    selfAttributes() {
        return ["autofocus", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"]
    }
}

export const button = (...args) => new Button(...args)