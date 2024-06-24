import {BaseElement, Tag, SingleTag} from "./elements/core"
import {render} from "./render"
import {router, Router} from "./router"
import {addStyle, addCssRule, createStyleSheet, createStyleElement} from "./style"
import {cssLoader, viewLoader, clearViewStorageHolder, jsLoader} from "./loaders"
import * as Elements from "./elements"

const __htmlSaver = {}

const version = "0.11.0"
const build_time = "24.06.2024, 17:03:41"

const info = () => {
    console.info(`%c HtmlJS %c v${version} %c ${build_time} `, "color: #ffffff; font-weight: bold; background: #708238", "color: white; background: darkgreen", "color: white; background: #0080fe;")
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

const htmljs = {
    ...Elements,
    extract,
    restore,
    info
}

export {
    BaseElement,
    Tag,
    SingleTag,
    render,
    router,
    Router,
    addStyle, addCssRule, createStyleSheet, createStyleElement,
    cssLoader, viewLoader, clearViewStorageHolder, jsLoader,
    htmljs,
}

