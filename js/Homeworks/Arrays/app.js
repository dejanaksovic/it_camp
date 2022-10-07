let array= new Array()

//TODO: FILL AN ARRAY
for(let i=0; i<10; i++){
    array.push(Number(prompt("Enter a number")))
}

//TODO: RESENJE PREKO DVE PROMENLJIVE
let min= Infinity;
let max= -Infinity;

for( let i=0; i<array.length; i++ ) {

    if( min>array[i] ) {
        min=array[i]
    }

    if( max<array[i] ) {
        max=array[i]
    }
}

alert(`${min}, ${max}`)

//TODO: RESENJE PREKO MIN/MAX
alert(`${Math.min(...array)} ${Math.max(...array)}`)

//TODO: RESENJE PREKO SORT
array.sort((a, b) => {
    return a-b
})

alert(`${array[0]}, ${array[array.length-1]}`)
console.log(array)