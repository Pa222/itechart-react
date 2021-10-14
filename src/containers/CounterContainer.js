import React, { useState } from 'react'
import Counter from '../views/Counter/index';

const CounterContainer = () =>{
    const [value, setValue] = useState(0);

    const props = {
                    value: value,
                    increment: () => { setValue(value + 1); },
                    decrement: () => { setValue(value - 1); },
                    reset: () => { setValue(0); }
                };
    return (<Counter {...props} />);
}

export default CounterContainer;