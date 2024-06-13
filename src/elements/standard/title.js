import Tag from "../core/tag.js"
import {render} from "../../render/index.js";

export class Title extends Tag {
    tag = 'title'
}

export const title = text => new Title(text)
