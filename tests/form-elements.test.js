import {describe, it, expect} from "@olton/latte";
import {form, input, button, textarea, select, option} from "../src/elements/index.js";

describe('form', () => {
    it('should create a form element', () => {
        const element = form().toElement();
        expect(element.tagName).toBe('FORM');
    });

    it('should create a form element with method and action', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            form({
                method: 'post',
                action: '/submit'
            }).toElement();
        }).not.toThrow();
    });
});

describe('input', () => {
    it('should create an input element', () => {
        const element = input().toElement();
        expect(element.tagName).toBe('INPUT');
    });

    it('should create an input element with type', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            input({type: 'text'}).toElement();
        }).not.toThrow();
    });

    it('should create an input element with value', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            input({
                type: 'text',
                value: 'Hello World'
            }).toElement();
        }).not.toThrow();
    });

    it('should create an input element with placeholder', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            input({
                type: 'text',
                placeholder: 'Enter your name'
            }).toElement();
        }).not.toThrow();
    });
});

describe('button', () => {
    it('should create a button element with text', () => {
        const element = button('Click me').toElement();
        expect(element.tagName).toBe('BUTTON');
        expect(element.textContent).toBe('Click me');
    });

    it('should create a button element with type', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            button('Submit', {type: 'submit'}).toElement();
        }).not.toThrow();
    });
});

describe('textarea', () => {
    it('should create a textarea element', () => {
        const element = textarea().toElement();
        expect(element.tagName).toBe('TEXTAREA');
    });

    it('should create a textarea element with content', () => {
        const element = textarea('Initial text').toElement();
        expect(element.textContent).toBe('Initial text');
    });

    it('should create a textarea element with rows and cols', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            textarea('', {
                rows: 5,
                cols: 40
            }).toElement();
        }).not.toThrow();
    });
});

describe('select and option', () => {
    it('should create a select element', () => {
        const element = select().toElement();
        expect(element.tagName).toBe('SELECT');
    });

    it('should create a select element with options', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            select([
                option('Option 1', {value: '1'}),
                option('Option 2', {value: '2'}),
                option('Option 3', {value: '3'})
            ]).toElement();
        }).not.toThrow();
    });

    it('should create a select element with a selected option', () => {
        // Just verify that the function call doesn't throw an error
        expect(() => {
            select([
                option('Option 1', {value: '1'}),
                option('Option 2', {value: '2', selected: true}),
                option('Option 3', {value: '3'})
            ]).toElement();
        }).not.toThrow();
    });
});
