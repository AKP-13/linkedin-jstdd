import { expect } from "chai";
import { isAnagram } from "./anagrams";

// Function that accepts two strings and tells you whether theyre anagrams of eachother
describe("isAnagram - basic functionality", () => {
    it("returns true if the two words contain the same letters", () => {
        const actual = isAnagram("silent", "listen");
        expect(actual).to.equal(true);
    });

    it("returns false if the words are of different lengths", () => {
        const actual = isAnagram("true", "false");
        expect(actual).to.equal(false);
    });
});

// they must have the same letters in the same quantities

// ignore spaces

// ignore caps
