let button = document.querySelectorAll(".btn");
let show = document.querySelector(".print-winner");
let reset = document.querySelector(".reset");
let mode = document.querySelector(".btn_mode");
let mode_div = document.querySelector(".mode");
let h1 = document.querySelector("h1");
show.classList.remove("print-winner");

let mode_turn = true;
let turn = true;
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function disabled() {
  for (let i of button) {
    i.disabled = true;
  }
}

function color(){
  if(mode_turn){
    show.classList.add("print-winner");
    show.classList.remove("print-winner_mode");
  }
  else{
    show.classList.add("print-winner_mode");
    show.classList.remove("print-winner");
  }
}

function show_winner(winner) {
  console.log(winner);
  let win = winner;
  show.innerHTML = `Congratulation player ${win} win the match.`;
  color();
}
//--------------------------check winner-----------------------------------
function check() {
  for (let patten of winner) {
    if (
      button[patten[0]].innerHTML != "" &&
      button[patten[1]].innerHTML != "" &&
      button[patten[2]].innerHTML != ""
    ) {
      if (
        button[patten[0]].innerHTML === button[patten[1]].innerHTML &&
        button[patten[0]].innerHTML === button[patten[2]].innerHTML
      ) {
        disabled();
        console.log("winer");
        show_winner(button[patten[0]].innerHTML);
      }
    }
  }
}
// ------------------loop to access all the button and apply the onclick event------------
button.forEach((val, index) => {
  button[index].addEventListener("click", () => {
    if (turn) {
      button[index].innerHTML = "x";
      button[index].disabled = true;
      console.log("1");
      turn = false;
      check();
    } else {
      button[index].innerHTML = "o";
      button[index].disabled = true;
      turn = true;
      console.log("2");
      check();
    }
  });
});

//-------------------------reset-------------------------
reset.addEventListener("click", () => {
  show.classList.remove("print-winner");
  show.innerHTML = "";
  for (let i of button) {
    i.disabled = false;
    i.innerHTML = "";
  }
});
//-------------------Mode----------------------------
let body = document.querySelector("body");
mode.addEventListener("click", () => {
  if (mode_turn) {
    mode_turn = false;
    // mide button
    mode.classList.add("btn_mode_lig");
    mode.classList.remove("btn_mode");
    mode_div.classList.add("mode_lig");
    mode_div.classList.remove(".mode");
    //    bg color
    body.classList.add("body_mode");
    body.classList.remove("body");
    //h1 color

    h1.classList.add("h1_mode");
    h1.classList.remove("h1");
    // reset color
    reset.classList.add("reset_mode");
    reset.classList.remove("reset");
    //button color
    for (let btn of button) {
      btn.classList.add("btn_main_mode");
      btn.classList.remove("btn");
    }
    //winner color
    if (show.innerHTML!== " ") {
      color();
    }
  } else {
    mode_turn = true;
    // mide button
    mode.classList.remove("btn_mode_lig");
    mode.classList.add("btn_mode");
    mode_div.classList.remove("mode_lig");
    mode_div.classList.add(".mode");

    //    bg color
    body.classList.remove("body_mode");
    body.classList.add("body");

    //h1 color
    h1.classList.remove("h1_mode");
    h1.classList.add("h1");

    // reset color
    reset.classList.remove("reset_mode");
    reset.classList.add("reset");

    //button color
    for (let btn of button) {
      btn.classList.remove("btn_main_mode");
      btn.classList.add("btn");
    }

    // winner color
    console.log(show.innerHTML);
    if (show.innerHTML!== " ") {
      color();
    }
  }
});
