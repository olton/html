import Tag from "../core/tag.js";

export class Template extends Tag {
    tag = 'template'

    selfAttributes() {
        return ["shadowrootmode", "shadowrootdelegatesfocus", "shadowrootclonable", "shadowrootserializable"]
    }
}

export const template = (...args) => new Template(...args)