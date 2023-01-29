// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

// const index = {
//     key1: 'value',
//     key2: 'value2'
// }

// delete index.key1, delete index.key2
// console.log(index);


// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них,
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

// const index = {
//     key1: 'value',
//     key2: 'value2'
// }
// Object.keys(index)
// console.log(Boolean(index.key1), Boolean(index.key2));


// #### Task 4 🖥
// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```
// Вывести в консоль слово красный и синий

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// }

// console.log(`${colors["ru pum pu ru rum"].red} и ${colors["ru pum pu ru rum"].blue}`);

// #### Task 5 🖥

// Дан обьект:

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

// ------неуверен-----------
// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0 / salaries || 1) 
//   }
//   console.log(`Общая зп:${sumSalaries(salaries)}`);


// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```

    // let student1 = {
    //     name: 'Polina',
    //     age: 27,
    // }

    // let student2 = {
    //     name: 'Polina',
    //     age: 27,
    // }

    // console.log(JSON.stringify(student1) === JSON.stringify(student2));


//     #### Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// fibonacci.forEach(function(item, index, array) {
//     fibonacci.forEach(item => console.log(item));
// })

// fibonacci.forEach(item => console.log(item));


// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

// const numbers = [7, -4, 32, -90, 54, 32, -21]

// function isPrime(num) {
//     for (let i = 0; num < i; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// console.log(numbers.filter(isPrime));

// numbers1 = numbers.filter(next => next > 1)
// console.log(numbers1);


// Используя метод **`reduce`** получите сумму всех чисел массива.

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// let result = fibonacci.reduce((sum, current) => sum + current, 0);
// console.log(result);


// Используя метод **`find`** найдите в массиве первое четное число.

// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// result = numbers.find(next => next >= 24)
// console.log(result);

// function max_even(arra) {

//     arra.find((x, y) => y - x);
  
//     for (let i = 0; i < arra.length; i++) {
//       if (arra[i] % 2 == 0)
//         return arra[i];
//       }
//     }
  
//   console.log(max_even(numbers));


//   result = numbers.find(number => number % 2 == 0)
//   console.log(result); 