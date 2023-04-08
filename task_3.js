//Написати функцію, яка порахує факторіал натурального числа

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
      return n * factorial(n - 1);
    }
}

const n = 5;
const result = factorial(n);
console.log(result);