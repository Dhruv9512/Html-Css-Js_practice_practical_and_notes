let h1 = document.querySelector("#h1")
let h2 = document.querySelector("#h2")
let h3 = document.querySelector("#h3")
let h4 = document.querySelector("#h4")
let h5 = document.querySelector("#h5")
let h6 = document.querySelector("#h6")

let head = document.querySelectorAll("h1")
head.forEach((v)=>{
   v.style.opacity='0';
   v.style.animation='none';
   v.style.color='black'
})

setTimeout(()=>{
   h1.style.opacity='1';
   h1.style.color='white';
   h1.style.animation= 'h5 4s';
},1000)
setTimeout(()=>{
   h2.style.opacity='1';
   h2.style.color= "white";
   h2.style.animation='h5 4s';
},2000)
setTimeout(()=>{
   h3.style.opacity='1';
   h3.style.color='white';
   h3.style.animation='h5 4s';
},3000)
setTimeout(()=>{
   h4.style.opacity='1';
   h4.style.color='white';
   h4.style.animation='h5 4s';
},4000)
setTimeout(()=>{
   h5.style.opacity='1';
   h5.style.color='white';
   h5.style.animation='h5 4s';
},5000)
setTimeout(()=>{
   h6.style.opacity='1';
   h6.style.color='white';
   h6.style.animation='h5 4s';
},6000)