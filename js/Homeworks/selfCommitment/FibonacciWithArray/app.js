numOfIterations= Number(prompt("Enter the amount of fibbonacci numbers you want to find"))
fibonacciArray= new Array()

//FIRST DEFAULT VALUES
fibonacciArray.push(1)
fibonacciArray.push(1)

//TODO: MAKE A LOOP FOR NUMBER OF ITERATIONS -2 (FIRST TWO NUMS ARE 1)
for (let i=2; i<numOfIterations; i++) {
    fibonacciArray.push(fibonacciArray[i-1]+fibonacciArray[i-2])
}
alert(`Given array is \n ${fibonacciArray}`)