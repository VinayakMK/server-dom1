//let res = document.forms["form1"];

console.log(res);


function registerValidation(){

    const fullname = document.forms["signup"]["fname"].value;

    if(emailId == ''){
        document.getElementById("fullNameError").innerHTML = "Please"
    }

    console.log(fullName);

    return false
}