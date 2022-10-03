input= Number(prompt("Enter the number of a month"))

switch(true){
    case (input<0 || input>12 || isNaN(input)):
        console.log("Wrong inpiut");
        break;
    case input<=12/4:
        console.log("First quarter")
        break;
    case input<=12/4*2:
        console.log("Second quarter")
        break;
    case input<=12/4*3:
        console.log("Third quarter")
        break;
    default:
        console.log("Forth quarter")
}