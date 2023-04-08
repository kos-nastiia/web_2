//Написати функцію, яка поверне кількість днів для заданого місяця та року.

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const days = daysInMonth(3, 2023);
console.log(days);