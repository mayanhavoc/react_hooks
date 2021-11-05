import { useState } from 'react';

export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
};

// for example
// [value, a function that updates the value, and a function that 'empties' the state]
// const [age, handleAgeChange, resetAge] = useFormState('')
