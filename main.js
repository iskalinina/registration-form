document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const submitButton = document.getElementById('form-button');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('password-confirm');
    const birthDayInput = document.getElementById('birth-day');

    const validateName = (input, errorId) => {
        const value = input.value.trim();
        const regex = /^[A-Za-zА-Яа-яЁё\s\-]{1,50}$/;
        const errorMessage = value.length === 0
            ? 'Обязательное поле'
            : (!regex.test(value))
                ? 'Спецсимволы и цифры недопустимы'
                : '';

        updateFieldState(input, errorMessage, errorId);
    };

    const validateEmail = (input, errorId) => {
        const value = input.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простая проверка email
        const errorMessage = value.length === 0
            ? 'Обязательное поле'
            : (!regex.test(value))
                ? 'Введите корректный email'
                : '';

        updateFieldState(input, errorMessage, errorId);
    };

    const validatePassword = (input, errorId) => {
        const value = input.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const errorMessage = value.length === 0
            ? 'Обязательное поле'
            : (!regex.test(value))
                ? 'Не менее 8 символов (содержит заглавную, строчную буквы, цифру и символ)'
                : '';

        updateFieldState(input, errorMessage, errorId);
    };

    const validatePasswordConfirm = (input, errorId) => {
        const value = input.value;
        const errorMessage = value !== passwordInput.value
            ? 'Пароли не совпадают'
            : '';

        updateFieldState(input, errorMessage, errorId);
    };

    const validateBirthDate = (input, errorId) => {
        const value = input.value;
        const errorMessage = value.length === 0
            ? 'Обязательное поле'
            : (getAge(new Date(value)) < 18)
                ? 'Возраст должен быть не менее 18 лет'
                : '';

        updateFieldState(input, errorMessage, errorId);
    };

    const getAge = (birthDate) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const updateFieldState = (input, errorMessage, errorId) => {
        const errorElement = document.getElementById(errorId);
        if (errorMessage) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('is-shown');
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorElement.textContent = '';
            errorElement.classList.remove('is-shown');
        }

        updateSubmitButtonState();
    };

    const updateSubmitButtonState = () => {
        const isValid = [...form.elements].every(el =>
            (el.type !== 'button' && el.type !== 'submit') ? el.classList.contains('valid') : true
        );
        submitButton.disabled = !isValid;
    };

    firstNameInput.addEventListener('input', () => validateName(firstNameInput, 'first-name-error'));
    lastNameInput.addEventListener('input', () => validateName(lastNameInput, 'last-name-error'));
    emailInput.addEventListener('input', () => validateEmail(emailInput, 'email-error'));
    passwordInput.addEventListener('input', () => validatePassword(passwordInput, 'password-error'));
    passwordConfirmInput.addEventListener('input', () => validatePasswordConfirm(passwordConfirmInput, 'password-confirm-error'));
    birthDayInput.addEventListener('input', () => validateBirthDate(birthDayInput, 'birth-day-error'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Вы зарегистрированы! Welcome!');
    });

    // Видимость пароля
    document.querySelectorAll('.js-toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            const eyeIcon = button.querySelector('img');

            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.src = 'source/icons/eye-on.svg';
            } else {
                input.type = 'password';
                eyeIcon.src = 'source/icons/eye-off.svg';
            }
        });
    });

});
