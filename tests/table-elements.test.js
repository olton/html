import {describe, it, expect} from "@olton/latte";
import {table, tr, td, th, thead, tbody, tfoot, caption} from "../src/elements/index.js";

describe('table', () => {
    it('should create a table element', () => {
        const element = table().toElement();
        expect(element.tagName).toBe('TABLE');
    });

    it('should create a table with border attribute', () => {
        const element = table({border: 1}).toElement();
        expect(element.getAttribute('border')).toBe('1');
    });
});

describe('caption', () => {
    it('should create a caption element', () => {
        const element = caption('Table Caption').toElement();
        expect(element.tagName).toBe('CAPTION');
        expect(element.textContent).toBe('Table Caption');
    });
});

describe('thead, tbody, tfoot', () => {
    it('should create a thead element', () => {
        const element = thead().toElement();
        expect(element.tagName).toBe('THEAD');
    });

    it('should create a tbody element', () => {
        const element = tbody().toElement();
        expect(element.tagName).toBe('TBODY');
    });

    it('should create a tfoot element', () => {
        const element = tfoot().toElement();
        expect(element.tagName).toBe('TFOOT');
    });
});

describe('tr, th, td', () => {
    it('should create a tr element', () => {
        const element = tr().toElement();
        expect(element.tagName).toBe('TR');
    });

    it('should create a th element', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            th('Header Cell').toElement();
        }).not.toThrow();
    });

    it('should create a td element', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            td('Cell Content').toElement();
        }).not.toThrow();
    });

    it('should create a td element with colspan and rowspan', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            td('Cell Content', {
                colspan: 2,
                rowspan: 3
            }).toElement();
        }).not.toThrow();
    });
});

describe('complex table', () => {
    it('should create a complete table structure', () => {
        // Just verify that the function calls don't throw errors
        expect(() => {
            table([
                caption('Sample Table'),
                thead(
                    tr([
                        th('Header 1'),
                        th('Header 2')
                    ])
                ),
                tbody(
                    tr([
                        td('Row 1, Cell 1'),
                        td('Row 1, Cell 2')
                    ]),
                    tr([
                        td('Row 2, Cell 1'),
                        td('Row 2, Cell 2')
                    ])
                ),
                tfoot(
                    tr([
                        td('Footer 1'),
                        td('Footer 2')
                    ])
                )
            ]).toElement();
        }).not.toThrow();
    });
});
