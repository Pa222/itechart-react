import React from 'react';

const Form = (props) => {
    return(
        <form>
            <input type="email" name="email" placeholder="E-mail"></input>
            <input type="text" name="password" placeholder="Password"></input><br/>
            <input type="button" value="Log in"></input>
        </form>
    );
}

export default Form;