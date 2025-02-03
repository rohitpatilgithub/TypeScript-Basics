const printId = (id : string | number) => {
    console.log("ID : "+id)
}
printId(234253235);

// const (data type)
// printId ()
// parameters are where we have type string (or) number (id : string | number)
// it may happen we have more type we want to add

// Thus we have type alias
// user combine with unions
type userId = number | string | boolean | number[]
const printUserId = (id : userId) => {
    console.log(`User id is : ${id}`)
}
let a = '2335435bAwf'
printUserId(a);

// similarly if we have a user & business partner interface
// we can combine both interface using intersection

interface BusinessPartner {
    name : string;
    creditScore : number;
}

interface User {
    id : number;
    email : string;
}

// here we did intersection of two interfaces
type emp = BusinessPartner & User;

const signContract = (employee : emp): void => {
    console.log(`Employee ${employee.name} signed contract with email id ${employee.email}`)
}

signContract({
    name : "Rohit",
    creditScore : 20,
    id : 123,
    email : "rohit@gmail.com"
})
