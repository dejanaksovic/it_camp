//CARD CLASS
class Card {
    constructor(color, sign, number) {
        this.color = color
        this.sign = sign
        this.number = number
    }

    render(element) {
        element.style.display = "block"
        let temp = document.createElement("div")
        temp.style.color = this.color

        let inner = `<p>${this.number}${this.sign}</p>
        <p style = "position: absolute; bottom: 0; right: .35rem; transform: rotate(180deg)">${this.number}${this.sign}</p>
        `

        temp.innerHTML = inner

        element.appendChild(temp)
    }
}


//Vizualni divovi za karte
const VizCards = document.querySelectorAll(".card")

//POTREBNO ZA SPIL
signs = ["P", "K", "H", "T"]
numbers = [];
deck = [];

//NEOPHODNO IGRI
players = [
    {
        name: "",
        hand: [],
        posession: []
    },
    {
        name: "",
        hand: [],
        posession: []
    },
    {
        name: "",
        hand: [],
        posession: []
    },
    {
        name: "",
        hand: [],
        posession: []
    }
]

//TRENUTNO NA TALONU
tableCards = [];

//RESET POS
const resetCardViz = (element) => {
    element.innerHTML = ""
    element.style.display = "none"
}

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
        let color = ""

        switch (signs[j]) {
            case "K":
                color = "red"
                break;
            case "H":
                color = "red"
                break;
            default:
                color = "black"
        }

        deck.push(new Card(color, signs[j], numbers[i]))
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
        players.hand[i%4].push(deck.pop())
    }
}

//TODO: JEDAN IGRACEV RED


//OBICNA LOGIKA ZA BACANJE KARATA I TESTIRANJE ZA KUPLJENJE
const doTurn = (inx, cardInx) => {
    tableCards.push(players[inx].hand[cardInx])
    if (tableCards[tableCards.length - 1] == tableCards[tableCards.length - 2]) {
        players[inx].posession = players[inx].posession.concat(tableCards)
        tableCards.length = 0
    }
}

//TODO: NAPRAVI GLAVNU FUNKCIJU

//TODO: RENDER CARDS PROGRAMATICALLY

//TESTING SPACE
rearrange()
giveCards()

//MAIN LOOP SIMULATION
const inx = 0

players[i].hand.forEach((element, index) => {
    element.render(VizCards[index])
    console.log(element, VizCards[index]);
});


