'use strict'
// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]]
//     , [8, [9, 10]]
// ];
// let sum = 0;
// sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] +arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
// console.log(sum);

// Дан двухмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let arrElement of arr) {
//     for (let number of arrElement) {
//         sum += number;
//     }
// }
// console.log(sum);


// Дан трехмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.

// let arr = [
//     [[1, 2], [3, 4]],
//     [[5, 6], [7, 8]]
// ];
// let sum = 0;
// for (let arrElement of arr) {
//     for (let arrElementElement of arrElement) {
//         for (let number of arrElementElement) {
//             sum += number;
//         }
//     }
// }
// console.log(sum)

// Сформируйте с помощью двух вложенных циклов следующий массив:

    // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr =[];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
//     [
//         ['x', 'x', 'x', 'x'],
//         ['x', 'x', 'x', 'x'],
//         ['x', 'x', 'x', 'x']
//     ]
//
// let arr =[];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 1; j <= 4; j++) {
//         let x = 'x';
//         arr[i].push(x);
//     }
// }
// console.log(arr);

// Сформируйте с помощью трех вложенных циклов следующий массив:
//
//     [
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//     ]

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = []
//         for (let k = 1; k <= 5; k++) {
//             arr[i][j].push(k)
//         }
//     }
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
//     [[1, 2], [3, 4], [5, 6], [7, 8]]
// let arr = [];
// let k = 1;
// for (let i = 0; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i].push(k++);
//     }
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
//     [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

// let arr = [];
// let k = 1;
// for (let i = 0; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j <= 5; j++) {
//         if (k % 2 === 0) {
//             arr[i].push(k);
//         }
//         k++;
//     }
// }
// console.log(arr);
//
// let array = [];
// let number = 2;
//
// for (let i = 0; i < 4; i++) {  // Внешний цикл для строк
//     let row = [];
//     for (let j = 0; j < 3; j++) {  // Внутренний цикл для элементов в строке
//         row.push(number);
//         number += 2;
//     }
//     array.push(row);
// }
//
// console.log(array); // сщзданно через чат

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//
//     [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = [];
// let num = 1;
// for (let i = 0; i < 2; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let k = 0; k < 2; k++) {
//             arr[i][j].push(num++);
//         }
//     }
// }
// console.log(arr);

let arr = [];
let k = 1
for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);










