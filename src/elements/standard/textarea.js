import Tag from "../core/tag.js";

export class Textarea extends Tag {
    tag = 'textarea'

    selfAttributes() {
        return ["autofocus", "cols", "form", "maxlength", "name", "placeholder", "rows", "wrap"]
    }
}

export const textarea = (...args) => new Textarea(...args)