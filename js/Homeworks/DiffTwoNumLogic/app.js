//Needed dom elements
elemA = document.getElementById("first-num")
elemB = document.getElementById("second-num")
outputAnd = document.querySelector(".and-logic")
outputOr = document.querySelector(".or-logic")

button = document.querySelector("button")//Only having one button makes it so we don't need special selector

//flavor colors--> for consistency reasons putting them in variables 
trueColor = "green"
falseColor = "red"
neutralColor = "grey"

//Logic function
const doLogic = () => {
    //getting values as numbers
    a = Number(elemA.value)
    b = Number(elemB.value)

    //doing the logic, putting values in seperate variables for clean code
    resAnd = (a > 0 && b < a) ? true : false
    resOr = (resAnd) ? ((a>b || b>0) ? true: false) : "nije definisan"
    // if (a > 0 && b < a) {
    //     if (a > b || b > 0) {
    //         consoel.log('true!')
    //     }
    //     else {
    //         resOr = "Nije ispunjen drugi uslov"
    //     }
    // } else {
    //     resOr = "Nije ispunjen prvi uslov"
    // }

    //setting the resaults to our resault fields/ spans
    outputAnd.textContent = resAnd
    outputOr.textContent = resOr

    //flavor coloring
    //coloring first out
    if (resAnd == true) {
        colorOut(outputAnd, trueColor)
    }

    else {
        colorOut(outputAnd, falseColor)
    }

    //coloring second out
    if (resOr == true) {
        colorOut(outputOr, trueColor)
    }
    else {
        colorOut(outputOr, neutralColor)
    }
}

//Flavor coloring TRUE/FALSE
const colorOut = (elemToColor, colorToPaint) => {
    elemToColor.style.color = colorToPaint
}

//adding click event
button.addEventListener("click", doLogic)

//Adding the same on the enter click, as long as the focus is on one of the inputs
elemA.addEventListener("keydown", e => {
    //Checking for ENTER key
    if (e.key == "Enter") {
        doLogic()
    }
})

//doing the same for other input
elemB.addEventListener("keydown", e => {
    //Checking for ENTER key
    if (e.key == "Enter") {
        doLogic()
    }
})