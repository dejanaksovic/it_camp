//Funkcija koja prima dva argumenta f(niz[], element niza) treba da vrati koliko se puta odredjeni element pojavljuje

niz = [5, 25, "apple", [25, "apple",[5, 25, "apple", [25, "apple", "banana", "mango"]], "banana", "mango"]]

const counter = (array, item) => {

    toReturn = 0

    //Prolazi kroz elemente niza
    for (let i = 0; i < array.length; i++) {

        //Provera ukoliko je trenutni item niz
        if (Array.isArray(array[i])) {
            toReturn += counter(array[i], item)//Rekurzija
        }

        else {
            //Provera da li je item jednak trazenom
            array[i] === item ? toReturn++ : toReturn=toReturn
        }
    }

    return toReturn
}

console.log(counter(niz, "apple"))