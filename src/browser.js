import BaseElement from "./elements/core/base.js"
import Tag from "./elements/core/tag.js"
import TagEmpty from "./elements/core/tag-empty.js"
import * as renders from "./render/index.js"
import * as styleRoutines from "./style/index.js"
import * as html_elements from "./elements/index.js"
import * as loaders from "./loaders/index.js"
import * as router from "./router/index.js"

globalThis.html = {
    BaseElement,
    Tag,
    TagEmpty,
    ...html_elements,
    ...renders,
    ...loaders,
    ...styleRoutines,
    ...router
}

globalThis.__htmlSaver = {}

globalThis.html.extract = (ctx = globalThis) => {
    for (let key in globalThis.html) {
        if (globalThis[key]) globalThis.__htmlSaver[key] = globalThis[key]
        ctx[key] = globalThis.html[key]
    }
}

globalThis.html.restore = (ctx = globalThis) => {
    for (let key in globalThis.__htmlSaver) {
        ctx[key] = globalThis.__htmlSaver[key]
    }
}


