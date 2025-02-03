// Interfaces and types
interface UserInterface {
    name:string;
    age:number;
    gender?:string;
    greet(message : string) : void;
}

// we hasn't used interface thus rules don't apply
let User1 = {
    name : "Rohit",
    age : "90", // here we have assigned / declared wrong data type
    gender : "M"
}

let User0 : UserInterface = {
    name: "Rohan",
    // age:"90",this throws an error
    age : 91,
    // it is ok if we don't declare Gender
    greet(message) {
        console.log("Name is : "+message)
    },
}

// let (keyword)
// User0 (Obj name)
// type of User0 must be UserInterface
// Note : All imp values must be entered in interface
// ? not defined ones can be neglected

// Here we do check whether our User0 has gender
if(!User0.gender){
    console.log("No gender defined")
}
else{
    console.log(User0.gender)
}

User0.greet("Hello")