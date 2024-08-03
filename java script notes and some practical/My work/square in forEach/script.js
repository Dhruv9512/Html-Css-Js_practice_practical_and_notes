let arr=[1,2,3,4,5,6,7,8,9];
function square(val){
    console.log(val*val);
}
function even(val){
    return val%2===0;
}
 let newarr=arr.filter(even);
 arr.forEach(square);
 console.log(newarr);
  console.log(arr);                         
//  => forEach  not cahnge the orignal array and also not return any thing.