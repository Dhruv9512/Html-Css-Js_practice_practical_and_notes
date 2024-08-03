let a=[10,20,30,40,50]
let b=['D','H','R','U','V']
let c=[50,55.80,"Dhruv",'R',900]


let table = document.querySelector("tbody")
console.log(table);
for(v in a){
  let tr = document.createElement("tr")
  table.appendChild(tr)
  console.log(table);
  for(let i=0;i<3;i++){
    let td=document.createElement("td")
    tr.appendChild(td)
    if(i===0){
    td.innerHTML=a[v]
    }
    else if(i===1){
        td.innerHTML=b[v]
    }
    else{
        td.innerHTML=c[v]
    }
  }
}




// document.write("<table border='5'>")
// document.write("<tr>")
// document.write("<th>"+"Int")
// document.write("</th>")
// document.write("<th>"+"Character")
// document.write("</th>")
// document.write("<th>"+"combine")
// document.write("</th>")
// document.write("</tr>")

// for(v in a){
//   document.write("<tr>")
//   document.write("<td>"+a[v])
//   document.write("</td>")
//   document.write("<td>"+b[v])
//   document.write("</td>")
//   document.write("<td>"+c[v])
//   document.write("</td>")
//   document.write("</tr>")
// }
// document.write("</table>")