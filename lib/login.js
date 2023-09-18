var titleDisplay = document.getElementById('title');
var buttonText = document.getElementById('button-text')
var advanceLoginOption = document.getElementById('action-click');
var displaySignup_Name = document.getElementById('signUp-display-name');
var displaySignup_Pass = document.getElementById('signUp-display-pass');
displaySignup_Name.style.display = 'none';
displaySignup_Pass.style.display = 'none';
var isRegAcc = false;
var notification = document.getElementById('text-notification');
notification.removeAttribute('id');
statuslogin = 0;
console.log(statuslogin);

document.getElementById('action-click').onclick = function() {
    isRegAcc = !isRegAcc;
    if (isRegAcc) {
        var textInput = document.getElementById("password-text").value;
        textInput.value = '';
        titleDisplay.innerText = 'Let us Sign up your account';
        advanceLoginOption.innerText = 'Already Register, Login';
        buttonText.textContent = 'Get Started';
        displaySignup_Name.style.display = 'block';
        displaySignup_Pass.style.display = 'block';
        statuslogin = 1;
        console.log(statuslogin);
        notification.innerText = '';
        notification.removeAttribute('id');
    } else {
        var textInput = document.getElementById("password-text").value;
        textInput.value = '';
        titleDisplay.innerText = 'Let us create your account';
        advanceLoginOption.innerText = 'Need Account! Sign up.';
        buttonText.textContent = 'Login';
        displaySignup_Name.style.display = 'none';
        displaySignup_Pass.style.display = 'none';
        statuslogin = 0;
        console.log(statuslogin);
        notification.innerText = '';
        notification.removeAttribute('id');
    }
}
document.getElementById('button-text').onclick = function() {
    if (statuslogin == 1) {
        var textFullName = document.getElementById('nameInput-SignUp').value;
        var textEmail = document.getElementById('emailInput-text').value;
        var textPass = document.getElementById('password-text').value;
        var textComflimPass = document.getElementById('passInput-SignUp').value;
        if (textFullName == '') {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!Full Name cannot be empty';
        } else if (textEmail == '') {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!Email cannot be Empty';
        } else if (textPass == '') {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!Password cannot be Empty';
        } else if (textComflimPass == '') {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!Comflim password cannot be empty';
        } else if (textPass !== textComflimPass) {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!The confirmation password must match the password set';
        } else {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = 'Sign Up Sucessful!';
        }
    } else if (statuslogin == 0) {
        var textEmail = document.getElementById('emailInput-text').value;
        var textPass = document.getElementById('password-text').value;
        if (textEmail == '') {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!login Email must not be empty';
        } else if (textPass == '') {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!Password must not be empty';
        } else {
            notification.setAttribute('id', 'text-notification');
            notification.innerText = '!Login Sucessful';
        }

    }

}