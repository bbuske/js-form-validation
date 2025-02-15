// Create An Event
function register(e) {

    e.preventDefault();
    // Declare Variables For All The Form Fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('password').value;
    let pwd2 = document.getElementById('confirm-password').value;
    // Create Variable For The Message Displayed
    let msg = document.getElementById('msg');

    // Handle Required Fields
    if(name === '' || email === '' || pwd === '' || pwd2 === '') {
        msg.className = 'alert alert-danger';
        msg.innerHTML = 'Error: Please fill out all required fields.';
    } else {
        msg.className = 'alert alert-success';
        msg.innerHTML = 'Registration successful for user ' + name + ' with email ' + email + '.';
    }
}

// Add An Event Listener, Listening To The Created Event, To The Form
document.getElementById('regForm').addEventListener('submit', register, false);
