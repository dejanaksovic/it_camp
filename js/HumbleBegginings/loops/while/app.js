//Basic while loop
//
// iterationNumber= 5
// while(iterationNumber > 0) {
//     console.log(`${iterationNumber--}`)
// }

//Loop that goes on based on the input
// input= ""
// password= "lmao123"
// while(input!==password){
//     input= prompt("Unesite pokusaj")
// }
// alert("Uneli ste tacnu sifru")

num = Math.floor(Math.random() * 10)
console.log(num)
while (true) {
    input = Number(prompt("unesite broj"))
    if (!input || input == num)
        break;
    if (input < num) {
        alert("Vece")
    }
    else {
        alert("Manje")
    }
}

alert("Broj je tacaan")