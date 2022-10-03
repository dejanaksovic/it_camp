// num = Number(prompt("Unesite vreddnost"))
// numTwo = Number(prompt("Unesite vreddnost"))
// numThree = Number(prompt("Unesite vreddnost"))

// switch(true) {
//     case num<10: console.log("Jutro")
//     break;

//     case num<12: console.log("Podne")
//     break;

//     case num<18: console.log("Predvecerje")
//     break;

//     case num<22: console.log("Vece")
//     break;

//     case num<25: console.log("Noc")
//     break;

//     default: console.log("Neispravan format")
// }

// switch(true){
//     case num>= numTwo &&  numTwo>=numThree:
//         console.log(`${num} ${numTwo} ${numThree}`)
//         break;
//     case  num>=numThree && numThree>=numTwo: 
//         console.log(`${num}  ${numThree} ${numTwo}`)
//         break;
//     case numTwo>=num && num>=numThree:
//         console.log(`${numTwo} ${num} ${numThree}`)
//         break;
//     case numTwo>=numThree && numThree>=num:
//         console.log(`${numTwo} ${numThree} ${num}`)
//         break;
//     case numThree>=num && num>=numTwo:
//         console.log(`${numThree} ${num} ${numTwo}`)
//         break;
//     case numThree>=numTwo && numTwo>=num:
//         console.log(`${numThree} ${numTwo} ${num}`)
//         break;
// }

num= Number(prompt("Unesite redni broj meseca"))

switch(true){
    case num===2:
        console.log("28")
        break;
    case num%2===0 && num<7:
        console.log("30") 
        break;
    case num&2!=0 && num>7:
        console.log("30")
        break;
    default: 
        console.log("31")
        break;   
}