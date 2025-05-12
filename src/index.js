import {BaseElement, Tag, SingleTag} from "./elements/core/index.js"
import {render} from "./render/index.js"
import {addStyle, addCssRule, createStyleSheet, createStyleElement} from "./style/index.js"
import {cssLoader, jsLoader} from "./loaders/index.js"
import * as Elements from "./elements/index.js"

const __htmlSaver = {}

const version = "__VERSION__"
const build_time = "__BUILD_TIME__"

const info = () => {
    console.info(`%c Html.js %c v${version} %c ${build_time} `, "color: #ffffff; font-weight: bold; background: #708238", "color: white; background: darkgreen", "color: white; background: #0080fe;")
}

const extract = (ctx = globalThis) => {
    for (let key in Elements) {
        if (globalThis[key]) __htmlSaver[key] = globalThis[key]
        ctx[key] = Elements[key]
    }
}

const restore = (ctx = globalThis) => {
    for (let key in __htmlSaver) {
        ctx[key] = __htmlSaver[key]
    }
}

const HTML = {
    BaseElement,
    Tag,
    SingleTag,
    ...Elements,
    extract,
    restore,
}

const CSS = {
    addStyle, 
    addCssRule, 
    createStyleSheet, 
    createStyleElement,
}

export {
    render,
    cssLoader, jsLoader,
    info,
    CSS,
    HTML,
}

