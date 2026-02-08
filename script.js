const inputAdd = document.querySelector('.input-add');
const btnAdd = document.querySelector('.btn-add');
const listContainer = document.querySelector('.list-container');
const message = document.querySelector('.message')

const addNewTask = (text) => {
    if(text.trim() == ''){
        message.textContent = 'Cannot add empty tasks. Try again'
        inputAdd.classList.add('empty-input')
        return
    } 

    inputAdd.classList.remove('empty-input')
    message.textContent = ''
    const newListItem = document.createElement('li')
    const newListElements =  document.createElement('div')
    const newListButtons = document.createElement('div')
    const newTextItem = document.createElement('p')
    const newBtnDelete = document.createElement('button')
    const newBtnStatus = document.createElement('button')
        
    newTextItem.textContent = text
    newListItem.classList.add('list-item')
    newBtnDelete.textContent = 'X'
    newBtnDelete.classList.add('btn-delete')
    newBtnStatus.textContent = 'Undo'
    newBtnStatus.classList.add('btn-status')

    newListElements.classList.add('list-elements')
    newListButtons.classList.add('list-buttons')

    newListElements.appendChild(newTextItem)

    newListButtons.appendChild(newBtnStatus)
    newListButtons.appendChild(newBtnDelete)

    newListElements.appendChild(newListButtons)
    newListItem.appendChild(newListElements)
    listContainer.appendChild(newListItem)

    inputAdd.value = ''
}
    
btnAdd.addEventListener('click', ()=>{
    const texto = inputAdd.value
    addNewTask(texto)
})

listContainer.addEventListener('click', (event) => {
    if(event.target.className == 'btn-delete'){
        event.target.closest('.list-item').remove()
    }
    if(event.target.classList.contains('btn-status')){
        if(event.target.classList.contains('done')){
            event.target.classList.remove('done')
            event.target.textContent = 'Undo'
        } else {
            event.target.classList.add('done')
            event.target.textContent = 'Done'
        }
    }
}) 


    
