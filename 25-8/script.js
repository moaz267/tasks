document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('user-input');
    const container = document.querySelector('.input-container');
    const errorMessage = document.getElementById('error-message');

    input.addEventListener('input', function() {
        if (input.value.length < 6) {
            container.classList.add('error');
            errorMessage.textContent = 'Most be at least 6 digits';
            errorMessage.style.display = 'block'; 
        } else {
            container.classList.remove('error');
            errorMessage.textContent = ''; 
            errorMessage.style.display = 'none'; 
        }
    });
});

