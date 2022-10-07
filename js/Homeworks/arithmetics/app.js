let firstOperand, secondOperand, Operation, resault

while (true) {2

    Operation= Number(prompt("Enter one of the following options: \n 0: Exit the programm \n 1: Addition \n 2: Subtraction \n 3: Multiplication \n 4: Division"))
    firstOperand= Number(prompt("Enter the first member of the operation"))
    secondOperand= Number(prompt("Enter the second member of the operation"))

    if (Operation===0) {
        break;
    }
    else if (Operation===1) {
        resault= firstOperand+secondOperand
    }
    else if (Operation===2) {
        resault= firstOperand-secondOperand
    }
    else if (Operation===3) {
        resault= firstOperand*secondOperand
    }
    else if (Operation===4) {
        resault= firstOperand/secondOperand
    }

    alert(`The resault of your operation is ${resault}`)
}
