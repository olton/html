import SingleTag from "../core/single-tag.js";

export class Img extends SingleTag {
    tag = 'img'

    selfAttributes() {
        return ["align", "alt", "border", "height", "hspace", "ismap", "longdesc", "lowsrc", "src", "vspace", "width", "usemap"]
    }
}

export const img = (src = '', alt = '', options = {}) => new Img({...options, src, alt})