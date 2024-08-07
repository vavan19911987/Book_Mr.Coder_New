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

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i + '' +  j + '\n')
//     }
// }

// ? Даны два массива: первый с названиями дней недели,
// ? а второй - с их порядковыми номерами:
// * С помощью цикла создайте объект, ключами которого
// * будут названия дней, а значениями - их номера.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i];
// }
// console.log(obj)


// ? Дан объект:
// ? Переберите этот объект циклом и запишите в новый объект те
// ? элементы, которые являются четными числами.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// };
// for (let key in obj) {
//     if (obj[key] % 2 !== 0) {
//         console.log(obj[key]);
//     }
// }

// ? Дан объект:
// ? Переберите этот объект циклом и создайте новый объект так,
// ? чтобы его ключами стали элементы старого объекта,
// ? а значениями - ключи старого объекта.

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
// for (let key in obj) {
//     newObj[obj[key]] = key;
// }
// console.log(newObj)
// console.log(obj)


// ? Дан массив:
// ? Возьмите из этого массива те элементы, у которых первая
// ? цифра 1 или 2, и найдите их сумму.

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
// for (const number of arr) {
//     let test = String(number)[0]
//     if (test === '1' || test === '2') {
//         sum += number;
//     }
// }
// console.log(sum)

// ? Исправьте ошибки, допущенные в следующем коде:

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };
// let sum = 0;
// for (let elem in obj) {
//     if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
//         sum += obj[elem];
//     }
// }
// console.log(sum);


// ! Практика
// ! 1
// Выведите с помощью цикла столбец чисел от 1 до 100.
// function numList() {
//     for (let i = 0; i <= 100; i++) {
//         console.log(i);
//     }
// }
// numList();

// ! 2
// Выведите с помощью цикла столбец чисел от 100 до 1.
// function numListNegation() {
//     for (let i = 100; i >= 0; i--) {
//         console.log(i)
//     }
// }
// numListNegation();
// ! 3
// Выведите с помощью цикла столбец четных чисел от 1 до 100.
// function numEven() {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// numEven();

// ! 4
// Заполните массив 10-ю иксами с помощью цикла.
// let arr =  []
// function fillingArr(a) {
//     for (let i = 0; i <= 10; i++) {
//         arr.push(a)
//     }
// console.log(arr)
// }
// fillingArr('x')

// ! 5
// Заполните массив числами от 1 до 10 с помощью цикла.
// let arrNumber = [];
//
// function fillingNumber(x) {
//     for (let i = 1; i <= x; i++) {
//         arrNumber.push(i);
//     }
//     console.log(arrNumber);
// }
// fillingNumber(10);

// ! 6
// Дан массив с числами. С помощью цикла выведите только
// те элементы массива, которые больше нуля и меньше 10-ти.
// let arrNumbers = [1, 5, 7, 8, 9, 22, 31, 44, 10];
// function init(x, y) {
//     for (let i = 0; i <= arrNumbers.length -1; i++) {
//         let element = arrNumbers[i];
//         if (element >= x && element <= y) {
//             console.log(element)
//         }
//     }
// }
// init(0, 10);
// ! 7
// Дан массив с числами. С помощью цикла проверьте, что в
// нем есть элемент со значением 5.
// let arrNumbers = [1, 5, 7, 8, 9, 22, 31, 44, 10];
// let findNumber = (number) => {
//     let flag = false;
//     for (const arrNumber of arrNumbers) {
//         if (arrNumber === number) {
//             flag = true;
//             break;
//         }
//     }
//    return flag;
// }
// let res = findNumber(5);
// console.log(res)
// ! 8
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
// let arrNumbers = [1, 5, 7, 8, 9, 22, 31, 44, 10];
// * let sumDigital = arrNumbers.reduce((a, b) => a + b);
// * console.log(sumDigital);

// function sumNumber(number) {
//     let sum = 0;
//     for (const numberElement of number) {
//         sum += numberElement;
//     }
//     return sum;
// }
// let result = sumNumber(arrNumbers);
// console.log(result)


// ! 9
// Дан массив с числами. С помощью цикла найдите сумму квадратов
// элементов этого массива.
// let arrNumbers = [1, 4, 5, 7, 8, 9, 22, 31, 44, 10];
// function sumSquareNumArr(number) {
//     let result = 0;
//   for (let i = 0; i < number.length; i++) {
//       result += number[i] ** 2;
//   }
//     return result;
// }
// let result = sumSquareNumArr(arrNumbers);
// console.log(result)


// ! 10
// Дан массив с числами. Найдите среднее арифметическое его элементов.
// let arrNumbers = [1, 4, 5, 7, 8, 9, 22, 31, 44, 10];
// function average(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum / arr.length;
// }
// let result = average(arrNumbers);
// console.log(result);

// ! 11
// Напишите скрипт, который будет находить факториал числа.
// Факториал - это произведение всех целых чисел от единицы до заданного числа.
// function factorial(numberFac) {
//     if (numberFac < 0 || !Number.isInteger(numberFac)) {
//         return  'Не корректное число';
//     }
//     if (numberFac === 1 || numberFac === 0) {
//         return 1;
//     }
//     // let factorial = 1
//
//     // while (numberFac >= 1) {
//     //     factorial *= numberFac
//     //     numberFac--;
//     // }
//     return numberFac * factorial(numberFac - 1);// интересный подход
// }
// let res = factorial(5)
// console.log(res);

// ! 12
// Заполните массив числами от 10 до 1 с помощью цикла.
// let arr = [];
// for (let i = 10; i >= 1; i--) {
//     arr.push(i);
// }
// console.log(arr);

// ! 13
// Дан массив с числами. Числа могут быть положительными и
// отрицательными. Найдите сумму положительных элементов массива.
// let arrNumbers = [1, 4, -5, -7, 5, -9, -22, -31, -44, 10];
// let positiveSum = 0
// for (const arrNumber of arrNumbers) {
//     if (arrNumber >= 0) {
//         positiveSum += arrNumber;
//     }
// }
// console.log(positiveSum)

// ! 14
// Дан массив числами, например:
// Выведите на экран только те числа из массива, которые начинаются
// на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let firstNum = String(arr[i])[0]
//     if (firstNum === '1' || firstNum === '2' || firstNum === '5') {
//         console.log(arr[i]);
//     }
// }

// ! 15
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [10, 20, 30, 50, 235, 3000].reverse();
// console.log(arr)
// let arr = [10, 20, 30, 50, 235, 3000]
// let arrReverse = [];
// for (let i = arr.length -1; i >= 0; i--) {
//     arrReverse.push(arr[i]);
// }
// console.log(arrReverse)


// ! 16
// Дан массив с числами. С помощью цикла выведите на экран
// все элементы, значение которых совпадает с их порядковым номером в массиве.
// let arr = [0, 1, 3, 0, 4, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//         console.log(arr[i]);
//     }
// }

// ! 17
// Дан массив с числами. С помощью цикла for и функции document.write
// выведите каждый элемент массива с новой строки. Используйте для этого тег br.
// let arr = [0, 1, 3, 0, 4, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '</br>');
// }

// ! 18
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
// let arr = [0, 1, 3, 0, 4, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//     document.write(`<p> ${arr[i]} </p> </br>`);
// }

// ! 19
// Тут была задача не по теме
// ! 20
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.


// ! 21
// Дан следующий объект с работниками и их зарплатами:
// Увеличьте зарплату каждого работника на 10%.
// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };


// ! 22
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

// ! 23
// Даны следующие массивы:
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// ! 24
// Дан следующий объект:
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

// ! 25
// Дан следующий объект:
// Запишите ключи этого объекта в один массив, а значения - в другой.
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// ! 26
// Дан следующий объект:
// Запишите в новый массив элементы, значение которых
// начинается с цифры 1 или цифры 2. То есть у вас в результате получится
// вот такой массив:
//     [
//         125,
//         225,
//         128,
//         145,
//         281,
//     ];

// let obj = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };

// ! 27
// Дан следующий массив:
// Создайте из этого массива следующий объект:
// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
// let arr = ['a', 'b', 'c', 'd', 'e'];

// ! 28
// Дан следующий массив:
// Создайте из этого массива следующий объект:
// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr = ['a', 'b', 'c', 'd', 'e'];



















