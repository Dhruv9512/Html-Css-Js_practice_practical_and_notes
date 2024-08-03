let button = document.querySelector(".btn-sml");
let output = document.querySelector("#output");
let input = document.querySelector("#input");
output.disabled = true;
//  ----------------------conversion of decimal---------------------
function decimal(inp) {
  let ans = 0;
  let i = 0;
  while (inp !== 0) {
    let temp = inp % 2;
    if (temp === 0) {
      ans = 0 * 10 ** i + ans;
    } else {
      ans = 1 * 10 ** i + ans;
    }
    inp = Math.floor(inp / 2);
    i++;
  }

  return ans;
}

// ---------------------------conversion of octal----------------------
function octal(inp) {
  let ans = 0,
    i = 0,
    temp;
  while (inp !== 0) {
    temp = inp % 10;
    ans = temp * 8 ** i + ans;
    i++;
    inp = Math.floor(inp / 10);
  }

  return decimal(ans);
}

// ------------------------conversion of hex--------------------------
function hex(inp) {
 
  let count=inp.length;
  console.log("length is ",count);
  let ans = 0,
    temp,
    i = 0;
  while (count!==0) {
    temp = inp[count-1];
    console.log("temp is ","temp");
    if (temp >= "1" && temp <= "9") {
      ans += (temp.charCodeAt(0)-48) * (16 ** i);
      console.log("ans is 1 ",ans);
    }
    else if (temp >= "A" && temp <= "F") {
      ans += (temp.charCodeAt(0)-55) * (16 ** i);
      console.log("ans is A ",ans);
    }
    i++;
    count--;
    
  }
  console.log("hex to dec",ans);
  let hex = decimal(ans);
  return hex;
}

button.addEventListener("click", () => {
  

  let choose = document.querySelector(".select").value;
  console.log(choose);

  if (choose === "decimal") {
    let int_input = parseInt(input.value);
    let final_ans = decimal(int_input);
    output.setAttribute("value", final_ans);
  } else if (choose === "octal") {
    let int_input = parseInt(input.value);
    let final_ans = octal(int_input);
    output.setAttribute("value", final_ans);
  } else {
    let int_input = input.value;
   
    
    let final_ans = hex(int_input);
    console.log(final_ans);
    output.setAttribute("value", final_ans);
  }
});
