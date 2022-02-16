document.getElementById('login-button').addEventListener('click', function(){
    // console.log("login button clicked")
    const emailField = document.getElementById('email-field').value;
    const passwordField = document.getElementById('passowerd-field').value;
    // console.log(emailField, passwordField);
    if (emailField == "mnin@nahid.com" && passwordField == "12345"){
        window.location.href = "bank.html";
    }
    else{
        alert("Enter currect cradiencial.");
    }
})