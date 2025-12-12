function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // LOGIN CREDENTIALS
    if (user === 'Ando' && pass === '123456') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('portfolio').style.display = 'block';
    } else {
        document.getElementById('error-msg').innerText = "Invalid login. Try again.";
    }
}

function logout() {
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('login-section').style.display = 'flex';
}