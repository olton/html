import Tag from "../core/tag.js";

export class List extends Tag {
    constructor(tag = 'ul', ...args) {
        super(...args);
        this.tag = tag
    }

    selfAttributes() {
        return this.tag === 'ul'
            ? ["type"]
            : ["type", "reserved", "start"]
    }
}

export class ListItem extends Tag {
    tag = "li"

    selfAttributes() {
        return ["type", "value"]
    }
}
