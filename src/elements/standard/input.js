import SingleTag from "../core/single-tag.js";

export class Input extends SingleTag {
    tag = "input"

    selfAttributes() {
        return [
            "accept", "align", "alt", "autocomplete", "autofocus", "border", "checked", "disabled", "form", "formaction",
            "formenctype", "formmethod", "formnovalidate", "formtarget", "list", "max", "maxlength", "min", "multiple",
            "name", "pattern", "placeholder", "size", "src", "step", "type", "value"
        ]
    }
}

export const input = (options = {}) => new Input(options)