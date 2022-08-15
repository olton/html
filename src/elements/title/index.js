import Tag from "../core/tag.js"
import {render} from "../../render/index.js";

export class Title extends Tag {
    tag = 'title'
}

export const title = text => new Title(text)

export const addTitle = text => {
    let t = document.head.querySelector("title")

    if (t) {
        t.remove()
    }

    render(title(text), document.head, {clear: false})
}