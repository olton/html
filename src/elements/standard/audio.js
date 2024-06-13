import Tag from "../core/tag.js";

export class AudioTag extends Tag {
    tag = 'audio'

    selfAttributes() {
        return ["autoplay", "controls", "loop", "preload", "src"]
    }
}

export const audio = (...args) => new AudioTag(...args)