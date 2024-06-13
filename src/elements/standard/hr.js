import SingleTag from "../core/single-tag.js";

export class Hr extends SingleTag {
    tag = 'hr'
}

export const hr = options => new Hr(options)