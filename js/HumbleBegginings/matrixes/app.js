first= [1, 0, 2, 3, 4]
second= [3, 5, 6, 7, 8, 13]
newarr= []

for (let i=0; i<second.length; i++) {
    if( ! (undefined==first[i]) )
    second[i]+= first[i]
}

//DRUGI NACIN
for(let i=0; i< second.length; i++ ) {
    newarr.push(second[i])
}

for(let i=0; i< first.length; i++) {
    newarr[i]+= first[i]
}

console.log(newarr)