chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateHash = (length) => {

    let id = ""

    while (length > 0) {
        let random = Math.floor(Math.random()*chars.length)
        id += chars[random]
        length -- ;
    }

    return id;
}

console.log(generateHash(5));