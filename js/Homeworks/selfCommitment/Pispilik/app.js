//KARD CLASS
class Card {
    constructor(color, sign, number) {
        this.color = color
        this.sign = sign
        this.number = number
    }

    render(query) {
    
        const appender = document.querySelector(query)

        let el = document.createElement("div")
        el.style.color = this.color

        let t = `${this.sign} ${this.number}`

        el.innerHTML = t

        appender.appendChild(el)
    }

}

//RESET POS
const resetCard = (query) => {
    document.querySelector(query).innerHTML = ""
}

//POTREBNO ZA SPIL
signs = ["P", "K", "H", "T"]
numbers = [];
deck = [];

//NEOPHODNO IGRI

//IMENA
names = [];
currPlayer = 0;//INDEKS IGRACA KOJI TRENUTNO IGRA

//KARTE KOJE SU IGRACI OSVOJILI
playersPoss = [[], [], [], []];

//TRENUTNO U RUCI
hands = [[], [], [], []]

//TRENUTNO NA TALONU
tableCards = [];

//TODO: GENERISATI BROJEVE OD 1-13 (U HEKSU.... skoro)
for (let i = 1; i < 14; i++) {
    switch (true) {
        case i == 10:
            numbers.push("A")//A=10
            break;
        case i == 11:
            numbers.push("J")//J= zandar (11)
            break;
        case i == 12:
            numbers.push("Q")//Q= dama (12)
            break;
        case i == 13:
            numbers.push("K")//K= kralj (13)
            break;
        default: numbers.push(i.toString());
    }
}

//TODO: KOMBINOVATI SVE ZNAKOVE I BROJEVE U SPIL

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < signs.length; j++) {
        deck.push(numbers[i] + signs[j])
    }
}

//TODO: NAPRAVITI SISTEM ZA BROJANJE KARTI I RACUNANJE POENA

//MESANJE SPILA
const rearrange = () => {
    deck.sort(() => {
        return Math.random() - 0.5
    })
}

//TODO: DELJENJE KARATA
const giveCards = () => {
    for (let i = 0; i < 20 && 0 < deck.length; i++) {
        hands[i % 4].push(deck.pop())
    }
}

//TODO: CALCULATE SCORES AND SHOW THEM ON SCREEN
const calcResault = () => {
    let scores = [0, 0, 0, 0];

    for (let i = 0; i < 4; i++) {
        playersPoss[i].forEach(item => {
            scores[i]
        })
    }

}

//TODO: JEDAN IGRACEV RED
//OBICNA LOGIKA ZA BACANJE KARATA I TESTIRANJE ZA KUPLJENJE
const doTurn = () => {
    //TODO: UZIMAMO SVE NEOPHODNE INFORMACIJE (KOJU KARTU BACA)
    num = Number(prompt(`Trenutni igrac: ${names[currPlayer]}\nKarte u ruci: ${hands[currPlayer]}\nPoslednja karta na talonu: ${tableCards[tableCards.length - 1]}\n Unesite redni broj karte koju zelite da bacite (indeksirati od 0)`))

    tableCards.push(hands[currPlayer][num])
    hands[currPlayer].splice(num, 1)

    //AKO JE VRH TALONA(BROJ) JEDNAK BACENOJ KARTI(BROJ), IGRAC KUPI
    if (tableCards.length > 1) {

        if (tableCards[tableCards.length - 1].slice(0, 1) === tableCards[tableCards.length - 2].slice(0, 1)) {
            alert(`Igrac ${names[currPlayer]} nosi karte na talonu \nBroj karata: ${tableCards.length}`)

            while (tableCards.length > 0) {
                console.log(tableCards.length)
                playersPoss[currPlayer].push(tableCards.pop())
                console.log(playersPoss[currPlayer])
            }

            return
        }
    }
}

const counter = (test) => {
    switch (true) {
        case '1' === test:
        case 'A' === test:
        case 'J' === test:
        case 'Q' === test:
        case 'K' === test:
            return 1;
    }

    return 0;
}

//TODO: NAPRAVI GLAVNU FUNKCIJU

//TODO: RENDER CARDS PROGRAMATICALLY

