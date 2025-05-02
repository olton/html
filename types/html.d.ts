// Type definitions for Html.js
// Project: https://github.com/olton/Html

declare module "html" {
  /**
   * Options for HTML elements
   */
  interface ElementOptions {
    /** CSS class or classes */
    class?: string | string[];
    /** CSS styles */
    style?: Record<string, string | number>;
    /** Data attributes */
    data?: Record<string, string | number | boolean>;
    /** ARIA attributes */
    aria?: Record<string, string | number | boolean>;
    /** Event handlers */
    events?: Record<string, string>;
    /** Tag name override */
    tag?: string;
    /** Any other HTML attributes */
    [key: string]: any;
  }

  /**
   * Base class for all HTML elements
   */
  export class BaseElement {
    /**
     * Creates a new BaseElement
     * @param options - Element options
     */
    constructor(options?: ElementOptions);

    /**
     * Element options
     */
    options: ElementOptions;

    /**
     * Element tag name
     */
    tag: string;

    /**
     * Returns element-specific attributes
     * @returns Array of attribute names
     */
    selfAttributes(): string[];

    /**
     * Gets all attributes as a string
     */
    get attributes(): string;

    /**
     * Gets all attributes as an array
     * @returns Array of attribute strings
     */
    getAttributes(): string[];

    /**
     * Renders the element
     * @returns HTML string
     */
    draw(): string;

    /**
     * Gets data attributes as a string
     */
    get dataSet(): string;

    /**
     * Gets ARIA attributes as a string
     */
    get aria(): string;

    /**
     * Gets event attributes as a string
     */
    get events(): string;

    /**
     * Gets CSS classes as a string
     */
    get classes(): string;

    /**
     * Gets CSS styles as a string
     */
    get styles(): string;

    /**
     * Element template
     * @returns HTML string
     */
    template(): string;

    /**
     * Converts element to string
     * @returns HTML string
     */
    toString(): string;

    /**
     * Converts element to DOM element
     * @returns HTMLElement
     */
    toElement(): HTMLElement;
  }

  /**
   * Class for HTML elements with opening and closing tags
   */
  export class Tag extends BaseElement {
    /**
     * Creates a new Tag
     * @param args - Element options and children
     */
    constructor(...args: any[]);

    /**
     * Element children
     */
    children: any[];

    /**
     * Element template
     * @param content - Content to include between tags
     * @returns HTML string
     */
    // @ts-ignore
    template(content: string): string;

    /**
     * Renders the element with its children
     * @returns HTML string
     */
    draw(): string;
  }

  /**
   * Class for self-closing HTML elements
   */
  export class SingleTag extends BaseElement {
    /**
     * Creates a new SingleTag
     * @param options - Element options
     */
    constructor(options?: ElementOptions);

    /**
     * Element template
     * @returns HTML string
     */
    template(): string;
  }

  /**
   * Options for rendering HTML
   */
  interface RenderOptions {
    /** Whether to clear the target element before rendering */
    clear?: boolean;
    /** Where to insert the HTML relative to the target */
    where?: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
  }

  /**
   * Renders HTML elements to the DOM
   * @param view - Element or array of elements to render
   * @param renderTo - Target element or selector
   * @param options - Render options
   */
  export function render(
    view: BaseElement | BaseElement[],
    renderTo?: HTMLElement | string,
    options?: RenderOptions
  ): void;

  /**
   * Creates a style element with the given content
   * @param content - CSS content
   * @param media - Media query
   * @returns Style element
   */
  export function createStyleElement(
    content?: string,
    media?: string
  ): HTMLStyleElement;

  /**
   * Creates a style sheet
   * @param media - Media query
   * @returns Style sheet
   */
  export function createStyleSheet(media?: string): CSSStyleSheet;

  /**
   * Adds a CSS rule to a style sheet
   * @param sheet - Style sheet
   * @param selector - CSS selector
   * @param rules - CSS rules
   */
  export function addCssRule(
    sheet: CSSStyleSheet,
    selector: string,
    rules: string
  ): void;

  /**
   * Adds styles to the document
   * @param style - CSS string or object
   * @param media - Media query
   */
  export function addStyle(
    style: string | Record<string, Record<string, string | number>>,
    media?: string
  ): void;

  /**
   * Loads CSS from a URL
   * @param path - URL to CSS file
   * @param options - Fetch options
   */
  export function cssLoader(
    path: string,
    options?: RequestInit
  ): Promise<void>;

  /**
   * Loads JavaScript from a URL
   * @param path - URL to JavaScript file
   * @param options - Fetch options
   */
  export function jsLoader(
    path: string,
    options?: RequestInit
  ): Promise<void>;

  /**
   * Loads a view from a URL
   * @param path - URL to view file
   * @param options - Fetch options
   * @param storage - Whether to cache the view in localStorage
   * @returns View content
   */
  export function viewLoader(
    path: string,
    options?: RequestInit,
    storage?: boolean
  ): Promise<any>;

  /**
   * Clears a cached view from localStorage
   * @param path - URL of the view to clear
   */
  export function clearViewStorageHolder(path: string): void;

  /**
   * HTML namespace object containing all elements and utility functions
   */
  export const HTML: {
    extract(ctx?: any): void;
    restore(ctx?: any): void;
    [key: string]: any;
  };

  /**
   * Displays library information in the console
   */
  export function info(): void;

  // HTML Element Classes

  /**
   * Base class for heading elements
   */
  export class Heading extends Tag {}

  /**
   * Base class for list elements
   */
  export class List extends Tag {}

  /**
   * List item element
   */
  export class ListItem extends Tag {}

  /**
   * Table element
   */
  export class Table extends Tag {}

  /**
   * Table caption element
   */
  export class Caption extends Tag {}

  /**
   * Table column element
   */
  export class Col extends SingleTag {}

  /**
   * Table column group element
   */
  export class Colgroup extends Tag {}

  /**
   * Base class for table sections
   */
  export class TableSection extends Tag {}

  /**
   * Base class for table cells
   */
  export class TableCell extends Tag {}

  /**
   * Table row element
   */
  export class TableRow extends Tag {}

  /**
   * Select option group element
   */
  export class OptionGroup extends Tag {}

  /**
   * Select option element
   */
  export class Option extends Tag {}

  // HTML Element Classes (alphabetical)
  export class Abbr extends Tag {}
  export class Address extends Tag {}
  export class Anchor extends Tag {}
  export class Area extends SingleTag {}
  export class Article extends Tag {}
  export class Aside extends Tag {}
  export class AudioTag extends Tag {}
  export class Base extends SingleTag {}
  export class Bdi extends Tag {}
  export class Bdo extends Tag {}
  export class Blockquote extends Tag {}
  export class Body extends Tag {}
  export class Bold extends Tag {}
  export class Br extends SingleTag {}
  export class Button extends Tag {}
  export class Canvas extends Tag {}
  export class Cite extends Tag {}
  export class Code extends Tag {}
  export class Data extends Tag {}
  export class Dd extends Tag {}
  export class Details extends Tag {}
  export class Dfn extends Tag {}
  export class Dialog extends Tag {}
  export class Div extends Tag {}
  export class Dl extends Tag {}
  export class Dt extends Tag {}
  export class Em extends Tag {}
  export class Embed extends SingleTag {}
  export class FigCaption extends Tag {}
  export class Figure extends Tag {}
  export class Footer extends Tag {}
  export class Form extends Tag {}
  export class Frame extends SingleTag {}
  export class Frameset extends Tag {}
  export class Head extends Tag {}
  export class Header extends Tag {}
  export class Hr extends SingleTag {}
  export class Html extends Tag {}
  export class IFrame extends Tag {}
  export class Img extends SingleTag {}
  export class Input extends SingleTag {}
  export class Ins extends Tag {}
  export class Ital extends Tag {}
  export class Kbd extends Tag {}
  export class Label extends Tag {}
  export class Legend extends Tag {}
  export class Link extends SingleTag {}
  export class Main extends Tag {}
  export class Map extends Tag {}
  export class Mark extends Tag {}
  export class Meta extends SingleTag {}
  export class Nav extends Tag {}
  export class NoEmbed extends Tag {}
  export class NoFrames extends Tag {}
  export class NoScript extends Tag {}
  export class Output extends Tag {}
  export class Paragraph extends Tag {}
  export class Picture extends Tag {}
  export class Pre extends Tag {}
  export class Quoted extends Tag {}
  export class Rp extends Tag {}
  export class Rt extends Tag {}
  export class Ruby extends Tag {}
  export class Script extends Tag {}
  export class Section extends Tag {}
  export class Select extends Tag {}
  export class Slot extends Tag {}
  export class Small extends Tag {}
  export class Source extends SingleTag {}
  export class Span extends Tag {}
  export class Strike extends Tag {}
  export class Strong extends Tag {}
  export class Sub extends Tag {}
  export class Summary extends Tag {}
  export class Sup extends Tag {}
  export class Template extends Tag {}
  export class Textarea extends Tag {}
  export class Time extends Tag {}
  export class Title extends Tag {}
  export class Track extends SingleTag {}
  export class Var extends Tag {}
  export class VideoTag extends Tag {}
  export class Wbr extends SingleTag {}

  // HTML Element Functions (alphabetical)
  /**
   * Creates an abbr element
   * @param args - Element options and children
   * @returns Abbr element
   */
  export function abbr(...args: any[]): Abbr;

  /**
   * Creates an address element
   * @param args - Element options and children
   * @returns Address element
   */
  export function address(...args: any[]): Address;

  /**
   * Creates an anchor element
   * @param args - Element options and children
   * @returns Anchor element
   */
  export function anchor(...args: any[]): Anchor;

  /**
   * Creates an anchor element (alias for anchor)
   * @param args - Element options and children
   * @returns Anchor element
   */
  export function a(...args: any[]): Anchor;

  /**
   * Creates an area element
   * @param options - Element options
   * @returns Area element
   */
  export function area(options?: ElementOptions): Area;

  /**
   * Creates an article element
   * @param args - Element options and children
   * @returns Article element
   */
  export function article(...args: any[]): Article;

  /**
   * Creates an aside element
   * @param args - Element options and children
   * @returns Aside element
   */
  export function aside(...args: any[]): Aside;

  /**
   * Creates an audio element
   * @param args - Element options and children
   * @returns AudioTag element
   */
  export function audio(...args: any[]): AudioTag;

  /**
   * Creates a base element
   * @param options - Element options
   * @returns Base element
   */
  export function base(options?: ElementOptions): Base;

  /**
   * Creates a bdi element
   * @param args - Element options and children
   * @returns Bdi element
   */
  export function bdi(...args: any[]): Bdi;

  /**
   * Creates a bdo element
   * @param args - Element options and children
   * @returns Bdo element
   */
  export function bdo(...args: any[]): Bdo;

  /**
   * Creates a blockquote element
   * @param args - Element options and children
   * @returns Blockquote element
   */
  export function blockquote(...args: any[]): Blockquote;

  /**
   * Creates a body element
   * @param args - Element options and children
   * @returns Body element
   */
  export function body(...args: any[]): Body;

  /**
   * Creates a b element
   * @param args - Element options and children
   * @returns Bold element
   */
  export function b(...args: any[]): Bold;

  /**
   * Creates a br element
   * @param options - Element options
   * @returns Br element
   */
  export function br(options?: ElementOptions): Br;

  /**
   * Creates a button element
   * @param args - Element options and children
   * @returns Button element
   */
  export function button(...args: any[]): Button;

  /**
   * Creates a canvas element
   * @param args - Element options and children
   * @returns Canvas element
   */
  export function canvas(...args: any[]): Canvas;

  /**
   * Creates a caption element
   * @param args - Element options and children
   * @returns Caption element
   */
  export function caption(...args: any[]): Caption;

  /**
   * Creates a cite element
   * @param args - Element options and children
   * @returns Cite element
   */
  export function cite(...args: any[]): Cite;

  /**
   * Creates a code element
   * @param args - Element options and children
   * @returns Code element
   */
  export function code(...args: any[]): Code;

  /**
   * Creates a col element
   * @param options - Element options
   * @returns Col element
   */
  export function col(options?: ElementOptions): Col;

  /**
   * Creates a colgroup element
   * @param args - Element options and children
   * @returns Colgroup element
   */
  export function colgroup(...args: any[]): Colgroup;

  /**
   * Creates a data element
   * @param args - Element options and children
   * @returns Data element
   */
  export function data(...args: any[]): Data;

  /**
   * Creates a dd element
   * @param args - Element options and children
   * @returns Dd element
   */
  export function dd(...args: any[]): Dd;

  /**
   * Creates a details element
   * @param args - Element options and children
   * @returns Details element
   */
  export function details(...args: any[]): Details;

  /**
   * Creates a dfn element
   * @param args - Element options and children
   * @returns Dfn element
   */
  export function dfn(...args: any[]): Dfn;

  /**
   * Creates a dialog element
   * @param args - Element options and children
   * @returns Dialog element
   */
  export function dialog(...args: any[]): Dialog;

  /**
   * Creates a div element
   * @param args - Element options and children
   * @returns Div element
   */
  export function div(...args: any[]): Div;

  /**
   * Creates a dl element
   * @param args - Element options and children
   * @returns Dl element
   */
  export function dl(...args: any[]): Dl;

  /**
   * Creates a dt element
   * @param args - Element options and children
   * @returns Dt element
   */
  export function dt(...args: any[]): Dt;

  /**
   * Creates an em element
   * @param args - Element options and children
   * @returns Em element
   */
  export function em(...args: any[]): Em;

  /**
   * Creates an embed element
   * @param options - Element options
   * @returns Embed element
   */
  export function embed(options?: ElementOptions): Embed;

  /**
   * Creates a figcaption element
   * @param args - Element options and children
   * @returns FigCaption element
   */
  export function figcaption(...args: any[]): FigCaption;

  /**
   * Creates a figure element
   * @param args - Element options and children
   * @returns Figure element
   */
  export function figure(...args: any[]): Figure;

  /**
   * Creates a footer element
   * @param args - Element options and children
   * @returns Footer element
   */
  export function footer(...args: any[]): Footer;

  /**
   * Creates a form element
   * @param args - Element options and children
   * @returns Form element
   */
  export function form(...args: any[]): Form;

  /**
   * Creates a frame element
   * @param options - Element options
   * @returns Frame element
   */
  export function frame(options?: ElementOptions): Frame;

  /**
   * Creates a frameset element
   * @param args - Element options and children
   * @returns Frameset element
   */
  export function frameset(...args: any[]): Frameset;

  /**
   * Creates an h1 element
   * @param args - Element options and children
   * @returns Heading element
   */
  export function h1(...args: any[]): Heading;

  /**
   * Creates an h2 element
   * @param args - Element options and children
   * @returns Heading element
   */
  export function h2(...args: any[]): Heading;

  /**
   * Creates an h3 element
   * @param args - Element options and children
   * @returns Heading element
   */
  export function h3(...args: any[]): Heading;

  /**
   * Creates an h4 element
   * @param args - Element options and children
   * @returns Heading element
   */
  export function h4(...args: any[]): Heading;

  /**
   * Creates an h5 element
   * @param args - Element options and children
   * @returns Heading element
   */
  export function h5(...args: any[]): Heading;

  /**
   * Creates an h6 element
   * @param args - Element options and children
   * @returns Heading element
   */
  export function h6(...args: any[]): Heading;

  /**
   * Creates a head element
   * @param args - Element options and children
   * @returns Head element
   */
  export function head(...args: any[]): Head;

  /**
   * Creates a header element
   * @param args - Element options and children
   * @returns Header element
   */
  export function header(...args: any[]): Header;

  /**
   * Creates an hr element
   * @param options - Element options
   * @returns Hr element
   */
  export function hr(options?: ElementOptions): Hr;

  /**
   * Creates an html element
   * @param args - Element options and children
   * @returns Html element
   */
  export function html(...args: any[]): Html;

  /**
   * Creates an i element
   * @param args - Element options and children
   * @returns Ital element
   */
  export function i(...args: any[]): Ital;

  /**
   * Creates an iframe element
   * @param args - Element options and children
   * @returns IFrame element
   */
  export function iframe(...args: any[]): IFrame;

  /**
   * Creates an img element
   * @param options - Element options
   * @returns Img element
   */
  export function img(options?: ElementOptions): Img;

  /**
   * Creates an input element
   * @param options - Element options
   * @returns Input element
   */
  export function input(options?: ElementOptions): Input;

  /**
   * Creates an ins element
   * @param args - Element options and children
   * @returns Ins element
   */
  export function ins(...args: any[]): Ins;

  /**
   * Creates an i element (alias for i)
   * @param args - Element options and children
   * @returns Ital element
   */
  export function ital(...args: any[]): Ital;

  /**
   * Creates a kbd element
   * @param args - Element options and children
   * @returns Kbd element
   */
  export function kbd(...args: any[]): Kbd;

  /**
   * Creates a label element
   * @param args - Element options and children
   * @returns Label element
   */
  export function label(...args: any[]): Label;

  /**
   * Creates a legend element
   * @param args - Element options and children
   * @returns Legend element
   */
  export function legend(...args: any[]): Legend;

  /**
   * Creates a li element
   * @param args - Element options and children
   * @returns ListItem element
   */
  export function li(...args: any[]): ListItem;

  /**
   * Creates a link element
   * @param options - Element options
   * @returns Link element
   */
  export function link(options?: ElementOptions): Link;

  /**
   * Creates a main element
   * @param args - Element options and children
   * @returns Main element
   */
  export function main(...args: any[]): Main;

  /**
   * Creates a map element
   * @param args - Element options and children
   * @returns Map element
   */
  export function map(...args: any[]): Map;

  /**
   * Creates a mark element
   * @param args - Element options and children
   * @returns Mark element
   */
  export function mark(...args: any[]): Mark;

  /**
   * Creates a meta element
   * @param options - Element options
   * @returns Meta element
   */
  export function meta(options?: ElementOptions): Meta;

  /**
   * Creates a nav element
   * @param args - Element options and children
   * @returns Nav element
   */
  export function nav(...args: any[]): Nav;

  /**
   * Creates a noembed element
   * @param args - Element options and children
   * @returns NoEmbed element
   */
  export function noembed(...args: any[]): NoEmbed;

  /**
   * Creates a noframes element
   * @param args - Element options and children
   * @returns NoFrames element
   */
  export function noframes(...args: any[]): NoFrames;

  /**
   * Creates a noscript element
   * @param args - Element options and children
   * @returns NoScript element
   */
  export function noscript(...args: any[]): NoScript;

  /**
   * Creates an ol element
   * @param args - Element options and children
   * @returns List element
   */
  export function ol(...args: any[]): List;

  /**
   * Creates an option element
   * @param args - Element options and children
   * @returns Option element
   */
  export function option(...args: any[]): Option;

  /**
   * Creates an optgroup element
   * @param args - Element options and children
   * @returns OptionGroup element
   */
  export function optgroup(...args: any[]): OptionGroup;

  /**
   * Creates an output element
   * @param args - Element options and children
   * @returns Output element
   */
  export function output(...args: any[]): Output;

  /**
   * Creates a p element
   * @param args - Element options and children
   * @returns Paragraph element
   */
  export function p(...args: any[]): Paragraph;

  /**
   * Creates a picture element
   * @param args - Element options and children
   * @returns Picture element
   */
  export function picture(...args: any[]): Picture;

  /**
   * Creates a pre element
   * @param args - Element options and children
   * @returns Pre element
   */
  export function pre(...args: any[]): Pre;

  /**
   * Creates a q element
   * @param args - Element options and children
   * @returns Quoted element
   */
  export function q(...args: any[]): Quoted;

  /**
   * Creates a q element (alias for q)
   * @param args - Element options and children
   * @returns Quoted element
   */
  export function quoted(...args: any[]): Quoted;

  /**
   * Creates an rp element
   * @param args - Element options and children
   * @returns Rp element
   */
  export function rp(...args: any[]): Rp;

  /**
   * Creates an rt element
   * @param args - Element options and children
   * @returns Rt element
   */
  export function rt(...args: any[]): Rt;

  /**
   * Creates a ruby element
   * @param args - Element options and children
   * @returns Ruby element
   */
  export function ruby(...args: any[]): Ruby;

  /**
   * Creates an s element
   * @param args - Element options and children
   * @returns Strike element
   */
  export function s(...args: any[]): Strike;

  /**
   * Creates a script element
   * @param args - Element options and children
   * @returns Script element
   */
  export function script(...args: any[]): Script;

  /**
   * Creates a section element
   * @param args - Element options and children
   * @returns Section element
   */
  export function section(...args: any[]): Section;

  /**
   * Creates a select element
   * @param args - Element options and children
   * @returns Select element
   */
  export function select(...args: any[]): Select;

  /**
   * Creates a slot element
   * @param args - Element options and children
   * @returns Slot element
   */
  export function slot(...args: any[]): Slot;

  /**
   * Creates a small element
   * @param args - Element options and children
   * @returns Small element
   */
  export function small(...args: any[]): Small;

  /**
   * Creates a source element
   * @param options - Element options
   * @returns Source element
   */
  export function source(options?: ElementOptions): Source;

  /**
   * Creates a span element
   * @param args - Element options and children
   * @returns Span element
   */
  export function span(...args: any[]): Span;

  /**
   * Creates an s element (alias for s)
   * @param args - Element options and children
   * @returns Strike element
   */
  export function strike(...args: any[]): Strike;

  /**
   * Creates a strong element
   * @param args - Element options and children
   * @returns Strong element
   */
  export function strong(...args: any[]): Strong;

  /**
   * Creates a sub element
   * @param args - Element options and children
   * @returns Sub element
   */
  export function sub(...args: any[]): Sub;

  /**
   * Creates a summary element
   * @param args - Element options and children
   * @returns Summary element
   */
  export function summary(...args: any[]): Summary;

  /**
   * Creates a sup element
   * @param args - Element options and children
   * @returns Sup element
   */
  export function sup(...args: any[]): Sup;

  /**
   * Creates a table element
   * @param args - Element options and children
   * @returns Table element
   */
  export function table(...args: any[]): Table;

  /**
   * Creates a tbody element
   * @param args - Element options and children
   * @returns TableSection element
   */
  export function tbody(...args: any[]): TableSection;

  /**
   * Creates a td element
   * @param args - Element options and children
   * @returns TableCell element
   */
  export function td(...args: any[]): TableCell;

  /**
   * Creates a template element
   * @param args - Element options and children
   * @returns Template element
   */
  export function template(...args: any[]): Template;

  /**
   * Creates a textarea element
   * @param args - Element options and children
   * @returns Textarea element
   */
  export function textarea(...args: any[]): Textarea;

  /**
   * Creates a tfoot element
   * @param args - Element options and children
   * @returns TableSection element
   */
  export function tfoot(...args: any[]): TableSection;

  /**
   * Creates a th element
   * @param args - Element options and children
   * @returns TableCell element
   */
  export function th(...args: any[]): TableCell;

  /**
   * Creates a thead element
   * @param args - Element options and children
   * @returns TableSection element
   */
  export function thead(...args: any[]): TableSection;

  /**
   * Creates a time element
   * @param args - Element options and children
   * @returns Time element
   */
  export function time(...args: any[]): Time;

  /**
   * Creates a title element
   * @param args - Element options and children
   * @returns Title element
   */
  export function title(...args: any[]): Title;

  /**
   * Creates a tr element
   * @param args - Element options and children
   * @returns TableRow element
   */
  export function tr(...args: any[]): TableRow;

  /**
   * Creates a track element
   * @param options - Element options
   * @returns Track element
   */
  export function track(options?: ElementOptions): Track;

  /**
   * Creates a ul element
   * @param args - Element options and children
   * @returns List element
   */
  export function ul(...args: any[]): List;

  /**
   * Creates a var element
   * @param args - Element options and children
   * @returns Var element
   */
  export function variable(...args: any[]): Var;

  /**
   * Creates a video element
   * @param args - Element options and children
   * @returns VideoTag element
   */
  export function video(...args: any[]): VideoTag;

  /**
   * Creates a wbr element
   * @param options - Element options
   * @returns Wbr element
   */
  export function wbr(options?: ElementOptions): Wbr;
}