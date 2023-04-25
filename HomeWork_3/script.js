// Select 'Sign Up' and 'Sign In' buttons
const signUpButton = document.getElementById('register');
const signInButton = document.getElementById('login');

// Event listeners for the buttons
signUpButton.addEventListener('click', handleSignUp);
signInButton.addEventListener('click', handleSignIn);

function handleSignUp() {
    // Get user input
    const username = document.querySelector('.usernameInput').value;
    const email = document.querySelector('.emailInput').value;
    const verifyEmail = document.querySelector('.verifyEmailInput').value;
    const password = document.querySelector('.passwordInput').value;
    const verifyPassword = document.querySelector('.verifyPasswordInput').value;

    // Validate user input
    if (username && email && verifyEmail && password && verifyPassword) {
        if (email === verifyEmail && password === verifyPassword) {
            // Perform registration (add your own logic here)
            console.log('User registered:', {username, email, password});
            alert('User registered: ' +
                ' username: '+ username+
                ' email: ' + email +
                ' password: ' + password);
        } else {
            alert('Email or password does not match');
        }
    } else {
        alert('Please fill out all fields');
    }
}

function handleSignIn() {
    // Get user input
    const email = document.querySelector('.login input[name="current-email"]').value;
    const password = document.querySelector('.login input[name="current-password"]').value;

    // Validate user input
    if (email && password) {
        // Perform login (add your own logic here)
        console.log('User logged in:', {email, password});
        alert('User logged in:' +
            ' email : ' + email+
            ' password : ' + password);
    } else {
        alert('Please fill out all fields');
    }
}