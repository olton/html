import {BaseElement, Tag, SingleTag} from "./elements/core"
import * as renders from "./render"
import * as styleRoutines from "./style"
import * as elements from "./elements"
import * as loaders from "./loaders"
import * as router from "./router"

const version = "0.10.0"
const build_time = "13.06.2024, 16:25:30"

const info = () => {
    console.info(`%c HtmlJS %c v${version} %c ${build_time} `, "color: #ffffff; font-weight: bold; background: #708238", "color: white; background: darkgreen", "color: white; background: #0080fe;")
}

globalThis.htmljs = {
    BaseElement,
    Tag,
    SingleTag,
    ...elements,
    ...renders,
    ...loaders,
    ...styleRoutines,
    ...router
}

globalThis.__htmlSaver = {}

globalThis.htmljs.extract = (ctx = globalThis) => {
    for (let key in globalThis.htmljs) {
        if (globalThis[key]) globalThis.__htmlSaver[key] = globalThis[key]
        ctx[key] = globalThis.htmljs[key]
    }
}

globalThis.htmljs.restore = (ctx = globalThis) => {
    for (let key in globalThis.__htmlSaver) {
        ctx[key] = globalThis.__htmlSaver[key]
    }
}

info()