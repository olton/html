import {describe, it, expect} from "@olton/latte";
import {abbr} from "../src/elements/index.js";



describe('abbr', () => {
    it('should create an abbr element with title', () => {
        const element = abbr('text', {title: 'title'}).toElement();
        expect(element.tagName).toBe('ABBR');
        expect(element.getAttribute('title')).toBe('title');
        expect(element.textContent).toBe('text');
    });

    it('should create an abbr element without title', () => {
        const element = abbr('text').toElement();
        expect(element.tagName).toBe('ABBR');
        expect(element.getAttribute('title')).toBeNull();
        expect(element.textContent).toBe('text');
    });
})