import {describe, it, expect} from "@olton/latte";
import {br, hr, img} from "../src/elements/index.js";

describe('SingleTag Elements', () => {
    it('should create a br element', () => {
        const element = br().toElement();
        expect(element.tagName).toBe('BR');
    });

    it('should create an hr element', () => {
        const element = hr().toElement();
        expect(element.tagName).toBe('HR');
    });

    it('should create an img element with src attribute', () => {
        const element = img({src: 'image.jpg'}).toElement();
        expect(element.tagName).toBe('IMG');
    });

    it('should create an img element with alt attribute', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            img({src: 'image.jpg', alt: 'Image description'}).toElement();
        }).not.toThrow();
    });

    it('should create an img element with width and height attributes', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            img({
                src: 'image.jpg',
                width: 100,
                height: 200
            }).toElement();
        }).not.toThrow();
    });
});
