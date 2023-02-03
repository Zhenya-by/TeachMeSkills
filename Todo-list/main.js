const root = document.getElementById('root')
root.style.margin = '0 auto'
root.style.marginTop = '10%'
root.style.width = '600px'
root.style.height = '500px'
root.style.borderRadius = '20px'
root.style.border = '3px solid black'
root.style.backgroundColor = '#D5D5D5'

// btn
const deliteAll = document.createElement('button') // создаем новый элемент <button>
const textButton = document.createTextNode('Delete All') // создаем текстовое содержимое
deliteAll.appendChild(textButton) // добавляем текстовое содержимое элементу <button>  
root.appendChild(deliteAll)
deliteAll.classList.add('deliteAll-button')
// input
const enterToDo = document.createElement('input')
enterToDo.classList.add('input-to-do')
root.appendChild(enterToDo)
enterToDo.placeholder = 'Enter todo ...'
// btn two
const deliteAllTwo = document.createElement('button') // создаем новый элемент <button>
const textButtonTwo = document.createTextNode('Add') // создаем текстовое содержимое
deliteAllTwo.appendChild(textButtonTwo) // добавляем текстовое содержимое элементу <button>  
root.appendChild(deliteAllTwo)
deliteAllTwo.classList.add('deliteAll-button')
// wrap (div)
const divWrap = document.createElement('div');
root.appendChild(divWrap);
divWrap.appendChild(deliteAll)
divWrap.appendChild(enterToDo)
divWrap.appendChild(deliteAllTwo)
divWrap.classList.add('wrap')

// div innerBig
const divInnerBig = document.createElement('div');
root.appendChild(divInnerBig);
divInnerBig.classList.add('innerBig')

// btnEnter
const enter = document.createElement('button')
divInnerBig.appendChild(enter)
const textButtonEnter = document.createTextNode('v')
enter.appendChild(textButtonEnter)
enter.classList.add('enterBnt')

// input
const todoText = document.createElement('input')
divInnerBig.appendChild(todoText)
todoText.setAttribute(`type`, `text`);
todoText.classList.add('todoText')
todoText.placeholder = 'Todo text'

// btnClose inner 
const closeBtn = document.createElement('button')
divInnerBig.appendChild(closeBtn)
const textCloseBtn = document.createTextNode('X')
closeBtn.appendChild(textCloseBtn)
closeBtn.classList.add('closeBtn')

// date
const dateInput = document.createElement('input');
divInnerBig.appendChild(dateInput);
dateInput.classList.add('date-input');
dateInput.setAttribute(`type`, `text`);
dateInput.placeholder = 'Date';









