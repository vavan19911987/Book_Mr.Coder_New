'use strict'

// ? Дано число num с неким начальным значением.
// ? Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// ? Какое число получится? Посчитайте количество итераций, необходимых для этого.

// let num = 999;
// let i = 1;
// while(num < 1000) {
//     num *= 3;
//     i++;
// }
//
// console.log(num);
// console.log(i);

// ? Дан следующий массив:
// ? Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 3 && arr[i] <= 10) {
//         console.log(arr[i]);
//     }
// }

// ? Дан следующий объект:
// ? Выведите в консоль те элементы объекта, значения которых - нечетные числа.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// };
// let keys = Object.values(obj);
// for (let i = 0; i < keys.length; i++) {
//     if (keys[i] % 2 === 1) {
//         console.log(keys[i]);
//     }
// }

// let keys = Object.keys(obj); // Получаем массив ключей объекта
//
// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     if (obj[key] % 2 !== 0) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// let sum = 0
// let counter = 0
// for (let i = 0; i <= 100; i++) {
//     sum += i
//     if (sum > 100){
//         counter = i
//         break;
//     }
// }
// console.log(counter)
// console.log(sum)


// ? С помощью двух вложенных циклов выведите на экран следующую строку:
// ? 11 12 13 21 22 23 31 32 33

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i + '' +  j + '\n')
    }
}




















