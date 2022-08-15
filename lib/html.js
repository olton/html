(function () {
    'use strict';

    function dashedName(str){
        return str.replace(/([A-Z])/g, function(u) { return "-" + u.toLowerCase(); });
    }

    function setClasses(src = []){
        return Array.isArray(src) ? src.join(" ") : src.toString()
    }

    const numProps = ['opacity', 'zIndex', "order", "zoom"];

    function setStyles(src = {}){
        return Object.keys( src ).map( key => {
            const propName = dashedName(key);
            let propVal = src[key];

            if (!numProps.includes(propName) && !isNaN(propVal)) {
                propVal += 'px';
            }

            return `${propName}: ${propVal}`
        } ).join(";")
    }

    const universalAttributes = [
        "accesskey",
        "contenteditable",
        "contextmenu",
        "dir",
        "id",
        "lang",
        "spellcheck",
        "tabindex",
        "title"
    ];

    class BaseElement {
        constructor(options = {}) {
            this.options = options;
            this.tag = "div";
        }

        selfAttributes(){
            return []
        }

        get attributes(){
            return this.getAttributes().join(" ")
        }

        getAttributes(){
            let attr = [],
                single = ['hidden', 'disabled', 'required', 'readonly', 'selected', 'open', 'multiply', 'default'],
                service = ["className", "style", "data", "tag", "events"];

            for(let key in this.options) {
                if (service.includes(key))
                    continue

                if ( single.includes(key) && this.options[key] === true ) {
                    attr.push(key);
                    continue
                }

                if ( (this.selfAttributes().includes(key) && !attr.includes(key)) || universalAttributes.includes(key) ) {
                    attr.push(`${key}="${this.options[key]}"`);
                }
            }

            if (this.classes) attr.push(`class="${this.classes}"`);
            if (this.styles) attr.push(`style="${this.styles}"`);
            if (this.dataSet) attr.push(this.dataSet);
            if (this.aria) attr.push(this.aria);

            return attr
        }

        draw(){
            return this.template()
        }

        get dataSet(){
            const {data = {}} = this.options;
            let _ = [];

            if (data === {}) return ""

            for(let key in data) {
                _.push(`data-${dashedName(key)}="${data[key]}"`);
            }

            return _.join(" ")
        }

        get aria(){
            const {aria = {}} = this.options;
            let _ = [];

            if (aria === {}) return ""

            for(let key in aria) {
                _.push(`aria-${key.toLowerCase()}="${aria[key]}"`);
            }

            return _.join(" ")
        }

        get events(){
            const {events = {}} = this.options;
            let eventsArray = [];

            if (events === {}) return ""

            for(let key in events) {
                eventsArray.push(`${key.toLowerCase()}="${events[key]}"`);
            }

            return eventsArray.join(" ")
        }

        get classes(){
            const {className = []} = this.options;
            return setClasses(className)
        }

        get styles(){
            const {style = {}} = this.options;
            return setStyles(style)
        }

        template(){
            return ``
        }
    }

    const parser = element => {
        if (Array.isArray(element)) {
            return element.map( parser ).join("")
        } else if (typeof element === 'string') {
            return element
        } else if (element.draw) {
            return element.draw()
        }
        throw new Error("Unknown element! " + element)
    };

    class Tag extends BaseElement {
        constructor(children = '', options = {}) {
            if (typeof children === 'object' && !Array.isArray(children) && !(children.draw)) {
                options = children;
                children = '';
            }
            super(options);
            this.children = children;
        }

        template(content){
            const tag = this.options.tag ? this.options.tag : this.tag;

            return `
            <${tag} ${this.attributes} ${this.events}>${content}</${tag}>
        `
        }

        draw(){
            let children = this.children, html;

            if (children == null) {
                children = '';
            }

            if (typeof children === "string") {
                html = children;
            } else if (children instanceof BaseElement) {
                html = children.draw();
            } else if (Array.isArray(children)) {
                html = children.map( parser ).join("");
            } else {
                html = '';
            }

            return this.template(html)
        }
    }

    class TagEmpty extends BaseElement {
        constructor(options = {}) {
            super(options);
            this.options = options;
        }

        template(){
            const tag = this.options.tag ? this.options.tag : this.tag;

            return `
            <${tag} ${this.attributes} ${this.events}/>
        `
        }
    }

    const render = (view = [], renderTo = document.body, options = {}) => {
        let html, renderPoint;


        const {clear = true, where = 'beforeend'} = options;

        renderPoint = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo;

        if (!renderPoint) {
            renderPoint = document.body;
        }

        if (clear) {
            renderPoint.innerHTML = "";
        }

        if (!Array.isArray(view)) {
            view = [view];
        }

        html = view.map( parser ).join("");
        renderPoint.insertAdjacentHTML(where, html);
    };

    var renders = /*#__PURE__*/Object.freeze({
        __proto__: null,
        render: render
    });

    const createStyleElement = (content = '', media) => {
        let style = document.createElement("style");

        if (media !== undefined) {
            style.setAttribute("media", media);
        }

        style.appendChild(document.createTextNode(content));
        document.head.appendChild(style);

        return style
    };

    const createStyleSheet = (media) => {
        return createStyleElement(media).sheet
    };

    const addCssRule = (sheet, selector, rules) => {
        sheet.insertRule(selector + "{" + rules + "}");
    };

    const addStyle = (style, media) => {
        if (typeof style === "string") {
            createStyleElement(style, media);
            return
        }

        const sheet = createStyleSheet(media);
        for(let key in style) {
            addCssRule(sheet, key, setStyles(style[key]));
        }
    };

    var styleRoutines = /*#__PURE__*/Object.freeze({
        __proto__: null,
        createStyleElement: createStyleElement,
        createStyleSheet: createStyleSheet,
        addCssRule: addCssRule,
        addStyle: addStyle
    });

    class Span extends Tag {
        tag = 'span'
    }

    const span = (children = '', options = {}) => new Span(children, options);

    class Img extends TagEmpty {
        tag = 'img'

        selfAttributes() {
            return ["align", "alt", "border", "height", "hspace", "ismap", "longdesc", "lowsrc", "src", "vspace", "width", "usemap"]
        }
    }

    const img = (options = {}) => new Img(options);
    const img2 = (src = '', alt = '', options = {}) => img({...options, src, alt});

    class Input extends TagEmpty {
        tag = "input"

        selfAttributes() {
            return [
                "accept", "align", "alt", "autocomplete", "autofocus", "border", "checked", "disabled", "form", "formaction",
                "formenctype", "formmethod", "formnovalidate", "formtarget", "list", "max", "maxlength", "min", "multiple",
                "name", "pattern", "placeholder", "size", "src", "step", "type", "value"
            ]
        }
    }

    const input = (options = {}) => new Input(options);
    const input2 = (value = '', options = {}) => new Input({...options, value});

    class Br extends TagEmpty {
        tag = 'br'

        selfAttributes() {
            return ["clear"]
        }
    }

    const br = options => new Br(options);

    class Hr extends TagEmpty {
        tag = 'hr'
    }

    const hr = options => new Hr(options);

    class Heading extends Tag {
        constructor(tag = 'h1', children = '', options = {}) {
            super(children, options);
            this.tag = tag;
        }
    }

    const heading = (tag = 'h1', children = '', options = {}) => new Heading(tag, children, options);
    const h1 = (children = '', options = {}) => heading('h1', children, options);
    const h2 = (children = '', options = {}) => heading('h2', children, options);
    const h3 = (children = '', options = {}) => heading('h3', children, options);
    const h4 = (children = '', options = {}) => heading('h4', children, options);
    const h5 = (children = '', options = {}) => heading('h5', children, options);
    const h6 = (children = '', options = {}) => heading('h6', children, options);

    class Section extends Tag {
        tag = 'section'
    }

    const section = (children = '', options = {}) => new Section(children, options);

    class Anchor extends Tag {
        tag = 'a'

        selfAttributes() {
            return ["coords", "download", "hreflang", "name", "rel", "rev", "shape", "target", "type", "href"]
        }
    }

    const anchor = (children = '', options = {}) => new Anchor(children, options);
    const a = (href = '#', children = '', options = {}) => new Anchor(children, {...options, href});

    class Abbr extends Tag {
        tag = "abbr"
    }

    const abbr = (children = '', options = {}) => new Abbr(children, options);

    class Article extends Tag {
        tag = 'article'
    }

    const article = (children = '', options = {}) => new Article(children, options);

    class Nav extends Tag {
        tag = 'nav'
    }

    const nav = (children = '', options = {}) => new Nav(children, options);

    class Aside extends Tag {
        tag = 'aside'
    }

    const aside = (children = '', options = {}) => new Aside(children, options);

    class Header extends Tag {
        tag = 'header'
    }

    const header = (children = '', options = {}) => new Header(children, options);

    class Footer extends Tag {
        tag = 'footer'
    }

    const footer = (children = '', options = {}) => new Footer(children, options);

    class Address extends Tag {
        tag = 'address'
    }

    const address = (children = '', options = {}) => new Address(children, options);

    class Map extends Tag {
        tag = 'map'

        selfAttributes() {
            return ["name"]
        }
    }

    const map = (children = '', options = {}) => new Map(children, options);

    class Area extends TagEmpty {
        tag = 'area'

        selfAttributes() {
            return ["alt", "coords", "hreflang", "nohref", "shape", "target", "type", "href"]
        }
    }

    const area = (options = {}) => new Area(options);
    const area2 = (href = '#', options = {}) => area({...options, href});

    class AudioTag extends Tag {
        tag = 'audio'

        selfAttributes() {
            return ["autoplay", "controls", "loop", "preload", "src"]
        }
    }

    const audio = (children = '', options = {}) => new AudioTag(children, options);
    const audio2 = (src = '', children = '', options = {}) => new AudioTag(children, {...options, src});

    class Bold extends Tag {
        tag = 'b'
    }

    const bold = (children = '', options = {}) => new Bold(children, options);

    class Bdi extends Tag {
        tag = 'bdi'
    }

    const bdi = (children = '', options = {}) => new Bdi(children, options);

    class Bdo extends Tag {
        tag = 'bdo'
    }

    const bdo = (children = '', options = {}) => new Bdo(children, options);

    class Blockquote extends Tag {
        tag = 'blockquote'

        selfAttributes() {
            return ["cite"];
        }
    }

    const blockquote = (children = '', options = {}) => new Blockquote(children, options);

    class Button extends Tag {
        tag = 'button'

        selfAttributes() {
            return ["autofocus", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"]
        }
    }

    const button = (children = '', options = {}) => new Button(children, options);

    class Canvas extends Tag {
        tag = 'canvas'

        selfAttributes() {
            return ["width", "height"]
        }
    }

    const canvas = (children = '', options = {}) => new Canvas(children, options);

    class Table extends Tag {
        tag = 'table'

        selfAttributes() {
            return [
                "align", "background", "bgcolor", "border", "bordercolor", "cellpadding",
                "cellspacing", "cols", "frame", "height", "rules", "summary", "width"
            ]
        }
    }

    const table = (children = '', options = {}) => new Table(children, options);

    class Caption extends Tag {
        tag = 'caption'

        selfAttributes() {
            return ["align", "valign"]
        }
    }

    const caption = (children = '', options = {}) => new Caption(children, options);

    class Col extends TagEmpty {
        tag = 'col'

        selfAttributes() {
            return ["align", "valign", "char", "charoff", "span", "width"]
        }
    }

    const col = options => new Col(options);

    class Colgroup extends TagEmpty {
        tag = 'colgroup'

        selfAttributes() {
            return ["align", "valign", "char", "charoff", "span", "width"]
        }
    }

    const colgroup = options => new Colgroup(options);

    class TableSection extends Tag {
        constructor(tag = 'tbody', children = '', options = {}) {
            super(children, options);
            this.tag = tag;
        }

        selfAttributes() {
            return ["align", "valign", "char", "charoff", "bgcolor"]
        }
    }

    const tbody = (children = '', options = {}) => new TableSection('tbody', children, options);
    const thead = (children = '', options = {}) => new TableSection('thead', children, options);
    const tfoot = (children = '', options = {}) => new TableSection('tfoot', children, options);

    class TableRow extends Tag {
        tag = "tr"

        selfAttributes() {
            return ["align", "bgcolor", "bordercolor", "char", "charoff", "valign"]
        }
    }

    const tr = (children = '', options = {}) => new TableRow(children, options);

    class TableCell extends Tag {
        constructor(tag = 'td', children = '', options = {}) {
            super(children, options);
            this.tag = tag;
        }

        selfAttributes() {
            return ["abbr", "align", "axis", "background", "bgcolor", "bordercolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"]
        }
    }

    const th = (children = '', options = {}) => new TableCell('th', children, options);
    const td = (children = '', options = {}) => new TableCell('td', children, options);

    class Cite extends Tag {
        tag = 'cite'
    }

    const cite = (children = '', options = {}) => new Cite(children, options);

    class Code extends Tag {
        tag = 'code'
    }

    const code = (children = '', options = {}) => new Code(children, options);

    class Dl extends Tag {
        tag = 'dl'
    }

    class Dt extends Tag {
        tag = 'dt'
    }

    class Dd extends Tag {
        tag = 'dd'
    }

    const dl = (children = '', options = {}) => new Dl(children, options);
    const dt = (children = '', options = {}) => new Dt(children, options);
    const dd = (children = '', options = {}) => new Dd(children, options);

    class Details extends Tag {
        tag = 'details'
    }

    const details = (children = '', options = {}) => new Details(children, options);

    class Summary extends Tag {
        tag = 'summary'
    }

    const summary = (children = '', options = {}) => new Summary(children, options);

    class Dfn extends Tag {
        tag = 'dfn'
    }

    const dfn = (children = '', options = {}) => new Dfn(children, options);

    class Div extends Tag {
        tag = 'div'

        selfAttributes() {
            return ["align", "title"]
        }
    }

    const div = (children = '', options = {}) => new Div(children, options);

    class Em extends Tag {
        tag = 'em'
    }

    const em = (children = '', options = {}) => new Em(children, options);

    class Ital extends Tag {
        tag = 'i'
    }

    const ital = (children = '', options = {}) => new Ital(children, options);
    const i = (children = '', options = {}) => new Ital(children, options);

    class Strong extends Tag {
        tag = 'strong'
    }

    const strong = (children = '', options = {}) => new Strong(children, options);

    class Embed extends Tag {
        tag = 'embed'

        selfAttributes() {
            return ["align", "height", "hspace", "pluginspace", "src", "type", "vspace", "width"]
        }
    }

    const embed = (children = '', options = {}) => new Embed(children, options);

    class NoEmbed extends Tag {
        tag = 'noembed'
    }

    const noembed = (children = '', options = {}) => new NoEmbed(children, options);

    class Fieldset extends Tag {
        tag = 'fieldset'

        selfAttributes() {
            return ["form", "title"]
        }
    }

    const fieldset = (children = '', options = {}) => new Fieldset(children, options);

    class Legend extends Tag {
        tag = 'legend'

        selfAttributes() {
            return ["align", "title"]
        }
    }

    const legend = (children = '', options = {}) => new Legend(children, options);

    class Figure extends Tag {
        tag = 'figure'
    }

    const figure = (children = '', options = {}) => new Figure(children, options);

    class FigCaption extends Tag {
        tag = 'figcaption'
    }

    const figcaption = (children = '', options = {}) => new FigCaption(children, options);

    class Form extends Tag {
        tag = 'form'

        selfAttributes() {
            return ["accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"]
        }
    }

    const form = (children = '', options = {}) => new Form(children, options);

    class Frameset extends Tag {
        tag = 'frameset'

        selfAttributes() {
            return ["border", "bordercolor", "cols", "frameborder", "framespacing", "rows"]
        }
    }

    const frameset = (children = '', options = {}) => new Frameset(children, options);

    class Frame extends TagEmpty {
        tag = 'frame'

        selfAttributes() {
            return ["bordercolor", "frameborder", "noresize", "name", "src", "scrolling"]
        }
    }

    const frame = (options = {}) => new Frame(options);
    const frame2 = (src = '', name = '', options = {}) => new Frame({...options, src, name});

    class NoFrames extends Tag {
        tag = 'noframes'
    }

    const noframes = (children = '', options = {}) => new NoFrames(children, options);

    class IFrame extends Tag {
        tag = 'iframe'

        selfAttributes() {
            return ["align", "allowtransparency", "frameborder", "height", "hspace", "marginheight", "marginwidth", "name", "sandbox", "scrolling", "seamless", "src", "srcdoc", "vspace", "width"]
        }
    }

    const iframe = (children = '', options = {}) => new IFrame(children, options);
    const iframe2 = (src = '', name = '', children = '', options = {}) => new IFrame(children, {...options, src, name});

    class Ins extends Tag {
        tag = 'ins'

        selfAttributes() {
            return ["cite", "datetime"]
        }
    }

    const ins = (children = '', options = {}) => new Ins(children, options);

    class Kbd extends Tag {
        tag = 'kbd'
    }

    const kbd = (children = '', options = {}) => new Kbd(children, options);

    class Label extends Tag {
        tag = 'label'

        selfAttributes() {
            return ["for"]
        }
    }

    const label = (children = '', options = {}) => new Label(children, options);
    const label2 = (_for = '', children = '', options = {}) => label(children, {...options, "for": _for});

    class List extends Tag {
        constructor(tag = 'ul', children = '', options = {}) {
            super(children, options);
            this.tag = tag;
        }

        selfAttributes() {
            return this.tag === 'ul'
                ? ["type"]
                : ["type", "reserved", "start"]
        }
    }

    class ListItem extends Tag {
        tag = "li"

        selfAttributes() {
            return ["type", "value"]
        }
    }

    const ul = (children = '', options = {}) => new List('ul', children, options);
    const ol = (children = '', options = {}) => new List('ol', children, options);
    const li = (children = '', options = {}) => new ListItem(children, options);

    class Mark extends Tag {
        tag = 'mark'
    }

    const mark = (children = '', options = {}) => new Mark(children, options);

    class NoScript extends Tag {
        tag = 'noscript'
    }

    const noscript = (children = '', options = {}) => new NoScript(children, options);

    class Select extends Tag {
        tag = 'select'

        selfAttributes() {
            return ["autofocus", "form", "name", "size"]
        }
    }

    const select = (children = '', options = {}) => new Select(children, options);

    class OptionGroup extends Tag {
        tag = 'optgroup'

        selfAttributes() {
            return ["label"]
        }
    }

    const optgroup = (children = '', options = {}) => new OptionGroup(children, options);

    class Option extends Tag {
        tag = 'option'

        selfAttributes() {
            return ["label", "value"]
        }
    }

    const option = (value = '', children = '', options = {}) => new Option(value, children, options);

    class Output extends Tag {
        tag = 'output'

        selfAttributes() {
            return ["for", "form", "name"]
        }
    }

    const output = (children = '', options = {}) => new Output(children, options);

    class Paragraph extends Tag {
        tag = 'p'

        selfAttributes() {
            return ["align"]
        }
    }

    const paragraph = (children = '', options = {}) => new Paragraph(children, options);
    const p = (children = '', options = {}) => new Paragraph(children, options);

    class Pre extends Tag {
        tag = 'pre'
    }

    const pre = (children = '', options = {}) => new Pre(children, options);

    class Quoted extends Tag {
        tag = 'q'

        selfAttributes() {
            return ["cite"]
        }
    }

    const q = (children = '', options = {}) => new Quoted(children, options);

    class Strike extends Tag {
        tag = 'strike'
    }

    const strike = (children = '', options = {}) => new Strike(children, options);
    const s = (children = '', options = {}) => new Strike(children, options);

    class Script extends Tag {
        tag = 'script'

        selfAttributes() {
            return ["async", "defer", "language", "src", "type"]
        }
    }

    const script = (children = '', options = {}) => new Script(children, options);
    const script2 = (src = '', children = '', options = {}) => script(children, {...options, src});

    class Small extends Tag {
        tag = 'small'
    }

    const small = (children = '', options = {}) => new Small(children, options);

    class Source extends TagEmpty {
        tag = 'source'

        selfAttributes() {
            return ["media", "src", "type"]
        }
    }

    const source = (options = {}) => new Source(options);
    const source2 = (src = '', options = {}) => source({...options, src});

    class Sub extends Tag {
        tag = 'sub'
    }

    const sub = (children = '', options = {}) => new Sub(children, options);

    class Sup extends Tag {
        tag = 'sup'
    }

    const sup = (children = '', options = {}) => new Sup(children, options);

    class Textarea extends Tag {
        tag = 'textarea'

        selfAttributes() {
            return ["autofocus", "cols", "form", "maxlength", "name", "placeholder", "rows", "wrap"]
        }
    }

    const textarea = (children = '', options = {}) => new Textarea(children, options);

    class Time extends Tag {
        tag = 'time'

        selfAttributes() {
            return ["datetime", "pubdate"]
        }
    }

    const time = (children = '', options = {}) => new Time(children, options);

    class Track extends TagEmpty {
        tag = 'track'

        selfAttributes() {
            return ["kind", "src", "srclang", "label"]
        }
    }

    const track = (options = {}) => new Track(options);
    const track2 = (src = '', options = {}) => track({...options, src});

    class Var extends Tag {
        tag = 'var'
    }

    const variable = (children = '', options = {}) => new Var(children, options);

    class VideoTag extends Tag {
        tag = 'video'

        selfAttributes() {
            return ["autoplay", "controls", "height", "loop", "loop", "poster", "preload", "src", "width"]
        }
    }

    const video = (children = '', options = {}) => new VideoTag(children, options);
    const video2 = (src = '', children = '', options = {}) => video(children, {...options, src});

    class Wbr extends TagEmpty {
        tag = 'wbr'
    }

    const wbr = options => new Wbr(options);

    class Main extends Tag {
        tag = 'main'
    }

    const main = (children = '', options = {}) => new Main(children, options);

    class Flexbox extends Tag {
        tag = "div"

        constructor(children = "", options = {}) {
            let {style = {}, order = 0, justify = "flex-start", align = "stretch", content = "normal"} = options;
            const flex = ["direction", "wrap", "flow", "grow", "shrink", "basis"];

            style.display = options.inline === true ? "inline-flex" : "flex";

            flex.forEach( v => {
                if (typeof options[v] !== "undefined") {
                    style[`flex-${v}`] = options[v];
                }
            } );

            style.order = order;
            style.justifyContent = justify;
            style.alignItems = align;
            style.alignContent = content;

            super(children, {...options, style});
        }
    }

    const flexbox = (children, options) => new Flexbox(children, options);

    class Margin extends Tag {
        constructor(children = "", options = {}) {
            let {style = {}} = options;
            const position = ["left", "right", "top", "bottom"];

            position.forEach( v => {
                if (typeof options[v] !== "undefined") {
                    let val = options[v];
                    style[`margin-${v}`] = isNaN(val) ? val : `${val}px`;
                }
            } );

            super(children, {...options, style});
        }
    }

    const margin = (children, options) => new Margin(children, options);

    class Padding extends Tag {
        constructor(children = "", options = {}) {
            let {style = {}} = options;
            const position = ["left", "right", "top", "bottom"];

            position.forEach( v => {
                if (typeof options[v] !== "undefined") {
                    let val = options[v];
                    style[`padding-${v}`] = isNaN(val) ? val : `${val}px`;
                }
            } );

            super(children, {...options, style});
        }
    }

    const padding = (children, options) => new Padding(children, options);

    class Center extends Tag {
        constructor(children = "", options = {}) {
            let {style = {}} = options;

            style.textAlign = "center";

            super(children, {...options, style});
        }
    }

    const center = (children, options) => new Center(children, options);

    class FigureSimple extends Tag {
        tag = 'figure'

        constructor(img = '', caption = '', alt= '', options = {}) {
            if (alt && typeof alt !== "string") {
                options = alt;
                alt = "";
            }

            super(options);

            this.img = img;
            this.alt = alt;
            this.caption = caption;
        }

        template() {
            return `
            <${this.tag} ${this.attributes} ${this.events}>
                <img src="${this.img}" alt="${this.alt}">
                <figcaption>${this.caption}</figcaption>            
            </${this.tag}>
        `
        }
    }

    const figureSimple = (img, caption, alt, options) => new FigureSimple(img, caption, alt, options);

    class CssGrid extends Tag {
        constructor(children = '', options = {}) {
            let {style = {}} = options;
            const props = ["gap", "templateRows", "templateColumns", "templateAreas", "autoRows", "autoColumns", "autoFlow"];

            style.display = "grid"; // inline-grid ?

            props.forEach( v => {
                if (typeof options[v] !== "undefined") {
                    style[`grid-${dashedName(v)}`] = options[v];
                }
            } );

            super(children, {...options, style});
        }
    }

    const cssGrid = (children, options) => new CssGrid(children, options);

    class CssGridItem extends Tag {
        constructor(children = '', options = {}) {
            let {style = {}} = options;
            const props = ["rowStart", "rowEnd", "columnStart", "columnEnd", "area", "column", "row"];

            props.forEach( v => {
                if (typeof options[v] !== "undefined") {
                    style[`grid-${dashedName(v)}`] = options[v];
                }
            } );

            super(children, {...options, style});

            if (options.tag) {
                this.tag = options.tag;
            }
        }
    }

    const cssGridItem = (children, options) => new CssGridItem(children, options);

    class Meta extends TagEmpty {
        tag = 'meta'

        selfAttributes() {
            return ["content", "name", "http-equiv", "charset"]
        }
    }

    const meta = options => new Meta(options);

    const addMeta = options => {
        let metas = document.head.querySelectorAll("meta");
        let metaElement = meta(options), attr;
        const check = ["name", "charset", "http-equiv"];

        metas.forEach( v => {
            for (let i = 0; i < check.length; i++) {
                attr = check[i];
                if (options[attr] && (v.hasAttribute(attr) && v.getAttribute(attr) === options[attr])) {
                    v.remove();
                    return
                }
            }
        });

        render(metaElement, document.head, {clear: false});
    };

    class Title extends Tag {
        tag = 'title'
    }

    const title = text => new Title(text);

    const addTitle = text => {
        let t = document.head.querySelector("title");

        if (t) {
            t.remove();
        }

        render(title(text), document.head, {clear: false});
    };

    var html_elements = /*#__PURE__*/Object.freeze({
        __proto__: null,
        br: br,
        Br: Br,
        hr: hr,
        Hr: Hr,
        span: span,
        Span: Span,
        Img: Img,
        img: img,
        img2: img2,
        Input: Input,
        input: input,
        input2: input2,
        heading: heading,
        Heading: Heading,
        h1: h1,
        h2: h2,
        h3: h3,
        h4: h4,
        h5: h5,
        h6: h6,
        section: section,
        Section: Section,
        anchor: anchor,
        a: a,
        Anchor: Anchor,
        abbr: abbr,
        Abbr: Abbr,
        article: article,
        Article: Article,
        nav: nav,
        Nav: Nav,
        aside: aside,
        Aside: Aside,
        header: header,
        Header: Header,
        footer: footer,
        Footer: Footer,
        address: address,
        Address: Address,
        map: map,
        Map: Map,
        area: area,
        Area: Area,
        area2: area2,
        audio: audio,
        audio2: audio2,
        AudioTag: AudioTag,
        bold: bold,
        Bold: Bold,
        bdi: bdi,
        Bdi: Bdi,
        bdo: bdo,
        Bdo: Bdo,
        blockquote: blockquote,
        Blockquote: Blockquote,
        button: button,
        Button: Button,
        canvas: canvas,
        Canvas: Canvas,
        table: table,
        Table: Table,
        caption: caption,
        Caption: Caption,
        col: col,
        Col: Col,
        colgroup: colgroup,
        Colgroup: Colgroup,
        TableSection: TableSection,
        TableCell: TableCell,
        thead: thead,
        tbody: tbody,
        tfoot: tfoot,
        td: td,
        th: th,
        tr: tr,
        TableRow: TableRow,
        cite: cite,
        Cite: Cite,
        code: code,
        Code: Code,
        dl: dl,
        dt: dt,
        dd: dd,
        Dl: Dl,
        Dt: Dt,
        Dd: Dd,
        details: details,
        Details: Details,
        summary: summary,
        Summary: Summary,
        dfn: dfn,
        Dfn: Dfn,
        div: div,
        Div: Div,
        em: em,
        Em: Em,
        ital: ital,
        Ital: Ital,
        i: i,
        strong: strong,
        Strong: Strong,
        embed: embed,
        Embed: Embed,
        noembed: noembed,
        NoEmbed: NoEmbed,
        fieldset: fieldset,
        Fieldset: Fieldset,
        legend: legend,
        Legend: Legend,
        figure: figure,
        Figure: Figure,
        figcaption: figcaption,
        FigCaption: FigCaption,
        form: form,
        Form: Form,
        frame: frame,
        frame2: frame2,
        frameset: frameset,
        Frame: Frame,
        Frameset: Frameset,
        noframes: noframes,
        NoFrames: NoFrames,
        iframe: iframe,
        IFrame: IFrame,
        iframe2: iframe2,
        ins: ins,
        Ins: Ins,
        kbd: kbd,
        Kbd: Kbd,
        label: label,
        label2: label2,
        Label: Label,
        ul: ul,
        ol: ol,
        li: li,
        List: List,
        ListItem: ListItem,
        mark: mark,
        Mark: Mark,
        noscript: noscript,
        NoScript: NoScript,
        select: select,
        Select: Select,
        OptionGroup: OptionGroup,
        optgroup: optgroup,
        Option: Option,
        option: option,
        output: output,
        Output: Output,
        p: p,
        Paragraph: Paragraph,
        paragraph: paragraph,
        pre: pre,
        Pre: Pre,
        q: q,
        Quoted: Quoted,
        s: s,
        strike: strike,
        Strike: Strike,
        script: script,
        Script: Script,
        script2: script2,
        small: small,
        Small: Small,
        source: source,
        Source: Source,
        source2: source2,
        sub: sub,
        Sub: Sub,
        sup: sup,
        Sup: Sup,
        textarea: textarea,
        Textarea: Textarea,
        time: time,
        Time: Time,
        track: track,
        Track: Track,
        track2: track2,
        variable: variable,
        Var: Var,
        video: video,
        VideoTag: VideoTag,
        video2: video2,
        wbr: wbr,
        Wbr: Wbr,
        main: main,
        Main: Main,
        flexbox: flexbox,
        Flexbox: Flexbox,
        margin: margin,
        Margin: Margin,
        padding: padding,
        Padding: Padding,
        center: center,
        Center: Center,
        figureSimple: figureSimple,
        FigureSimple: FigureSimple,
        cssGrid: cssGrid,
        CssGrid: CssGrid,
        cssGridItem: cssGridItem,
        CssGridItem: CssGridItem,
        meta: meta,
        Meta: Meta,
        addMeta: addMeta,
        title: title,
        Title: Title,
        addTitle: addTitle
    });

    const cssLoader = async (path, options) => {
        let response = await fetch(path, options), textNode, tag;

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status)
        }

        textNode = await response.text();
        tag = document.createElement("style");
        tag.appendChild(document.createTextNode(textNode));
        document.body.appendChild(tag);
    };

    const jsLoader = async (path, options) => {
        let response = await fetch(path, options), textNode, tag;

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status)
        }

        textNode = await response.text();
        tag = document.createElement("script");
        tag.appendChild(document.createTextNode(textNode));
        document.body.appendChild(tag);
    };

    const viewLoader = async (path, options = {}, storage = false) => {
        let response, textNode, result = () => {}, storageKey;

        if (storage !== false) {
            storageKey = `htmljs::key::${path}`;
            textNode = localStorage.getItem(storageKey);
        }

        if (!textNode) {

            response = await fetch(path, options);

            if (!response.ok) {
                throw new Error("HTTP error: " + response.status)
            }

            textNode = await response.text();

            if (storage !== false) {
                localStorage.setItem(storageKey, textNode);
            }
        }

        const eval2 = eval;

        eval2(`result = ${textNode}`);

        return typeof result === "function" ? result() : result
    };

    const clearViewStorageHolder = path => localStorage.removeItem(`htmljs::key::${path}`);

    var loaders = /*#__PURE__*/Object.freeze({
        __proto__: null,
        cssLoader: cssLoader,
        jsLoader: jsLoader,
        viewLoader: viewLoader,
        clearViewStorageHolder: clearViewStorageHolder
    });

    class Router {
        version = "0.1.0"
        _routes = []
        _route = '/'
        _mode = null
        _ignore = '[data-route-ignore]'
        _404 = () => {}

        constructor(options = {}) {
            this.options = Object.assign({}, this.options, options);

            if (this.options.mode) this._mode = this.options.mode;
            if (this.options.ignore) this._ignore = this.options.ignore;
            if (this.options.routes) this.addRoutes(this.options.routes);
            if (this.options["404"] && typeof this.options["404"] === "function") this._404 = this.options["404"];
        }

        clearSlashes(path) {
            return path.replace(/\/$/, '').replace(/^\//, '')
        }

        index(path){
            let exists = -1;

            for(let i = 0; i < this._routes.length; i++) {
                if (this._routes[i].path === path) {
                    exists = i;
                    break
                }
            }

            return exists
        }

        routeExists(path){
            return this.index(path) !== -1
        }

        _routesFn(routes, fn){
            if (Array.isArray(routes) && routes.length) {
                routes.forEach( r => {
                    if (r.path)
                        this[fn](r.path, r.callback);
                } );
            } else if (typeof routes === "object") {
                for (let key in routes) {
                    if (routes.hasOwnProperty(key))
                        this[fn](key, routes[key]);
                }
            }

        }

        addRoute(path, callback){
            if (path && !this.routeExists(path)) {
                this._routes.push({
                    path: path,
                    callback: callback,
                    pattern: new RegExp('^' + (path).replace(/:\w+/g,'(\\w+)') + '$'),
                });
            }

            return this
        }

        addRoutes(routes){
            this._routesFn(routes, 'addRoute');
            return this
        }

        updRoute(path, route){
            const i = this.index(path);

            if (i === -1) return

            if (route && route.path) this._routes[i].path = route.path;
            if (route && route.callback) this._routes[i].callback = route.callback;

            return this
        }

        updRoutes(routes){
            this._routesFn(routes, 'updRoute');
            return this
        }

        delRoute(path){
            if (this.routeExists(path))
                delete this._routes[path];

            return this
        }

        findRoute(path){
            let result;

            for (let i = 0; i < this._routes.length; i++) {
                if (path.match(this._routes[i].pattern)) {
                    result = this._routes[i];
                    break
                }
            }

            return result
        }

        exec(loc = document.location, pushState = false){
            let url, path, route;

            url = new URL(loc);
            path = url.pathname;
            route = this.findRoute(path);

            if (!route) {
                this._404();
                return this
            }

            if (pushState)
                history.pushState(null, null, path);

            if (route && typeof route.callback === "function") {
                route.callback.apply(this, [path]);
            }

            this.route = path;

            return this
        }

        listen(){
            const {ignore} = this.options;

            window.addEventListener('click', (e) => {
                const target = e.target;
                let href;

                if (target.tagName.toLowerCase() !== "a" || target.matches(ignore)) return

                e.preventDefault();

                href = target.href;

                if (href) this.exec(href, true);
            }, false);

            window.addEventListener("popstate", (e) => {
                this.exec(document.location);
            }, false);

            return this
        }
    }

    const router = routes => new Router(routes);

    var router$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Router: Router,
        router: router
    });

    globalThis.html = {
        BaseElement,
        Tag,
        TagEmpty,
        ...html_elements,
        ...renders,
        ...loaders,
        ...styleRoutines,
        ...router$1
    };

    globalThis.__htmlSaver = {};

    globalThis.html.extract = (ctx = globalThis) => {
        for (let key in globalThis.html) {
            globalThis.__htmlSaver[key] = globalThis[key];
            ctx[key] = globalThis.html[key];
        }
    };

    globalThis.html.restore = (ctx = globalThis) => {
        for (let key in globalThis.__htmlSaver) {
            ctx[key] = globalThis.__htmlSaver[key];
        }
    };

})();
