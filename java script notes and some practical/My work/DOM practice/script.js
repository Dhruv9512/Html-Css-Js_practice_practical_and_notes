// practical 1.

let h2=document.querySelector("h2");
let added=" from apna collage studend";
 h2.innerText+=added;
 console.log(h2);

//  practical 2.
let div=document.querySelectorAll(".box");
let i=1;
for( val of div){
    val.innerText=`${i} div`;
    i++;
}

console.log(div);