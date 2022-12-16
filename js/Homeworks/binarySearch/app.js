const search = (array, min, max, searched) => {
    let index = Math.floor((max-min)/2) + min
    
    if (array[index] == searched) {
        return index
    }

    if (max-min <= 1) {
        return false
    }

    if (array[index] > searched) {
        return search(array, min, index, searched)
    }

    else {
        return search(array, index, max, searched)
    }
}

let testArray = [1, 3, 7, 16, 22, 27, 30, 32, 38]

console.log(search(testArray, 0, testArray.length-1, -40));