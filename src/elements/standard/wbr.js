import SingleTag from "../core/single-tag.js";

export class Wbr extends SingleTag {
    tag = 'wbr'
}

export const wbr = options => new Wbr(options)