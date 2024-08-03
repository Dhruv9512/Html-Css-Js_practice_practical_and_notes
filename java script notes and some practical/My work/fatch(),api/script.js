let url = "https://ifsc.razorpay.com/YESB0DNB002";
console.log(url);

let fun = async () => {
  const response = await fetch(url);
  console.log(response);
 
  let data = await response.json();
 
  console.log(data);
  document.write(data.ADDRESS);
  
  
    
  
  
   
    // let d=document.querySelectorAll(".d");
    // console.log(d);
    // let i=0
    // d.forEach((val) => {
    //   val.innerHTML=data[i].population;
    //   i++;
    // });

  
};
