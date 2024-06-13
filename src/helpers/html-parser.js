export const htmlParser = (str) => {
    let base, singleTag, result = [], ctx, _context;
    let regexpSingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // eslint-disable-line

    if (typeof str !== "string") {
        return undefined;
    }

    str = str.trim()

    ctx = document.implementation.createHTMLDocument("");
    base = ctx.createElement( "base" );
    base.href = document.location.href;
    ctx.head.appendChild( base );
    _context = ctx.body;

    singleTag = regexpSingleTag.exec(str);
    if (singleTag) {
        return document.createElement(singleTag[1])
    } else {
        _context.innerHTML = str;
        for(let i = 0; i < _context.childNodes.length; i++) {
            result.push(_context.childNodes[i]);
        }
    }

    return result[0];
};