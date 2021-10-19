import React from 'react';
import Form from '../views/Form/Form';

class FormContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            email: '',
            password: '', 
        }
    }

    render(){
        const props = {
            email: this.state.email,
            password: this.state.password,
        }

        return(
            <Form {...props} />
        );
    }
}

export default FormContainer;