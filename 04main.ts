// Generics is powerful feature
// Where it allows us to use reusable functions , classes with different data types
// We ensure type safety without losing flexibility to work

// <> : is generic
// T inside generic is nothing but a unknown type parameter
// T will be later given a type which sets some rules in code

class StorageContainer <T>{

    // here we are making contents private
    // giving it type " T "

    private contents : T[]

    constructor(){
        this.contents = []
    }
    
    addItem(item : T) : void {
        this.contents.push(item)
    }

    getItem(idx : number) : T | undefined {
        return this.contents[idx]
    }
}

const userNames = new StorageContainer<string>();
userNames.addItem("Rohit")
userNames.addItem("Rohan")
userNames.addItem("Rahul")

console.log(userNames.getItem(1))

const userIds = new StorageContainer<number>();
userIds.addItem(34);
userIds.addItem(44);
userIds.addItem(54);

console.log(userIds.getItem(1))