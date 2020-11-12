export const getLetterCount = (string) => {
    const letters = string.toLowerCase().split(" ").join("").split("");
    let letterCount = {};

    letters.forEach((letter) => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1;
        } else {
            letterCount[letter] += 1;
        }
    });

    return letterCount;
};

getLetterCount("Hello everyone");
