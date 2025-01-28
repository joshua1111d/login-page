document.getElementById('registerForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (username === ''  email === ''  password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault();
    }
});