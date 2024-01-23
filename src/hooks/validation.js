// validation.js

// Validar el formato del correo electrónico utilizando una expresión regular
const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validar la longitud del nombre de usuario
const isUsernameLengthValid = (username) => {
    return username.length <= 35;
};

// Validar la contraseña: al menos un número y longitud entre 6 y 10 caracteres
const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*\d).{6,18}$/;
    return passwordRegex.test(password);
};

// Función principal para validar el formulario
const validation = (userData) => {
    const errors = {};

    // Validar email
    if (!userData.email) {
        errors.email = 'Campo obligatorio';
    } else if (!isEmailValid(userData.email)) {
        errors.email = 'Formato de correo electrónico inválido';
    }

    // Validar longitud del nombre de usuario
    if (!isUsernameLengthValid(userData.email)) {
        errors.email = 'El correo electrónico no puede tener más de 35 caracteres';
    }

    // Validar contraseña
    if (!userData.password) {
        errors.password = 'Campo obligatorio';
    } else if (!isPasswordValid(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número y tener una longitud entre 6 y 10 caracteres';
    }

    return errors;
};

export default validation;
