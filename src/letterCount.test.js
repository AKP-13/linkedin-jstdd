import { expect } from "chai";
import { getLetterCount } from "./letterCount";

describe("getLetterCount - basic functionality", () => {
    it("returns an empty object when given an empty string", () => {
        const expected = {};
        const actual = getLetterCount("");
        expect(actual).to.deep.equal(expected);
    });

    it("returns the correct letter count for a word containing only one of each letter", () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCount("cat");
        expect(actual).to.deep.equal(expected);
    });

    it("returns the correct letter count for words with letters that appear more than once", () => {
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual = getLetterCount("mississippi");
        expect(actual).to.deep.equal(expected);
    });
});
