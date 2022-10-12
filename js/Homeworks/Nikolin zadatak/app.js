//Funkcija koja prima dva argumenta f(niz[], element niza) treba da vrati koliko se puta odredjeni element pojavljuje

niz = [5, 25, "apple", [25, "apple", "banana", "mango"]]

function counter(array, item) {

    toReturn = 0

    for (let i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {
            toReturn += counter(array[i], item)
        }

        else {
            array[i] === item ? toReturn++ : toReturn=toReturn
        }
    }

    return toReturn
}

console.log(counter(niz, "apple"))