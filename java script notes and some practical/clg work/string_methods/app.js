let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let s1 = document.querySelector("#s1").value;
  let s2 = document.querySelector("#s2").value;
  let ans = document.querySelector(".ans");

  setTimeout(() => {
    let upper = s1.toUpperCase();
    let up_p = document.createElement("p");
    ans.appendChild(up_p);
    up_p.textContent = `The uppercase of string 1 is:- ${upper}`;
  }, 1000);

  setTimeout(() => {
    let lower = s2.toLowerCase();
    let low_p = document.createElement("p");
    ans.appendChild(low_p);
    low_p.textContent = `The lowercase of string 2 is:- ${lower}`;
  }, 1500);

  setTimeout(() => {
    let length = s1.length;
    let len_p = document.createElement("p");
    ans.appendChild(len_p);
    len_p.textContent = `The length of string 1 is:- ${length}`;
  }, 2000);

  setTimeout(() => {
    let marg = s1.concat(s2);
    let marg_p = document.createElement("p");
    ans.appendChild(marg_p);
    marg_p.textContent = `The merging of string 1 and string 2 is:- ${marg}`;
  }, 2500);
});
