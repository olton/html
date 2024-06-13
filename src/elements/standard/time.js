import Tag from "../core/tag.js";

export class Time extends Tag {
    tag = 'time'

    selfAttributes() {
        return ["datetime", "pubdate"]
    }
}

export const time = (...args) => new Time(...args)