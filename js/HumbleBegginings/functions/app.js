test_array = []

const input_array = (array) => {
    input = -5
    while (true) {
        input = Number(prompt("Unesite broj za unos u niz (-1) za "))
        if (input == -1)
            break
        array.push(input)
    }
}

const out_array = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

const output_array_even = (array) => {

    for (let i = 0; i < array.length; i++) {
        if (!(array[i] % 2)) {
            console.log(array[i])
        }
    }
}

const out_backwards = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

//Test
input_array(test_array)
out_array(test_array)
console.log("-------");
output_array_even(test_array)
console.log("-------");
out_backwards(test_array)



