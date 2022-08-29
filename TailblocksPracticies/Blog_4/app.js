let selector= document.querySelector(".selector");
let root= document.querySelector(":root")

document.querySelector(".theme").addEventListener("click", e=>{
    selector.classList.toggle("active");
    if(root.style.getPropertyValue("--primaryLight")=="#111827"){
        setLight();
    }
    else{
        setDark();
    }
})

const setDark = () =>{
    root.style.setProperty("--primaryLight", "#111827")
    root.style.setProperty("--fontColorDark", "#fff")
}

const setLight = () =>{
    root.style.setProperty("--primaryLight", "#fff")
    root.style.setProperty("--fontColorDark", "#000")
}

