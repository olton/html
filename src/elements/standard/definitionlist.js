import Tag from "../core/tag.js";

export class Dl extends Tag {
    tag = 'dl'
}

export class Dt extends Tag {
    tag = 'dt'
}

export class Dd extends Tag {
    tag = 'dd'
}

export const dl = (...args) => new Dl(...args)
export const dt = (...args) => new Dt(...args)
export const dd = (...args) => new Dd(...args)