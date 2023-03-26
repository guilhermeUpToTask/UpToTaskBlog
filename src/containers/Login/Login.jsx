import React, { useState } from "react";
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../../databaseInstance';
import { useNavigate } from "react-router";

const login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const onSubmitLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    let loginComponents = '';

    const errorDisplay = (error) ? <div>{error.message}</div> : '';

    return (
        <div>
            login page
            <form onSubmit={onSubmitLogin}>
                <input type='email' placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>log-in</button>
            </form>
            {errorDisplay}

        </div>
    )
}

export default login;