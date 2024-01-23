import style from './Form.module.css';
import React, { useState } from 'react';
import validation from '../../hooks/validation';

const Form = (props) => {

    // Estado local para manejar errores
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    // Estado local userData
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Limpiar error cuando se edita el campo
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar el formulario utilizando la función de validación
        const formErrors = validation(userData);

        // Actualizar el estado de errores
        setErrors(formErrors);

        // Si no hay errores, ejecutar la función login y pasar userData como parámetro
        if (Object.keys(formErrors).length === 0) {
            props.login(userData);
        }
    };

    return (
        <div className={style.container}>
            <form className={style.formcontainer} onSubmit={handleSubmit}>
                <img className={style.image} src={process.env.PUBLIC_URL + '/login.PNG'} alt='foto' />
                <label>EMAIL</label><br></br>
                <input
                    type="text"
                    placeholder="Escriba su email aquí..."
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                ></input>
                <span className={style.error}>{errors.email}</span>
                <br></br>
                <label>PASSWORD</label><br></br>
                <input
                    type="password"
                    placeholder="Escriba su contraseña aqui..."
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                ></input>
                <span className={style.error}>{errors.password}</span>
                <br></br>
                <button type="submit" className={style.IniButton}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
