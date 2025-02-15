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
    // Make Sure Every Field is filled out
    if(name === '' || email === '' || pwd === '' || pwd2 === '') {
        msg.className = 'alert alert-danger';
        msg.innerHTML = 'Error: Please fill out all required fields.';
    } else {
        // Check If Name Is At Least 3 Characters Long
        if(name.length < 3) {
            msg.className ="alert alert-danger";
            msg.innerHTML ='Name must be at least 3 characters.';
        } else {
            // Check For Basic Email Requirements
            let atpos = email.indexOf('@');
            let dotpos = email.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length) {
                msg.className ='alert alert-danger';
                msg.innerHTML = 'Please use a valid email address!';
            } else {
                // Check If The Entered Password Match
                if (pwd !== pwd2) {
                    msg.className = 'alert alert-danger';
                    msg.innerHTML = 'Error: Passwords don\'t match';
                // If Everything Goes Well, Show Success Message
                } else {
                    msg.className = 'alert alert-success';
                    msg.innerHTML = 'Registration successful for user ' + name + ' with email ' + email + '.';
                }
            }
        }
    }
}

// Add An Event Listener, Listening To The Created Event, To The Form
document.getElementById('regForm').addEventListener('submit', register, false);
