import TagEmpty from "../core/tag-empty.js";

export class Hr extends TagEmpty {
    tag = 'hr'
}

export const hr = options => new Hr(options)