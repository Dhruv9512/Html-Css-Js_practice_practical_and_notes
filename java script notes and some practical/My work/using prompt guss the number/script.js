let gameNum=30;

let userinput=prompt("Guss the number: ");

//   Not so valid method. avoid to use infinit loop in any programme.
// for(let i=1;i>=0;i++)
//   {
//         if(userinput!=gameNum)
//         {
//         userinput=prompt("You lose the game. Plese guss again.");
//         }
//         else{
//             alert("Congratulation you won the game.");
//             break;
//         }
//   }



  // valid method

  while(userinput!=gameNum){
    userinput=prompt("You lose the game. Plese guss again.");
  }
  alert("Congratulation you won the game.");

