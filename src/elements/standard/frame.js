import Tag from "../core/tag.js";
import SingleTag from "../core/single-tag.js";

export class Frameset extends Tag {
    tag = 'frameset'

    selfAttributes() {
        return ["border", "bordercolor", "cols", "frameborder", "framespacing", "rows"]
    }
}

export const frameset = (...args) => new Frameset(...args)

export class Frame extends SingleTag {
    tag = 'frame'

    selfAttributes() {
        return ["bordercolor", "frameborder", "noresize", "name", "src", "scrolling"]
    }
}

export const frame = (options = {}) => new Frame(options)

export class NoFrames extends Tag {
    tag = 'noframes'
}

export const noframes = (...args) => new NoFrames(...args)

