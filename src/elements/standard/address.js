import Tag from "../core/tag.js";

export class Address extends Tag {
    tag = 'address'
}

export const address = (...args) => new Address(...args)