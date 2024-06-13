import Tag from "../core/tag.js";
import {SingleTag} from "../core/index.js";

export class Ruby extends Tag {
    tag = 'ruby'
}

export class Rt extends SingleTag {
    tag = 'rt'
}

export class Rp extends SingleTag {
    tag = 'rp'
}

export const ruby = (...args) => new Ruby(...args)
export const rt = options => new Rt(options)
export const rp = options => new Rp(options)
