import React, { useState } from 'react';
import { loginValidationSchema } from '../Validators';
import Form from '../views/Form/Form';

const FormContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formattedData, setFormattedData] = useState(JSON.stringify({email, password}));

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
        setFormattedData(JSON.stringify({email, password, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`${email}: ${password}`);

        setEmail('');
        setPassword('');
        setFormattedData(JSON.stringify({email: '', password: ''}));

        Array.from(document.querySelectorAll('input')).forEach(input => {input.value = ''});
    }

    const props = {
        data: {
            email,
            password,
            formattedData,
        },
        handleChange,
        handleSubmit,
        loginValidationSchema,
    }

    return(
        <Form {...props} />
    );
}

export default FormContainer;