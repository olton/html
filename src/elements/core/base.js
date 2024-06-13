import {dashedName} from "../../helpers/dashed-name.js";
import {setClasses} from "../../helpers/set-classes.js";
import {setStyles} from "../../helpers/set-styles.js";
import {globalAttributes} from "../../helpers/global-attributes.js"
import {htmlParser} from "../../helpers/html-parser.js";
import {eventsList} from "../../helpers/events.js";

export default class BaseElement {
    constructor(options = {}) {
        this.options = options
        this.tag = "div"
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
            service = ["className", "style", "data", "tag", "events"]

        for(let key in this.options) {
            if (service.includes(key))
                continue

            if ( single.includes(key) && this.options[key] === true ) {
                attr.push(key)
                continue
            }

            if ( (this.selfAttributes().includes(key) && !attr.includes(key)) || globalAttributes.includes(key) ) {
                attr.push(`${key}="${this.options[key]}"`)
            }
        }

        if (this.classes) attr.push(`class="${this.classes}"`)
        if (this.styles) attr.push(`style="${this.styles}"`)
        if (this.dataSet) attr.push(this.dataSet)
        if (this.aria) attr.push(this.aria)

        return attr
    }

    draw(){
        return this.template()
    }

    get dataSet(){
        const {data = {}} = this.options
        let _ = []

        for(let key in data) {
            _.push(`data-${dashedName(key)}="${data[key]}"`)
        }

        return _.join(" ")
    }

    get aria(){
        const {aria = {}} = this.options
        let _ = []

        for(let key in aria) {
            _.push(`aria-${key.toLowerCase()}="${aria[key]}"`)
        }

        return _.join(" ")
    }

    get events(){
        const {events = {}, control = true} = this.options
        let eventsArray = []

        for(let key in events) {
            if (control && !eventsList.includes(key)) {
                console.info(`Event ${key} for element ${this.tag} not specified in HTML specification`)
            }
            eventsArray.push(`${key.toLowerCase()}="${events[key]}"`)
        }

        return eventsArray.join(" ")
    }

    get classes(){
        return setClasses(this.options.class)
    }

    get styles(){
        return setStyles(this.options.style)
    }

    template(){
        return ``
    }

    toString(){
        return this.draw()
    }

    toElement(){
        return htmlParser(this.draw())
    }
}