// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**
// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]

// const unionNumbers = evenNumbers.concat(oddNumbers)

// console.log(unionNumbers);
// console.log(unionNumbers.indexOf(8));


// #### Task 7** 🖥
// Дан массив:
// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

// const binary = [0, 0, 0, 0]
// // binary.map((index) => `${index}${1}`)//
// console.log(binary.join('1'));


// #### Task 1** 👨‍🏫
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// function palindrom() {
//     const str = prompt('Введите слово для проверки')
//     if (str.split('').reverse().join('') == str) {
//         console.log('Это палиндром');
//     } else {
//         console.log('Это не палиндром');
//     }
// }
// palindrom()


// Дан массив:
// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// const newArray = mixedNumbers.filter(number => number >= 0)
// const newArray2 = mixedNumbers.filter(number => number < 0)
// console.log(newArray, newArray2);


// #### Task 4** 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
// Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
// В конце вывести оба массива в консоль.

// const result = []
// for (let i = 0; i < 5; i++){
//     result.push(Math.floor(Math.random() * 6))
// }
// console.log(result);

// const cube = result (element => element ** 3)
// console.log(result, cube);


