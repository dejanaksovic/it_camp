let gas= document.querySelector(".gas-pedal")

gas.addEventListener("mouseover", e=>{
    document.body.style.setProperty("--var-speed", "3s")
    document.querySelector(".scale").style.setProperty("--slope", "160deg")
})

gas.addEventListener("mouseout", e=>{
    document.body.style.setProperty("--var-speed", "7s")
    document.querySelector(".scale").style.setProperty("--slope", "30deg")
})
