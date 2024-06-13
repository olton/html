import SingleTag from "../core/single-tag.js";

export class Link extends SingleTag {
    tag = 'link'

    selfAttributes() {
        return ["href", "crossorigin", "rel", "media", "integrity", "hreflang", "type", "referrerpolicy", "sizes", "imagesrcset", "imagesizes", "as", "blocking", "color", "disabled", "fetchpriority"]
    }
}

export const link = options => new Link(options)