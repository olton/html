import TagEmpty from "../core/tag-empty.js";

export class Br extends TagEmpty {
    tag = 'br'

    selfAttributes() {
        return ["clear"]
    }
}

export const br = options => new Br(options)