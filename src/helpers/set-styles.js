import {dashedName} from "./dashed-name.js";
import {numProps} from "./num-props.js"

export function setStyles(src = {}){
    return Object.keys( src ).map( key => {
        const propName = dashedName(key)
        let propVal = src[key]

        if (!numProps.includes(propName) && !isNaN(propVal)) {
            propVal += 'px'
        }

        return `${propName}: ${propVal}`
    } ).join(";")
}
