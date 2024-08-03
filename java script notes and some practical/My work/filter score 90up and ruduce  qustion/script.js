
//store student marks who get 90 up.

// let arr=[25,54,69,98,90,45,76,86,95];

// function score_90_up(val){
//     return val >=90;
// }

// let newarr=arr.filter(score_90_up);
// console.log(newarr);





                  //Take number and creates number from 1 to n and perfom following thing.
    

let n=prompt("Enter number to create a array:- ");

let array=[parseInt(n)];
for (let i = 0; i < n; i++) {
    array[i]=i+1;
    
}


console.log("Original array :- ",array);

                   // use reduce method to calculate sum of all number.

function sum(pre,curr){
     return pre+curr;
}

let arr=array.reduce(sum);
console.log("sum of array is:- ",arr);


                     //use reduce methid to calculate product of all number in the array.
  function product(pre,curr){
     return pre*curr;
 }

 let parr=array.reduce(product);
 console.log("product of array is:- ",parr);
