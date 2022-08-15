import Tag from "../core/tag.js";

export class Address extends Tag {
    tag = 'address'
}

export const address = (children = '', options = {}) => new Address(children, options)