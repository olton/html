import {describe, it, expect} from "@olton/latte";
import {createStyleElement, createStyleSheet, addCssRule, addStyle} from "../src/style/index.js";

describe('createStyleElement', () => {
    it('should be a function', () => {
        expect(typeof createStyleElement).toBe('function');
    });

    it('should accept content and media parameters', () => {
        expect(() => {
            createStyleElement('body { color: red; }', 'screen');
        }).not.toThrow();
    });
});

describe('createStyleSheet', () => {
    it('should be a function', () => {
        expect(typeof createStyleSheet).toBe('function');
    });

    it('should accept a media parameter', () => {
        expect(() => {
            createStyleSheet('print');
        }).not.toThrow();
    });
});

describe('addCssRule', () => {
    it('should be a function', () => {
        expect(typeof addCssRule).toBe('function');
    });

    it('should accept sheet, selector, and rules parameters', () => {
        const mockSheet = {
            insertRule: () => {}
        };

        expect(() => {
            addCssRule(mockSheet, '.test-class', 'color: green;');
        }).not.toThrow();
    });
});

describe('addStyle', () => {
    it('should be a function', () => {
        expect(typeof addStyle).toBe('function');
    });

    it('should accept a style string', () => {
        expect(() => {
            addStyle('body { margin: 0; }');
        }).not.toThrow();
    });

    it('should accept a style object', () => {
        expect(() => {
            addStyle({
                '.test-class': {
                    color: 'blue',
                    fontWeight: 'bold'
                }
            });
        }).not.toThrow();
    });
});
