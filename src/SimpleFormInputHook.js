import React from 'react';
import useInputState from './hooks/useInputState';

export default function SimpleFormInputHook() {
    const [email, setEmail, resetEmail] = useInputState('');
    const [password, setPassword, resetPassword] = useInputState('');
    return (
        <div>
            <h1>Email is...{email} and password is {password}</h1>
            <input type="text" value={email} onChange={setEmail}/>
            <input type="text" value={password} onChange={setPassword}/>
            <button onClick={resetEmail}>Submit</button>
            <button onClick={resetPassword}>Submit</button>
        </div>
    )
}