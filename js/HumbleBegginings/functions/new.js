function Calc(operandFirst, operandSecond, operation) {

    switch(operation) {
        case '+':
            return operandFirst+operandSecond
            break
        case '-':
            return operandFirst-operandSecond
            break
        case '*':
            return operandFirst*operandSecond
            break
        case '/':
            return operandFirst/operandSecond
            break;
        default:
            return "Error"
    }

}

console.log(Calc(5, 7, '-'));


