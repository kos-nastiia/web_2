//Написати реалізацію швидкого сортування масиву

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
        }
        return quickSort(left).concat(pivot, quickSort(right));
    }
}

const arr = [5, 2, 7, 3, 9, 1, 4, 6, 8];
const sortedArr = quickSort(arr);
console.log(sortedArr);