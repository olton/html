import BaseElement from "./elements/core/base.js"
import Tag from "./elements/core/tag.js"
import TagEmpty from "./elements/core/tag-empty.js"
import {render} from "./render/index.js"
import {router, Router} from "./router/index.js"

export {
    BaseElement,
    Tag,
    TagEmpty,
    render,
    router, Router
}

export * from "./style"
export * from "./loaders"
export * from "./elements"
