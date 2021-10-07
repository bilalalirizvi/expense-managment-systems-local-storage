'use strict'

// SignUp

// First letter Capitalize Function
let Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toUpperCase();
}

// SignUp Function
let signupForm = (eve) => {
    eve.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let conPassword = document.getElementById('conPassword').value;

    // Confirm Password validation
    if (password !== conPassword) {
        swal("Error!", "Password do not match!", "error");
        return;
    }

    // Check Email is already Exits
    let checkEmail = JSON.parse(localStorage.getItem('All Users'));
    if (!checkEmail) {
        checkEmail = [];
    }
    for (let i = 0; i < checkEmail.length; i++) {
        if (email == checkEmail[i].email) {
            console.log(checkEmail[i].email)
            swal(` `, `Email already exits!`, `error`)
            return
        }
    }

    // User Data Object
    const userSignupData = {
        userId: RandomId(),
        username: username,
        email: email,
        password: password,
    }

    let allUsers = JSON.parse(localStorage.getItem('All Users'));
    if (!allUsers) {
        allUsers = [];
    }
    allUsers.push(userSignupData)

    localStorage.setItem('All Users', JSON.stringify(allUsers))

    swal(`Welcome ${Capitalize(username)}!`, `Your sign up was successful!`, `success`)
        .then((value) => {
            redirect('signupToLogin')
        });

}

// Form OnSubmit
const form = document.getElementById('form');
form.onsubmit = signupForm;


