//Needed things
let mainInput = document.querySelector("input[type='text']")
let submit = document.querySelector(".main-button")
let Container = document.querySelector(".todos")

submit.addEventListener("click", e=> {
    e.preventDefault()
    
    //Todo thing
    let newTodo = document.createElement("div")
    newTodo.classList.add("todo")
    newTodo.innerHTML = `<p>${mainInput.value}</p>`
    Container.appendChild(newTodo)
    //X button
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    newTodo.appendChild(deleteButton)
    deleteButton.addEventListener("click", e=> {
        Container.removeChild(newTodo)
    })
})