const inputAdd = document.querySelector('.input-add');
const btnAdd = document.querySelector('.btn-add');
const listContainer = document.querySelector('.list-container');
const message = document.querySelector('.message')
let taskDone = false
const addNewTask = (text) => {
    if(text.trim() == ''){
        message.textContent = 'Cannot add empty tasks. Try again'
        inputAdd.classList.add('empty-input')
    } else {
        inputAdd.classList.remove('empty-input')
        message.textContent = ''
        const newListItem = document.createElement('li')
        const newListElements =  document.createElement('div')
        const newListButtons = document.createElement('div')
        const newTextItem = document.createElement('p')
        const newBtnDelete = document.createElement('button')
        
        newTextItem.textContent = text
        newListItem.classList.add('list-item')
        newBtnDelete.textContent = 'X'
        newBtnDelete.classList.add('btn-delete')

        newListElements.classList.add('list-elements')
        newListButtons.classList.add('list-buttons')

        newListElements.appendChild(newTextItem)

        newListButtons.appendChild(newBtnDelete)

        newListElements.appendChild(newListButtons)
        newListItem.appendChild(newListElements)
        listContainer.appendChild(newListItem)

        newBtnDelete.addEventListener('click', (event) => {
            if(event.target.tagName == 'BUTTON'){
                newBtnDelete.parentElement.parentElement.parentElement.remove();
            }
        }) 
    }
    inputAdd.value = ''
}

btnAdd.addEventListener('click', ()=>{
    const texto = inputAdd.value
    addNewTask(texto)
})