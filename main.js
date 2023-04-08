console.log('Hello Node + JS');
const prompt=require("prompt-sync")({sigint:true}); 


let choice = prompt("Введіть число:");
choice = parseFloat(choice);

switch (choice) {
    case 1:
        const str = "Це речення для прикладу";
        const wordsArray = splitStringToWords(str);
        console.log(wordsArray);
        break;
    case 2:
        const permutations = getPermutations("абв");
        break;
    case 3:
        const n = 5;
        const result = factorial(n);
        console.log(result);
        break;
    case 4:
        const arr = [1, 2, 3, 2, 3, 3, 4, 5, 4, 4, 4];
        const mostFrequent = mostFrequentElement(arr);
        console.log(mostFrequent);
        break;
    case 5:
        const days = daysInMonth(2, 2023);
        console.log(days);
        break;
    case 6:
        const arr_2 = [5, 2, 7, 3, 9, 1, 4, 6, 8];
        const sortedArr = quickSort(arr_2);
        console.log(sortedArr);
        break;
    default:
        alert( "Немає таких значень" );
}