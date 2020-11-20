import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - basic functionality", () => {
    it("returns true if the two words contain the same letters", () => {
        const actual = isAnagram("silent", "listen");
        expect(actual).to.equal(true);
    });

    it("returns false if the words are of different lengths", () => {
        const actual = isAnagram("true", "false");
        expect(actual).to.equal(false);
    });

    it("returns false if the words are the same length but contain different nunmbers of letters", () => {
        const actual = isAnagram("no", "oo");
        expect(actual).to.equal(false);
    });

    it("it works regardless of spaces", () => {
        const actual = isAnagram("conversation", "voices rant on");
        expect(actual).to.equal(true);
    });

    it("it works regardless of capital letters", () => {
        const actual = isAnagram("yes", "YES");
        expect(actual).to.equal(true);
    });
});

// ignore caps
