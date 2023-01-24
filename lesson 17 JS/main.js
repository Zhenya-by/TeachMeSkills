let people =[ 
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300}
]

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
let people2 =[ 
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300}
]
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