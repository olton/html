import BaseElement from "./base.js";

export default class SingleTag extends BaseElement {
    constructor(options = {}) {
        super(options)
        this.options = options
    }

    template(){
        const tag = this.options.tag ? this.options.tag : this.tag

        return `
            <${tag} ${this.attributes} ${this.events}/>
        `
    }
}