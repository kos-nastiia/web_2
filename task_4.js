//Знайти елемент із найбільшою частотою повторень

function mostFrequentElement(arr) {
    const counter = {};
    let maxCount = 0;
    let mostFrequent;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        counter[element] = (counter[element] || 0) + 1;
        if (counter[element] > maxCount) {
        maxCount = counter[element];
        mostFrequent = element;
        }
    }

    return mostFrequent;
}

const arr = [1, 2, 3, 2, 3, 3, 4, 5, 4, 4, 4];
const mostFrequent = mostFrequentElement(arr);
console.log(mostFrequent);