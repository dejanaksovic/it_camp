// class Car {
//     constructor (brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }

//     Accelerate(accNum) {
//         this.speed += accNum
//     }

//     Break(breakNum) {
//         this.speed-= breakNum
//     }

//     Describe() {
//         console.log(`This is ${this.brand} and is going ${this.speed}km/h`);
//     }
// }

// mojaKorsa = new Car("Corsa", 140);

// mojaKorsa.Break(20);

// mojaKorsa.Describe()

class TV {
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    VolumeUp(amount) {
        this.volume +=amount
        if(this.volume > 100) {
            this.volumne = 10
        }
    }

    VolumeDown(amount) {
        this.volume-= amount;
        if(this.volume < 0) {
            this.volume = 0
        }
    }

    changeChannel(channel) {
        if (channel <= 50 && channel > 0) {
            this.channel = channel
        }
    }
    

    Reset() {
        this.channel = 1
        this.volume = 50
    }

    Status() {
        console.log(`${this.brand} is on channel ${this.channel} and it's volumne is set to ${this.volume}`);
    }
} 

mojTv = new TV("FOX")

mojTv.Status()

mojTv.VolumeUp(60)

mojTv.Status()