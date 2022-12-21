window.onload = function () {
    let username_error = document.getElementById('username-error');
    let email_error = document.getElementById('email-error');
    let password_error = document.getElementById('password-error');
    let confirm_error = document.getElementById('confirm-error');
    let submit = document.getElementById('submit');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    submit.addEventListener('click', function () {
        username_error.style.display = "none";
        email_error.style.display = "none";
        password_error.style.display = "none";
        confirm_error.style.display = "none";
        if (document.getElementById('username').value === "") {
            username_error.textContent = "User name is required.";
            username_error.style.display = "block";
        }
        if (document.getElementById('email').value === "") {
            email_error.textContent = "Email is required.";
            email_error.style.display = "block";
        }else{
            if(!document.getElementById('email').value.match(validRegex)){
                email_error.textContent = "Email format is Wrong.";
                email_error.style.display = "block";
            }
        }
        if (document.getElementById('password').value == "") {
            password_error.textContent = "Password is required.";
            password_error.style.display = "block";
        }
        if (document.getElementById('confirm-password').value == "") {
            confirm_error.textContent = "Confirm Password is required.";
            confirm_error.style.display = "block";
        }        
        if(document.getElementById('password').value.length<8){
            password_error.textContent = "Enter atleast 8 characters";
            password_error.style.display = "block";
        }
        if(document.getElementById('password').value !== document.getElementById('confirm-password').value){
            confirm_error.textContent = "Confirm Password is not same.";
            confirm_error.style.display = "block";
        }
        if(username_error.style.display == "none" && email_error.style.display == "none" && password_error.style.display == "none" && password_error.style.display == "none" && confirm_error.style.display == "none"){
            alert('Submitted Successfully')
        }
    })
}
