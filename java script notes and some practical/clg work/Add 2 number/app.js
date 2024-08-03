let num1 = prompt("Enter first number:- ")
let num2 = prompt("Enter second number:- ")
num1=parseInt(num1)
num2=parseInt(num2)
if(!isNaN(num1)&&!isNaN(num2) || num1==""&&num2==""){
   let sum = num1+num2
   console.log("The sum of "+num1+"and "+num2+"is:- "+sum);
   document.write("The sum of "+num1+"and "+num2+"is:- "+sum);
}
else{
    console.log("Invalid values....")
    document.write("Invalid values....")
}



