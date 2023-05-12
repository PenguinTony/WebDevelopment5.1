function validateForm(){

    var errors ="";

    //alert('Validate Function called successfully');

    // Get value of element and storing it in variable
    var fullName = document.getElementById('fullName').value;
    // Check if fullName variable is empty
    if(fullName==""){
        //alert("Please enter Full Name");
        //return false;
        errors +="<li>Please enter Full Name.</li>";
        document.getElementById('fullName').classList.add('inputError');
    }
    else{
        document.getElementById('fullName').classList.remove('inputError');
    }
    var email = document.getElementById('email').value;
        
    if(email==""){
        //alert("Please enter a valid Email")
        //return false;
        errors += "<li>Please enter a valid Email.</li>";
        document.getElementById('email').classList.add('inputError');
    }
    else{
        document.getElementById('email').classList.remove('inputError');
    }

    if(errors!=""){
        document.getElementById('errorList').innerHTML = errors;   
        return false;
    }
    else{
        document.getElementById('errorList').innerHTML = errors;
        return true;   
    }
}


function resetForm(){
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('fullName').classList.remove('inputError');
    document.getElementById('nationality').classList.remove('inputError');
    document.getElementById('email').classList.remove('inputError');
    document.getElementById('age').classList.remove('inputError');
    document.getElementById('number').classList.remove('inputError');
    document.getElementById('username').classList.remove('inputError');
    document.getElementById('pass').classList.remove('inputError');


}