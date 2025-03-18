import {SingleTag} from "../core/index.js";

export class Base extends SingleTag {
    tag = 'base'

    selfAttributes() {
        return ["href", "target"]
    }
}

export const base = (options) => new Base(options)