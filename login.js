document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessageDiv = document.getElementById('error-message');

    const users = [
        { username: 'admin', password: 'pak123' },
        { username: 'user2', password: 'password456' }
    ];
    