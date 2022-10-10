//Array basacis 
// firstArray = ["value0", "value1", "value2", "value4", "value5", "value6"]

// firstArray.forEach(item => console.log(item))

// firstArray.splice(1, 0, "sampleItem")

// niz = new Array()
// parni = false;

// for (let i = 0; i < 10; i++) {
//     niz.push(prompt("Unesite broj :D"))
// }

// for (let i = 0; i < niz.length; i++) {
//     if (!(niz[i] % 2)) {
//         parni = true;
//         console.log(niz[i]);
//     }
// }

// if (parni) {
//     console.log("imalo je parnih")
// }
// else {
//     console.log("nije")
// }

testArr= new Array()
parNiz= new Array()

for(let i=0 ; i<10; i++){
    testArr.push(i)
}

for(let i=0; i< testArr.length; i++){
    if(testArr[i]%2===0){
    parNiz.push(testArr[i])
    }
}

console.log(parNiz)