
let marks=[5];
for(let i=0;i<5;i++){
    marks[i]=parseInt(prompt(`Enter ${i+1} student marks to get it's average:-`));
}

let average,total=0;

for(let val of marks){
    total+=val;
}

let div= document.getElementById("time")

console.log("The average of student marks is",average=total/marks.length);

// offer wala programe

let item=[250,645,300,900,50];

let i=0;
for(let val of item){
    item[i]=val-(val/10);
    console.log("Price of item after offer in index=",i,"is",item[i]);
i++;
}
