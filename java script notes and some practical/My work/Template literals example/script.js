let object={
    item:"pen",
    price:10
};


//Normal method to print it
  console.log("The price of",object.item,"is",object.price,"rupess");
// here only "" things is part of string"

  // by using template literals

  let obj=`The price of ${object["item"]}is ${object["price"]} rupess`;  

//  -> here all sentence is part of string 

  console.log(obj);