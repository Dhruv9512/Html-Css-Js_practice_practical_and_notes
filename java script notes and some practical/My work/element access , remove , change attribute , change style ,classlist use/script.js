// create a button and give bg color and other style and display it at start of body.



// let button=document.createElement("button");
// button.innerText="click me";
// button.style.background="red";
// button.style.fontSize="6em";
// button.style.margin="100px";
// button.style.color="white"
// let body=document.querySelector("body");
// body.append(button);
// console.log(button);


//classList    -> this is use when you don't want to overwite your style and content by change the class of element or any other reason.

let p= document.querySelector("p");
//p.setAttribute("class","newpara"); this will overwite the style,-> ye old class me jo style he ushe overwite krega jab hm new class bnayenge.
p.style.fontSize="10rem";
p.setAttribute("class","newpara");
//-> Here both the style is applied using classlist , here we mostly used (add,remove)
p.classList.add("newpara"); 
console.log(p.classList);

let div=document.querySelector("div");
div.classList.add("newpara");


