const hyperform = require('hyperform');

hyperform.default(window);

const email = document.getElementById('email');
const password = document.getElementById('password');
const colour = document.getElementById('colour');
const animals = document.querySelectorAll('input[name="animal"]');
const tiger = document.getElementById('tiger');
const tigerType = document.getElementById('tiger_type');

function validateElement(element, condition, message) {
    if (message) {
        element.setCustomValidity(condition ? '' : message);
    }
    element.parentElement.className = element.validity.valid ? '' : 'error';
    element.reportValidity();
    return element.validity.valid;
}

function validatePassword() {
    const condition = password.value.length >= 8;
    validateElement(password, condition, 'Password must be at least 8 characters long.');
}

function validateAnimal() {
    const length = Array.prototype.reduce.call(animals, (acc, box) => {
        if (box.checked) {
            return acc + 1;
        }
        return acc;
    }, 0);
    return validateElement(animals[0], length >= 2, 'You must choose at least 2 animals');
}

function validateTigerType() {
    const condition = !tiger.checked || tigerType.value.length > 0;
    return validateElement(tigerType, condition, 'You must provide a type for your tiger.');
}

email.addEventListener('keyup', () => validateElement(email));
password.addEventListener('keyup', () => validatePassword());
colour.addEventListener('change', () => validateElement(colour));
Array.prototype.forEach.call(animals, box => box.addEventListener('change', () => validateAnimal()));
tigerType.addEventListener('keyup', () => validateTigerType());
tiger.addEventListener('change', () => validateTigerType());
