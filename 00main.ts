// basic declaration
let name1: string = "Rohit";
let truth: boolean = true;

// array of numbers
let ids: number[] = [1,2,3,4];

// any type of array
let names : any[] = [1,"32","Roman"]

const concatenateValues = (a:string,b:string) : string  => {
    return a+b;
};

// const (keyword)
// concatenateValues (function name)
// a,b (parameters with type string)
// : string (return type of function concatenateValues())

console.log(concatenateValues("Hello ","World"))

const multiple = (a:string,b:boolean,c:()=>void) => {
    return c();
}
// const (keyword)
// multiple (function name)
// a , b , c (parameters with type string , boolean , function with return type void)
// whole multiple function returns the c () function

multiple("Rohit",true,()=>{
    console.log("Normal call back function");
})
// we call function multiple
// do the parameters
// where we get "Normal..." as output because we had the return type void
// and anything we do inside function gets executed not returned

const inception = (a:string,b:number,c:(args:string)=>void) =>{
    c("hiii");
}
// const (keyword)
// inception (function name)
// a , b , c (parameters with type string , boolean , function with parameter string and return type void)
// inception calls parameter c("arg here")

inception("Rohit",25,(args) => {
    console.log(args+ "hello")
})
// inception function is called
// Args have been entered
// function c ( act as default parameter / arg hiii)
// where function prints ( args + " new thing we type in ")