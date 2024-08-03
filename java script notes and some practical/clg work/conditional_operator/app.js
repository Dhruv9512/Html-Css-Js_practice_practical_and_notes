
let btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    console.log(a, b);
    let odd_even = document.querySelector("#odd_even").value;
    let age = document.querySelector("#age").value;
    console.log(typeof(a),typeof(b),typeof(odd_even),typeof(age));
  a > b ? console.log(a, "is max!") : console.log(b, "is max!");
  odd_even % 2 === 0
    ? console.log(odd_even, "is a even number!")
    : console.log(odd_even, "is a odd number!");
  age >= 18
    ? console.log("Congratulation you are eligible for voting!")
    : console.log("Sorry you are not eligible for voting!");
});

