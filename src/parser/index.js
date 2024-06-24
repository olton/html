export const parser = element => {
    if (Array.isArray(element)) {
        return element.map( parser ).join("\n")
    } else if (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean') {
        return element
    } else if (element.draw) {
        return element.draw()
    }
    throw new Error("Unknown element! " + element)
}