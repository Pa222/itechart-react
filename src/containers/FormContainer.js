import React, { useState } from 'react';
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

    const handleSubmit = () => {
        console.log(`${email}: ${password}`);

        setEmail('');
        setPassword('');
        setFormattedData(JSON.stringify({email: '', password: ''}));
    }

    const props = {
        email,
        password,
        formattedData,
        handleChange,
        handleSubmit,
    }

    return(
        <Form {...props} />
    );
}

export default FormContainer;