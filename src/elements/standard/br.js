import SingleTag from "../core/single-tag.js";

export class Br extends SingleTag {
    tag = 'br'

    selfAttributes() {
        return ["clear"]
    }
}

export const br = options => new Br(options)