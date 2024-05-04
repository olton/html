import BaseElement from "./elements/core/base.js"
import Tag from "./elements/core/tag.js"
import TagEmpty from "./elements/core/tag-empty.js"
import {render} from "./render/index.js"
import {router, Router} from "./router/index.js"
import {addStyle, addCssRule, createStyleSheet, createStyleElement} from "./style/index.js"
import {cssLoader, viewLoader, clearViewStorageHolder, jsLoader} from "./loaders/index.js"
import * as Elements from "./elements/index.js"

const __htmlSaver = {}

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

const html = {
    ...Elements,
    extract,
    restore
}

export {
    BaseElement,
    Tag,
    TagEmpty,
    render,
    router,
    Router,
    addStyle, addCssRule, createStyleSheet, createStyleElement,
    cssLoader, viewLoader, clearViewStorageHolder, jsLoader,
    html
}

