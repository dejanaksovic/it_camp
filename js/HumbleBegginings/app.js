inputs = document.querySelectorAll("input")
buttons = document.querySelectorAll("button")
output = document.querySelector("p")

buttons[0].addEventListener("click", e => {
    inputA = Number(inputs[0].value)
    inputB = Number(inputs[1].value)
    output.textContent= inputA+inputB
    output.style.color= "black"
})

buttons[1].addEventListener("click", e=>{
    inputA = Number(inputs[0].value)
    inputB = Number(inputs[1].value)
    output.textContent= inputA-inputB
    output.style.color= "black"
})

buttons[2].addEventListener("click", e=>{
    inputA = Number(inputs[0].value)
    inputB = Number(inputs[1].value)
    output.textContent= inputA*inputB
    output.style.color= "black"
})

buttons[3].addEventListener("click", e=>{
    inputA = Number(inputs[0].value)
    inputB = Number(inputs[1].value)
    output.textContent= inputA/inputB
    output.style.color= "black"
})

buttons[4].addEventListener("click", e=>{
    inputA = Boolean(Number(inputs[0].value))
    inputB = Boolean(Number(inputs[1].value))
    output.textContent= inputA && inputB
    output.style.color= "black"
})