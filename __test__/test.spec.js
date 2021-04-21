import checkForUrl from '../src/client/js/urlChecker.js';
import { handleSubmit } from "../src/client/js/formHandler.js";

describe('Test "checkForUrl()" is exist', ()=>{
    const checkForUrlFunction = jest.fn(checkForUrl)
    it('It must return right',() => {
        expect(checkForUrlFunction).toBeDefined();
    });
});

describe('Test "checkForUrl()" is a function', ()=>{
    it('It must be function', () => {
        const checkForUrlFunction = jest.fn(checkForUrl)
        expect(typeof checkForUrlFunction).toBe("function");
    });
});

describe("Testing the submit functionality", () => {
    test("Testing the submit functionality", () => {
        expect(handleSubmit).toBeDefined();
      });
    });

