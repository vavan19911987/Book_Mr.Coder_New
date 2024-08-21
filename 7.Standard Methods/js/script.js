'use strict'

// Возведите 2 в 10 степень.
// let a = 2;
// let b = 10;
// console.log(Math.pow(a,b));


// Найдите квадратный корень из 245.
// let x = 245;
// console.log(Math.floor(Math.sqrt(x)));



// Дан следующий массив:
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let arr = [4, 2, 5, 19, 13, 0, 10]
// let sumCube = 0;
// for (let number of arr) {
//     sumCube += Math.pow(number, 3)
// }
// let res = Math.floor(Math.sqrt(sumCube))
// console.log(res);

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let number = 379;
// console.log(Math.round(Math.sqrt(number)));
// console.log(+Math.sqrt(number).toFixed(1));
// console.log(+Math.sqrt(number).toFixed(2));

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// let num = 587;
// let number = Math.sqrt(num);
// let obj = {};
// let floor = Math.floor(number);
// obj.floor = floor;
// let ceil = Math.ceil(number);
// obj.ceil = ceil;
// console.log(obj);

// function getRandomArbitary(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let res = getRandomArbitary(2,5);
// console.log(res)


// Выведите на экран случайное целое число от 1 до 100.

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let resRandom = getRandomInt(1, 100);
// console.log(resRandom);

// С помощью цикла заполните массив 10-ю случайными целыми числами.
// let arr =[];
// function getRandomInt(size, min, max) {
//     for (let i = 1; i <= size; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
//     }
// }
// getRandomInt(10,0,100);
// console.log(arr);


// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a = 5;
// let b = 10;
// let res = Math.abs(a - b);
// console.log(res);

// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// let str = 'я учу javascript!';
// console.log(str.substr(2, 3) + str.substr(5));
// console.log(str.substring(2, 5) + str.substring(5));
// console.log(str.slice(2, 5) + str.slice(5));

// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.

// let elem = '-';
// let str = '1-2-3-4-5';
// while (str.includes(elem)) {
//     str = str.replace(elem, '.');
// }
// console.log(str);








