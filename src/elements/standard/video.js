import Tag from "../core/tag.js";

export class VideoTag extends Tag {
    tag = 'video'

    selfAttributes() {
        return ["autoplay", "controls", "height", "loop", "loop", "poster", "preload", "src", "width"]
    }
}

export const video = (...args) => new VideoTag(...args)