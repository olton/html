import {Tag} from "../core/index.js";

export class Head extends Tag {
    tag = 'head'
}

export const head = (...args) => new Head(...args)