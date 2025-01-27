//functions that creates objects
// function personmaker(name ,age ){
//     const person ={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi! I am ${this.name}`)
//         },
//     };
//     return person;
// }

let p1 = personmaker("ashu",12);
let p2 = personmaker("adam",13);

p2.talk() // hi! I am ashu

p1.talk() == p2.talk() //false bcz every object makes seperate copy for its talk

//===========================================using new keyword=============================================================

function person(name ,age ){
    this.name=name;
    this.age=age;
    console.log(this)
    
}

person.prototype.greet = function(){
       console.log(`hi , my name is ${this.name}`)
};
let p3 = new person("ashu",12);
let p4 = new person("adam",13);

p3.greet === p4.greet //true bcz both are at same place


//============================================CLASSES=====================================================================

class human{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    speak(){
        console.log(`Hi ! myself ${this.name}`)
    }
}


let p6 = new human("yash",23)
let p8 = new human("yash",232)


//==================================Inheritance==========================================================================

class hooman{
    constructor(name,age){
        console.log('hooman constructor')
        this.name=name
        this.age=age
    }

    speak(){
        console.log(`Hi ! myself ${this.name}`)
    }
}
class student extends hooman{
    constructor(name,age,course){
       console.log('student constructor')
       super(name,age) //to call parent class constructor
       this.course=course;
    }

    //override parent fn
    speak(){
        console.log(`Hi ! i am new student`)
    }
    }


class teacher extends hooman{
    constructor(name,age,subject){
       console.log('tecaher constructor')
       super(name,age) //to call parent class constructor
       this.subject=subject;
    }
    }


