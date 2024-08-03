let compenies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

compenies.shift();
console.log("After removing first compnie the array is:\n",compenies);
compenies.splice(1,1,"Ola");
console.log("After remove uber and Ola the array is :\n",compenies);
compenies.push("Amazon");
console.log("Add amazon at the end the array is:\n",compenies);