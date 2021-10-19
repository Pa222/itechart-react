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

    const validate = (pass) => {
        return pass.length < 6 ? false : true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate(password)){
            alert("Entered password less then 6 symbols");
            return;
        }

        console.log(`${email}: ${password}`);

        setEmail('');
        setPassword('');
        setFormattedData(JSON.stringify({email: '', password: ''}));

        Array.from(document.querySelectorAll('input')).forEach(input => {input.value = ''});
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