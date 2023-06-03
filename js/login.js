function validateLoginForm() {
    var isSubmitted = true; 
    let userName = document.getElementById('content-log__username');
    let password = document.getElementById('content-log__password');
    if(userName.value == '') {
        isSubmitted = false; 
        let userError = document.getElementById('user_error');
        userError.innerHTML = "Username cannot be blank"; 
             
    }
    if(password.value == '') {
        isSubmitted = false; 
        let passError = document.getElementById('pass_error'); 
        passError.innerHTML = "Password cannot be blank";
        
    }
    if(userName != 'admin' || password != '123456') { 
        isSubmitted = false;
        document.getElementById('login-fail').innerHTML = "Login unsuccessful";
        return isSubmitted;
    }
    
    return isSubmitted;
    }
    