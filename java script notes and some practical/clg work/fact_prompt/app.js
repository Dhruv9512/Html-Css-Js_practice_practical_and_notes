let number = parseInt(prompt("Enter a number it's factorial:- "))
let em=parseInt("")

let f=1
if(!isNaN(number)){
    for(let i=1;i<=number;i++){
        f*=i
    }
    alert("The factorial of "+number+" is:- "+f)
    document.write("The factorial of "+number+" is:- "+f)
}
else{
    alert("You enter invalid value....")
    document.write("You enter invalid value....")
}