import {SingleTag} from "../core";

export class Base extends SingleTag {
    tag = 'base'

    selfAttributes() {
        return ["href", "target"]
    }
}

export const base = (options) => new Base(options)