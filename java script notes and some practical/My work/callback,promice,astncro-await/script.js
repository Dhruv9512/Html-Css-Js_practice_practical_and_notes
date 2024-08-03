// -------------async-await >> promise >> callback------------

//---------------callback and callback hell problem------------------------

//------------request to API for getting data function(api not available that's why we make function) ---------------------
// function getData(Id, callbackNextData) {
//   setTimeout(() => {
//     console.log("Data of ID ", Id);

//        if(callbackNextData){
//          callbackNextData();
//        }
//   }, 2000);
// }

//*****callback hell problem***********
// in callback hm function1(2,function2())-->  function2()-> parentheses lagans callback nhi ker shakte ishka matlab he ki hm tabhi ush function ko call ker rhe he
//Therefore here we make a another function in which we call our main function Eg:- ()=>{function2()}

// console.log("loading Data 1.....");
// getData(1, () => {
//     console.log("\nloading Data 2.....");
//   getData(2, () => {
//     console.log("\nloading Data 3.....");
//       getData(3, () => {
//         console.log("\nloading Data 4.....");
//          getData(4,()=>{
//             console.log("\nloading Data 5.....");
//              getData(5,()=>{
//                 console.log("\nloading Data 6.....");
//                 getData(6);
//              })
//          });
//        });
//   });
// });

//The above callback is very difficult to understand for programmer,yeah callback horah he inside a callback

//---------------------To solve this problem promise is use---------------
//When we request an API to send data they return a promise which should be padding,resolve,reject
//******Make a Api request function which return a promise to us***************

//promise

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is the data of ", dataId);
      resolve("Done");
    }, 2000);
  });
}
//**********promise chain************

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(4);
  })
  .then((res) => {
    return getData(5);
  })
  .then((res) => {
    console.log("end");
  });

//------------------------- async-await => most used method-----------------------------
// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Data of Id ", dataId);
//        resolve("Done");
//     }, 2000);
//   });

// }
//      async function start(){
//         await getData(1);
//         await getData(2);
//         await getData(3);
//         await getData(4);
//         await getData(5);
//   }
// await is waiting for getting ans of promise by waiting the surrounding programme

//IIFE function (Immediately invoked  function expression)
// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Data of Id ", dataId);
//        resolve("Done");
//     }, 2000);
//   });

// }
//   (async function start(){
//         await getData(1);
//         await getData(2);
//         await getData(3);
//         await getData(4);
//         await getData(5);
//   })();
