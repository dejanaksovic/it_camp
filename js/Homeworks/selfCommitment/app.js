let algoDom = document.querySelector(".algo-space")
let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")

const createBlock = (op1, op2, div) => {
    let row = document.createElement("div")
    row.style.display = "flex"
    row.style.fontSize= "2rem"
    row.style.gap= "3rem"

    let first = document.createElement("div")
    first.textContent = `${op1}, ${op2}`
    let second = document.createElement("div")
    second.textContent = `${div}`
    second.style.borderLeft = "1px solid black"
    second.style.marginLeft = "auto"

    row.appendChild(first)
    row.appendChild(second)

    algoDom.appendChild(row)
}

const doLogic = () => {
    let numOne = Number(inputs[0].value)
    let numTwo = Number(inputs[1].value)
    let divider = 2

    while (divider <= Math.min(numOne, numTwo)) {

        while (true) {
            if (!(numOne % divider) && !(numTwo % divider)) {
                createBlock(numOne, numTwo, divider)
                numOne /= divider
                numTwo /= divider
                continue
            }
            break
        }
        divider++
    }

    createBlock(numOne, numTwo, 1)
}

button.addEventListener("click", doLogic)
inputs[0].addEventListener("keydown", e=>{
    if(e.key==="Enter")
        doLogic();
})
inputs[1].addEventListener("keydown", e=>{
    if(e.key==="Enter")
        doLogic();
})