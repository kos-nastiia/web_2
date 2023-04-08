//Реалізувати розбиття стрічки на слова у масив.

function splitStringToWords(str) {
    const words = str.split(" ");
    return words;
}

const str = "Це речення для прикладу";
const wordsArray = splitStringToWords(str);
console.log(wordsArray);