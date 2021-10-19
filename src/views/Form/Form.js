import React from 'react';
import useStyles from './styles';

const Form = (props) => {
    const classes = useStyles();

    return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.form}>
                <input 
                    className={classes.form__input} 
                    type="email" name="email" 
                    placeholder="E-mail"
                    onChange={props.handleChange}
                />
                <input 
                    className={classes.form__input} 
                    type="text" 
                    name="password" 
                    placeholder="Password"
                    onChange={props.handleChange}
                />
                <input 
                    className={classes.form__input} 
                    type="submit" 
                    value="Log in"
                    onChange={props.handleChange}
                />
            </div>
            <h2>Entered data: {props.formattedData}</h2>
        </form>
    );
}

export default Form;