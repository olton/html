import {Tag} from "../core/index.js";

export class Html extends Tag {
    tag = 'html'

    selfAttributes() {
        return ["lang"]
    }
}

export const html = (...args) => new Html(...args)