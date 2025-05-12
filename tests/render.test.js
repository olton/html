import {describe, it, expect} from "@olton/latte";
import {render} from '../src/index.js';
import {div} from "../src/elements/index.js";

describe('Render', () => {
    it('should have a render function', () => {
        expect(typeof render).toBe('function');
    });

    it('should accept elements and a target', () => {
        // This test just verifies the function signature without actually rendering
        const element = div('Test content');
        const target = document.createElement('div');

        // This should not throw an error
        expect(() => {
            render(element, target);
        }).not.toThrow();
    });

    it('should accept an array of elements', () => {
        // This test just verifies the function signature without actually rendering
        const elements = [
            div('First div'),
            div('Second div')
        ];
        const target = document.createElement('div');

        // This should not throw an error
        expect(() => {
            render(elements, target);
        }).not.toThrow();
    });

    it('should accept options', () => {
        // This test just verifies the function signature without actually rendering
        const element = div('Test content');
        const target = document.createElement('div');
        const options = {clear: false, where: 'afterbegin'};

        // This should not throw an error
        expect(() => {
            render(element, target, options);
        }).not.toThrow();
    });
});
