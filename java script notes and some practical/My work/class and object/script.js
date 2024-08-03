//---------------------------Normal example of class and object-------------------

// class student{
//     constructor (cours){
//           this.cours=cours;
//     }
//       name(name){
//         this.name=name;
//      }

//      roll (roll){
//          this.rollNo=roll;
//      }

//      div (div){
//          this.division=div;
//      }
// }


// let Dhruv=new student("BCA");
// Dhruv.name("dhruv sharma");
// Dhruv.roll("126");
// Dhruv.div("B");

//----------------prototype example ---------------------
// const student={
//     name:(name)=>{
//         name=name;
//     }
// }

// const employee={
//    salary: (salary)=>{
//     salary=salary;
//    }
// }

// employee__proto__=student;   employee get name property in his prototype

// employee.name="dhruv sharma";
// student.name="hitu";
// employee.salary="20000";

// ------------------inheritance---------------------

// class schoolStudent {
//     name (name){
//         this.name=name;
//     }

//     roll (roll){
//         this.rollNo=roll;
//     }
// }

// class clgStudent extends schoolStudent{
//     course(c){
//         this.course=c;
//     }

//     year(y){
//         this.year=y;
//     }
// }


// let raj=new schoolStudent();
// raj.name("raj shahs");      //***********we can give detail like this ***********
// raj.roll("12");


// let aj=new clgStudent();
// aj.name="aj rajput"; //***********we can give detail like this ***********
// aj.roll="1558";
// aj.course="BCA";
// aj.year="4";




