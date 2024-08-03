let Data="This a website Data.";

class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
   
    webData(){
        console.log("Data= ",Data);
    }
      
}

class student extends user{
    constructor(name,email){
        super(name,email);
    }
    rollNo(roll){
        this.roll=roll;
    }
    marks(s,m){
        console.log(s);
          s.marks=m;
    }
    change(n,roll){
        n.rollNo=roll;
    }
}

class teacher extends user{
    constructor(name,email){
        super(name,email);
    }

    
   
    markschange(s,m){
        s.marks=m;
    }
}

teacher__proto__=student;

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
      
    changeData(data){
        Data=data;
    }
        
}

let student1=new student("Shrub","acdGmail.com");
let teacher1=new teacher("payal","acaGmail");
let admin1=new admin("rohit","sffshGmail");
student1.rollNo="126";
teacher1.marks=("student1","95");

//admin1.changeData("This is a new data for ours website");

