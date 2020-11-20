var _ = require("lodash");
import { getLetterCount } from "./letterCount";

export const isAnagram = (string1, string2) => {
    let countOne = getLetterCount(string1);
    let countTwo = getLetterCount(string2);

    if (_.isEqual(countOne, countTwo)) {
        return true;
    } else {
        return false;
    }
};
