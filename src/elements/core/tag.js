import {parser} from "../../parser/index.js"
import BaseElement from "./base.js";

export default class Tag extends BaseElement {
    constructor(...args) {
        let options = {}
        let children = []
        for(let a of args) {
            if (typeof a === "object" && !(a instanceof BaseElement)) {
                options = a
            } else {
                children.push(a)
            }
        }
        super(options)
        this.children = children
    }

    template(content){
        const tag = this.options.tag ? this.options.tag : this.tag
        return `
            <${tag} ${this.attributes} ${this.events}>${content}</${tag}>
        `
    }

    draw(){
        return this.template(this.children.map( parser ).join(""))
    }
}