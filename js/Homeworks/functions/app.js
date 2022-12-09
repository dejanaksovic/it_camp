//Da se okrene broj
//Da li je rec palindrom
function reverse(num) {
    numString = String(num)
    temp = ""
    for(let i= numString.length-1; i>=0; i--) {
        temp+= numString[i]
    }

    return Number(temp)
}

function Palindrome(input) {

    input = input.toLowerCase()

    for (let i= 0; i< input.length/2; i++) {
        if( input[i] != input[input.length-1-i]) {
            return false
        }
        return true
    }
}

console.log(Palindrome("Marko"));