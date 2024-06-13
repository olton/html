import Tag from "../core/tag.js";

export class IFrame extends Tag {
    tag = 'iframe'

    selfAttributes() {
        return ["align", "allowtransparency", "frameborder", "height", "hspace", "marginheight", "marginwidth", "name", "sandbox", "scrolling", "seamless", "src", "srcdoc", "vspace", "width"]
    }
}

export const iframe = (...args) => new IFrame(...args)