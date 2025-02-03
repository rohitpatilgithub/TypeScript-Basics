// enums is Setof constants and makes it more readable and usable

enum LoginError {
    NoUser,
    WrongPass,
    Invalid,
    Internal
}

const printError = (error : LoginError) => {
    if(error == LoginError.NoUser){
        console.log("User not found")
    } else if(error == LoginError.WrongPass){
        console.log("Enter correct password")
    } else if(error == LoginError.Invalid){
        console.log("Enter correct user name & password")
    }else if(error == LoginError.Internal){
        console.log("Some internal issue")
    }
    else{
        console.log("404 : Something went wrong")
    }
}

printError(LoginError.NoUser);