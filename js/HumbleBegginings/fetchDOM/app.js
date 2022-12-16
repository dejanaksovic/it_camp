let data = null;
const container = document.querySelector(".container");

(async () => {
    const res = await fetch('https://catfact.ninja/facts')
    data = await res.json()
    console.log(data)
    data.data.forEach(e => {
        const p = document.createElement("p")
        p.textContent = e.fact
        container.appendChild(p)
    })
})();


