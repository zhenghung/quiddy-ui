import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import './Login.css';

function Login({login}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            setError('Fields are required');
            return;
        }
        login({email, password});
    };

    return (
        <div className='login'>
            <h1 style={{color: 'white'}}>Quiddy</h1>
            <div className='login-panel m-5'>
                <h1>Login to your account</h1>
                <div className='container mt-5 pb-3 px-5'>
                    <InputGroup className="my-2 w-auto">
                        <FormControl placeholder="Email"
                                     aria-label="Email"
                                     aria-describedby="basic-addon1"
                                     value={email}
                                     onChange={e => setEmail(e.target.value)}/>
                    </InputGroup>
                    <InputGroup className="my-2 w-auto">
                        <FormControl placeholder="Password"
                                     aria-label="password"
                                     aria-describedby="basic-addon1"
                                     type={'password'}
                                     value={password}
                                     onChange={e => setPassword(e.target.value)}/>
                    </InputGroup>
                    {error}
                    <Button className="my-2 w-100" onClick={handleLogin}>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;