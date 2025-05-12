import {describe, it, expect} from "@olton/latte";
import {div, h1, a} from "../src/elements/index.js";

describe('HTML Elements', () => {
    it('should create a div element with content', () => {
        const element = div('content').toElement();
        expect(element.tagName).toBe('DIV');
        expect(element.textContent).toBe('content');
    });

    it('should create a div element with attributes', () => {
        const element = div('', {title: 'title'}).toElement();
        expect(element.tagName).toBe('DIV');
        expect(element.getAttribute('title')).toBe('title');
    });

    it('should create an h1 element', () => {
        const element = h1('Heading 1').toElement();
        expect(element.tagName).toBe('H1');
        expect(element.textContent).toBe('Heading 1');
    });

    it('should create an anchor element with href', () => {
        const element = a('Link', {href: 'https://example.com'}).toElement();
        expect(element.tagName).toBe('A');
        expect(element.textContent).toBe('Link');
        expect(element.getAttribute('href')).toBe('https://example.com');
    });
});
