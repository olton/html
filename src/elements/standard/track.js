import SingleTag from "../core/single-tag.js";

export class Track extends SingleTag {
    tag = 'track'

    selfAttributes() {
        return ["kind", "src", "srclang", "label"]
    }
}

export const track = (options = {}) => new Track(options)