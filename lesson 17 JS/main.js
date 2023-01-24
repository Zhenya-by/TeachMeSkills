// let people =[ 
//     {name: 'Alex', bill: 3000},
//     {name: 'Ivan', bill: 2000},
//     {name: 'Vadim', bill: 1000},
//     {name: 'Vova', bill: 300}
// ]

// Меторд map
// const peopleSalary = people.map (item => (item.bill * 3)) ;
// const peopleSalary1 = people.map (item => (item.bill * 3) + (item.bill * 3 * .10)) ;
// const peopleSalary2 = people.map (item => (item.bill / 3)) ;

// console.log(peopleSalary, peopleSalary1, peopleSalary2);


// Метод filter
// const peopleSalaryMin = people.filter((item) => item.bill < 400);
// const peopleSalaryMax = people.filter((item) => item.bill > 3000);
// const peopleName = people.filter((index) => index.name === 'Vadim');

// console.log(peopleSalaryMin, peopleName, peopleSalaryMax);


//Метод Concat
// let people2 =[ 
//     {name: 'Alex', bill: 3000},
//     {name: 'Ivan', bill: 2000},
//     {name: 'Vadim', bill: 1000},
//     {name: 'Vova', bill: 300}
// ]
// let people3 = people.concat(people2)

// console.log(people3);


// Метод find
// let result = people2.find(function (item, index, array) {
//     return item.name === 'Alex';
// })
// Находит первый элемент который соответствует условию: В нашем случаи это - {name: 'Alex', bill: 3000},
// let result2 = people2.find(function (item, index, array) {
//     return item.bill >= 1000; 
// })
// console.log(result ,result2);


// Метод findIndex 
// let peopleSalary = people2.findIndex(index => index.bill === 300)
// let peopleSalary2 = people2.findIndex(index => index.name === 'Yura') // возвращает -1 так как в массиве нет объекта с таким индексом.

// console.log(peopleSalary, peopleSalary2);


// Метод Push - добавляет элементы в конец
// people2.push({name: 'Yura', bill: 4000},
//     {name: 'Sasha', bill: 2500},
//     {name: 'Sasha', bill: 2500},
//     {name: 'Dima', bill: 1500},
//     {name: 'Valera', bill: 2200},
//     {name: 'Kolya', bill: 1800},
//     {name: 'Timofei', bill: 4500})

// console.log(people2);


// Метод Slice - не мутирует массив. Забыть о splice (мутирует массив, может создать проблеммы).
// const sliceArr = people2.slice(11) 

// console.log(sliceArr);


// Метод pop - удаляет последний элемент массива
// people2.pop()
// people2.pop()
// people2.pop()
// people2.pop()
// console.log(people2);


// Метод unshift: добовляет элементы в начало массива 
let people2 =[ 
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300},
]

// people2.unshift({name: 'Sasha', bill: 2500},
// {name: 'Valera', bill: 2200})

// console.log(people2);


// Метод shift: удаляет элементы массива
// people2.shift(), people2.shift()
// console.log(people2);


// Метод some
// const someArrays = people2.some(item => item.name === 'Yura'); // если нет указанного чел. вернет false

// // console.log(isEqualArrays)

// // Метод Every
// const someArrays1 = people2.every(item => item.name != 'Yura'); 

// console.log(someArrays, someArrays1)


// Метод Sort
let numbers =[3,25,63,51,4321,42]
// Сортировка по возрастанию
function startNumbersStart(a, b) {
    if (a > b) 
    return 1
    if (a == b)
    return 0
    if (a < b)
    return -1
}
numbers.sort(startNumbersStart)
console.log(numbers);


// сортировка в обратном порядке
function startNumbersEnd(a, b) {
    if (a > b) 
    return -1
    if (a == b)
    return 0
    if (a < b)
    return 1
}
numbers.sort(startNumbersEnd)
console.log(numbers);