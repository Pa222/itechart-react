import React, { useState } from 'react'
import Counter from '../views/Counter/index';

const CounterContainer = () =>{
    const [value, setValue] = useState(0);

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);
    const reset = () => setValue(0);

    const props = {
                    value,
                    increment,
                    decrement,
                    reset
                };
    return (<Counter {...props} />);
}

export default CounterContainer;