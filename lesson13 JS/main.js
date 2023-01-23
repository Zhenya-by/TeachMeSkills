// #### Task 1 💻

// let x = 20
// let y = 58
// let z = 42
// console.log (x + y + z)


// #### Task 2 💻

// let secondInMinute = 60
// let minutePerHour = 60
// let hoursInDay = 24
// let daysYear = 365
// let age = 30

// let myAgeInSeconds = (age * daysYear * hoursInDay * minutePerHour *  secondInMinute) 

// console.log(`Ваш возраст в секундах ${myAgeInSeconds}`)


// #### Task 3 💻

// let count = 42 // number
// let userName = '42' // string

// count = String(count) // Преоброзование переменной в строку
// userName = Number(userName) // Преоброзование переменной в число

// alert(typeof count)
// alert(typeof userName)

// let countString = '42' // Теперь переменная count строка
// let userNameNumber = 42 // Теперь переменная count число

// alert(countString + userNameNumber)

// #### Task 4 💻

// let a = 1
// let b = 2
// let c = "белых медведей"

// console.log(a.toString() + b.toString() + ' ' + c)
// console.log(`${a}${b} ${c}`);


// #### Task 5 💻

// let access = 'доступ'
// let marine = 'морпех'
// let ice = 'наледь'
// let poprek = 'попрек'
// let chopper = 'рубило'

// let lengthWords = (access.length + marine.length + ice.length + poprek.length + chopper.length)

// console.log(lengthWords);

//-----------------вернись сюда--------------------------//
// const one = 'строка'
// const two = 10
// const three = true

// console.log(`Variable: one have type: ${one}`);
//------------------------------------------------------//


// #### Task 7 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

// let name = prompt(`Ваше имя?`);
// let age = prompt(`Сколько вам лет?`)
// alert(`Вас зовут ${name}, вам ${age} лет`);


// #### Task 1 👨‍🏫 
// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
// Создайте переменную **`cipher`** и поместите туда необходимые символы

// let codeWord1 = "обернись";
// let codeWord2 = "неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";

// const cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1])
// console.log(cipher);


// #### Task 1 💻

// Создайте переменные и присвойте им значения:

// ```javascript
//     'true'
//     false
//     17
//     undefined
//     null
// ```
// > Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

// const man = 'true'
// const dog = true
// const age = 17
// const city = undefined
// const car = null

// console.log(typeof 'true');
// console.log(typeof true);
// console.log(typeof 17);
// console.log(typeof undefined);
// console.log(typeof null);


// #### Task 2 💻
// Даны две переменные:
// > С помощью условий выведите в консоль разработчика наибольшее число.

// let height = 15
// let width = 20

// console.log(Math.max(15, 20));


// #### Task 3 💻
// Написать перебор от 1 до 20, где выведутся все числа кратные трём.
// > Для вычисления кратности обратите внимание на оператор %

// const list = []

// for (let i = 1; i <= 20; i++){
//     if (i % 3 == list) {
//         console.log(i);
//     }
// }


// #### Task 4 💻

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true

// let shouldGoToWork = (key && documents && pen) &&
//      (apple || orange)

// console.log(`Ключи, документы, ручка: ${shouldGoToWork}
//     Апельсин ${orange}`);


// Запросить у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

// for (let i = 1; i <= 20; i++) {
//     if ((i % 3 == 0) && (i % 5 != 0)) {
//         console.log('Fizz');
//     }
//     if ((i % 5 == 0) && (i % 3 != 0)) {
//         console.log('Buz');
//     }
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('FizzBuz');
//     }
//     if ((i % 3 != 0) && (i % 5 != 0))
//         console.log(i);
// }   

// #### Task 6 💻
// Написать программу, которая выполняет следующие операции:
// - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
// - Если меньше, то выводит сообщение - `Пей колу`. 
// - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.

// const age = Number(prompt(`Введите ваш возвраст`));
//     if (age >= 18) {
//           console.log(`Попей пивка`);  
//     } 
//     else if (age >= 16 && age <= 18) {
//         console.log(`Можешь выкурить сигаретку, только маме не говори`);
//     } 
//     else {
//         console.log(`Пей колу`);
//     }


// #### Task 1 👨‍🏫 

// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, 
// и поприветствуйте его через **alert**
// > Привет, Полина Набережная!

// let user = prompt(`Введите пользователя`)

// let result = `Привет, ${user[0]}`;
//     for (let i = 1; i < user.length; i++) {
//        const prev = user[i - 1]
//        const current = user[i]

//        if (prev === ' ') {
//         result += current.toLocaleUpperCase();
//        }
//        else {
//         result += current.toLocaleLowerCase();
//        }
//     }
//     alert(result)
    

// #### Task 2 👨‍🏫 

// Написать программу, которая выполняет следующие операции: 
// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
// > ((((6 - 10) + 5) * 20) / 2 = 110)

// function calculateResult(initialNumber, minusNumber, plusNumber, multiplicationNumber, dividedNumber) {
//     return ((initialNumber - minusNumber) + plusNumber) * multiplicationNumber / dividedNumber
// }

// let initialNumber = prompt(`Введите число`)
// let minusNumber = prompt(`cколько отнять`)
// let plusNumber = prompt(`прибавить`)
// let multiplicationNumber = prompt(`умножить`)
// let dividedNumber = prompt(`разделить от предыдущего результата`)

// alert(`((((${initialNumber} - ${minusNumber}) + ${plusNumber}) * ${multiplicationNumber}) / ${dividedNumber}) 
// = ${calculateResult(initialNumber, minusNumber, plusNumber, multiplicationNumber, dividedNumber)})`)