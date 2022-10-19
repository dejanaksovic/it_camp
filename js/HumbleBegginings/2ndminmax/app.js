niz= []

min= Infinity
max= -Infinity

minIndx= 0;
maxIndx= 0;

for(let i=0; i<10; i++){
    niz.push(i)
}

for(let i= 0; i<10; i++){
    if(niz[i]< min){
        min= niz[i]
        minIndx= i;
    }
    if(niz[i]>max){
        max=niz[i]
        maxIndx= i
    }
}

min=Infinity
max=-Infinity

temp= niz[minIndx]
niz[minIndx]= niz[niz.length]
niz[niz.length]= temp
niz.pop()

temp= niz[maxIndx]
niz[maxIndx]= niz[niz.length]
niz[niz.length]= temp
niz.pop()

for(let i=0; i<10; i++){
    if(niz[i]< min){
        min= niz[i]
    }
    if(niz[i]>max){
        max=niz[i]
    }
}

console.log(min, max)

function doSmth(nesto) {
    console.log(nesto)
}

doSmth("A");

test= [1,2,3,4,5]

test.splice(1, 0, ["a", "b", "c"])
console.log(test)
//OVDE JHE ZADATAK
startnum= 1;
nizTes= [];

while( true ){
 startnum= Number(prompt("UNesite broj"))
 if(startnum%3==0){
    console.log("Fizz")
 }
 if(startnum%5==0){
    console.log("Buzz")
 }
}

alert("Uneli ste neispravan broj")
