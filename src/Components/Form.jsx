import React, { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function ValidationEmail() {
        console.log('E-mail üçün yalnız ru domaini');
    }

    function ValidationPassword() {
        console.log('Parol üçün minimum 8 simvol');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.endsWith('@ru.com') && password.length >= 8) {
            console.log('Valid credentials. Logging in...');
        } else {
            console.log('Invalid credentials.');
        }
    };

    return (
        <div className='FormDiv'>
            <h2>Sign-in to your account</h2>
            <form onSubmit={handleSubmit}>
                <input onFocus={ValidationEmail} value={email} onChange={handleEmailChange} placeholder='Enter your E-mail' id='input1' /><br /><br />
                <input onFocus={ValidationPassword} value={password} minLength={8} placeholder='Enter password' id='input2' type='password' onChange={handlePasswordChange} /><br /><br />
                <button disabled={!email.endsWith('@ru.com') || password.length < 8}>Login</button>
            </form>
        </div>
    );
};

export default Form;
