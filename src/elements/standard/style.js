import {Tag} from "../core/index.js";

export class Style extends Tag {
    tag = 'style'

    selfAttributes() {
        return ["media", "type", "scoped"]
    }
}

export const style = (...args) => new Style(...args)