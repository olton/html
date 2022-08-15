import Tag from "../core/tag.js";

export class Embed extends Tag {
    tag = 'embed'

    selfAttributes() {
        return ["align", "height", "hspace", "pluginspace", "src", "type", "vspace", "width"]
    }
}

export const embed = (children = '', options = {}) => new Embed(children, options)

export class NoEmbed extends Tag {
    tag = 'noembed'
}

export const noembed = (children = '', options = {}) => new NoEmbed(children, options)
