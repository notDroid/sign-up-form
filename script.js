const pswd = document.querySelector('#pswd');
const cp = document.querySelector('#cp');

cp.addEventListener('input', validate)

function validate() {
    if (pswd.value != cp.value) {
        cp.setCustomValidity('Passwords do not match')
    } else {
        cp.setCustomValidity('')
    }
}