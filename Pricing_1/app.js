//Taking monthly/annual elements
let MA=document.querySelectorAll(".padding-time")
let tw= document.querySelector(".time-wrap")

tw.addEventListener("click", e=>{
    MA.forEach((el, inx, arr)=>{
        el.classList.toggle("isActive")
    })
})


