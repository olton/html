import Tag from "../core/tag.js";

export class Embed extends Tag {
    tag = 'embed'

    selfAttributes() {
        return ["align", "height", "hspace", "pluginspace", "src", "type", "vspace", "width"]
    }
}

export const embed = (...args) => new Embed(...args)

export class NoEmbed extends Tag {
    tag = 'noembed'
}

export const noembed = (...args) => new NoEmbed(...args)
