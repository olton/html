import TagEmpty from "../core/tag-empty.js";

export class Wbr extends TagEmpty {
    tag = 'wbr'
}

export const wbr = options => new Wbr(options)