//Needed dom elements
elemA= document.getElementById("first-num")
elemB= document.getElementById("second-num")
outputAnd= document.querySelector(".and-logic")
outputOr= document.querySelector(".or-logic") 

button= document.querySelector("button")//Only having one button makes it so we don't need special selector

//flavor colors--> for consistency reasons
trueColor= "green"
falseColor= "red"

//Logic function
const doLogic = () =>{
    //getting values as numbers
    a= Number(elemA.value)
    b= Number(elemB.value)

    //doing the logic, putting values in seperate variables for clean code
    resAnd= (a>0 && b<a)
    resOr= (a>b || b>0)

    //setting resaults to our resault fields
    outputAnd.textContent= resAnd
    outputOr.textContent= resOr

    //flavor coloring
    //coloring first out
    if(resAnd==true){
        colorOut(outputAnd, trueColor)
    }

    else{
        colorOut(outputAnd, falseColor)
    }

    //coloring second out
    if(resOr==true){
        colorOut(outputOr, trueColor)
    }
    else{
        colorOut(outputOr, falseColor)
    }
}

//Flavor coloring TRUE/FALSE
const colorOut = (elemToColor, colorToPaint) => {
    elemToColor.style.color= colorToPaint
}

//adding click event
button.addEventListener("click", doLogic)

//Adding the same on the enter click, as long as the focus is on one of inputs
elemA.addEventListener("keydown", e=>{
    //Checking for ENTER key
    if(e.key=="Enter"){
        doLogic()
    }
})

//doing the same for other input
elemB.addEventListener("keydown", e=>{
    //Checking for ENTER key
    if(e.key=="Enter"){
        doLogic()
    }
})