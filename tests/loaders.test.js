import {describe, it, expect} from "@olton/latte";
import {cssLoader, jsLoader} from '../src/index.js';

const cssPath = 'https://cdn.metroui.org.ua/current/metro.css';
const jsPath = 'https://cdn.metroui.org.ua/current/metro.js';

describe('cssLoader', () => {
    it('should be a function', () => {
        expect(typeof cssLoader).toBe('function');
    });

    it('should be async', () => {
        const result = cssLoader(cssPath);
        expect(result instanceof Promise).toBe(true);
    });

    it('should accept a path and options parameters', () => {
        // Just verify the function signature without making actual requests
        const path = cssPath;
        const options = {
            credentials: 'include',
            headers: {
                'X-Custom-Header': 'test'
            }
        };

        // This should not throw an error
        expect(() => {
            cssLoader(path, options);
        }).not.toThrow();
    });
});

describe('jsLoader', () => {
    it('should be a function', () => {
        expect(typeof jsLoader).toBe('function');
    });

    it('should be async', () => {
        const result = jsLoader(jsPath);
        expect(result instanceof Promise).toBe(true);
    });

    it('should accept a path and options parameters', () => {
        // Just verify the function signature without making actual requests
        const path = jsPath;
        const options = {
            credentials: 'include',
            headers: {
                'X-Custom-Header': 'test'
            }
        };

        // This should not throw an error
        expect(() => {
            jsLoader(path, options);
        }).not.toThrow();
    });
});
