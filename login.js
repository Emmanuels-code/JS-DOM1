document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessageDiv = document.getElementById('error-message');

    const users = [
        { username: 'admin', password: 'pak123' },
        { username: 'user2', password: 'password456' }
    ];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        errorMessageDiv.textContent = '';

        const username = form.username.value;
        const password = form.password.value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            sessionStorage.setItem('loggedInUser', username); 
            alert('Login successful!');
            window.location.href = 'game.html';
        } else {
            errorMessageDiv.textContent = 'Invalid username or password';
        }
    });

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        alert(`Welcome back, ${loggedInUser}!`);
        window.location.href = 'game.html';
    }
});