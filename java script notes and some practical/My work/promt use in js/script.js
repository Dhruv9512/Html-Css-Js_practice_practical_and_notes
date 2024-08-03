// Get user to input a number using prompt("Enter a number:-"). Check if the number is a multiple of 5 or not.


alert("Information is not complete.\n check again.");

let input = prompt("Enter a number:- ");

if(input%5===0){
    console.log("The number",input,"is Multiple of 5");
}
else{
    console.log("The number",input,"is not Multiple of 5");
}