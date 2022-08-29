//Taking monthly/annual elements
let MA=document.querySelectorAll(".padding-time")
let tw= document.querySelector(".time-wrap")

let cardContainer= document.querySelector(".card-container")
let cards= document.querySelectorAll(".card")

tw.addEventListener("click", e=>{
    MA.forEach((el, inx, arr)=>{
        el.classList.toggle("isActive")
    })
})


cards.forEach((el, indx, arr)=>{
    el.addEventListener("click", e=>{
        Array.from(cards).filter(i=>i!=el).forEach(el=>el.classList.remove("isSelected"))
        el.classList.toggle("isSelected")
        }
    )
})


