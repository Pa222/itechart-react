import React from "react";
import { ErrorMessage, useField } from "formik";

const TextInput =  ({...props}) => {
    const [field] = useField(props);
    return(
        <div>
            <input 
                {...field} {...props}
            />
            <ErrorMessage name={field.name}/>
        </div>
    );
}

export default TextInput;