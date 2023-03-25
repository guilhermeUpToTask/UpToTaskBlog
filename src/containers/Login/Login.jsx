import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '../../databaseInstance';
import CurrentUser from "../../components/Authentication/CurrentUser/CurrentUser";
import LogOut from "../../components/Authentication/LogOut/LogOut";

const login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const onSubmitLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
        console.log(user);
        console.log(auth);
    }   
    console.log(loading);

    return(
        <div>
            login page
            <form onSubmit={onSubmitLogin}>
                <input type='email' placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>log-in</button>
                <CurrentUser/>
                <LogOut/>
            </form>
        </div>
    )
}

export default login;