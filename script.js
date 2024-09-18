function formValidation(){
/*
Full Name: Required, must be at least 3 characters long, letters only.
Email: Required, must follow a valid email format.
Password: Required, at least 8 characters long, must contain at least one number.
Confirm Password: Must match the password field.
Age: Required, must be a number and at least 18 years old.

*/

event.preventDefault()
 
let fullName = inputFullName.value
let email = inputEmail.value
let password = inputPass.value
let passConfirmation = inputConfirmationPass.value
let age = parseInt(inputAge.value)

let validationFullName = false
let validationPass = false
let validationAge = false

if (fullName.length >= 3){
    validationFullName = true
}else{
    console.log("The name length must be greater than 3")
}

if (password.length >= 8 &&  passConfirmation === password){
    validationPass = true
}else {
    console.log("The pass length must be >= 8 or the pass does not match with the confirmation pass")
}

if ( age > 18 ) {
    validationAge= true
}else{
    console.log("Age must be above 18")
}


if (validationFullName === true && validationAge === true && validationPass === true ){

    console.log("Pass Validation")

}else {
    console.log("Wrong Validation")
}


}