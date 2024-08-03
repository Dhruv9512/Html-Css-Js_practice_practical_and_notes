let choose_image = document.querySelectorAll(".image");
console.log(choose_image);
let winner = document.querySelector("#print_winner");
let winner2 = document.querySelector("#print_winner2");
let player = document.querySelector("#you");
let computer_choose = document.querySelector("#computer");
let p_count=document.querySelector(".p_count");
let c_count=document.querySelector(".c_count");


//Function to count the winner
let player_count=0,computer_count=0;
function Count_score(win){
    if (win==="w") {
        player_count+=1;
        p_count.innerHTML=player_count;
    }
    else if(win==="l"){
        computer_count+=1;
        c_count.innerHTML=computer_count;
    }
}
// show image function
function show_play(name, c, p) {
  console.log("this is a", c);
  if (p === "rock") {
    player.setAttribute("src", "ro.png");
    player.classList.add("image2");
    player.classList.remove("image");
  }
  if (c === "rock") {
    computer_choose.setAttribute("src", "ro.png");
    computer_choose.classList.add("image2");
    computer_choose.classList.remove("image");
  }

  if (p === "paper") {
    player.setAttribute("src", "pa.png");
    player.classList.add("image2");
    player.classList.remove("image");
  }
  if (c === "paper") {
    computer_choose.setAttribute("src", "pa.png");
    computer_choose.classList.add("image2");
    computer_choose.classList.remove("image");
  }
  if (p === "scissors") {
    player.setAttribute("src", "se.png");
    player.classList.add("image2");
    player.classList.remove("image");
  }
  if (c === "scissors") {
    computer_choose.setAttribute("src", "se.png");
    computer_choose.classList.add("image2");
    computer_choose.classList.remove("image");
  }
}
//computer generated ans
function computer() {
  const computer_ans = ["rock", "paper", "scissors"];
  let ans = Math.floor(Math.random() * 3);
  console.log(ans);
  return computer_ans[ans];
}

//check winner
function check(computer, player) {
  console.log(computer, player);
  if (computer === player) {
    return "d";
  } else {
    if (
      (player === "paper" && computer === "rock") ||
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "w";
    } else {
      return "l";
    }
  }
}

// show the winner function
function show_winner(r) {
  //winner
  if (r === "d") {
    winner.setAttribute("class", "winner_draw");
    winner.innerHTML = `It's draw.`;
  } else if (r === "w") {
    winner.setAttribute("class", "winner_win");
    winner.innerHTML = `congratulation you win.`;
  } else {
    winner.setAttribute("class", "winner_loss");
    winner.innerHTML = `Sorry you loss.`;
  }
}

choose_image.forEach((val) => {
  val.addEventListener("click", () => {
    let player = val.getAttribute("id");
    console.log(player);
    let ans = computer();
    let winner_name = check(ans, player);
    show_play(winner_name, ans, player);
    Count_score(winner_name);
    show_winner(winner_name);
  });
});
