import Tag from "../core/tag.js";
import SingleTag from "../core/single-tag.js";

export class Table extends Tag {
    tag = 'table'

    selfAttributes() {
        return [
            "align", "background", "bgcolor", "border", "bordercolor", "cellpadding",
            "cellspacing", "cols", "frame", "height", "rules", "summary", "width"
        ]
    }
}

export const table = (...args) => new Table(...args)

export class Caption extends Tag {
    tag = 'caption'

    selfAttributes() {
        return ["align", "valign"]
    }
}

export const caption = (...args) => new Caption(...args)

export class Col extends SingleTag {
    tag = 'col'

    selfAttributes() {
        return ["align", "valign", "char", "charoff", "span", "width"]
    }
}

export const col = options => new Col(options)

export class Colgroup extends SingleTag {
    tag = 'colgroup'

    selfAttributes() {
        return ["align", "valign", "char", "charoff", "span", "width"]
    }
}

export const colgroup = options => new Colgroup(options)

export class TableSection extends Tag {
    constructor(tag = 'tbody', ...args) {
        super(...args)
        this.tag = tag
    }

    selfAttributes() {
        return ["align", "valign", "char", "charoff", "bgcolor"]
    }
}

export const tbody = (...args) => new TableSection('tbody', ...args)
export const thead = (...args) => new TableSection('thead', ...args)
export const tfoot = (...args) => new TableSection('tfoot', ...args)

export class TableRow extends Tag {
    tag = "tr"

    selfAttributes() {
        return ["align", "bgcolor", "bordercolor", "char", "charoff", "valign"]
    }
}

export const tr = (...args) => new TableRow(...args)

export class TableCell extends Tag {
    constructor(tag = 'td', ...args) {
        super(...args)
        this.tag = tag
    }

    selfAttributes() {
        return ["abbr", "align", "axis", "background", "bgcolor", "bordercolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"]
    }
}

export const th = (...args) => new TableCell('th', ...args)
export const td = (...args) => new TableCell('td', ...args)


