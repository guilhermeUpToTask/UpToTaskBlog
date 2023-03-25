import React, {useState} from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import {auth} from '../../../databaseInstance';

export default (props) =>{
    const [signOut, loading, error] = useSignOut(auth);

    
    const onLogoutHandler = () =>{
        signOut(auth);
        console.log(auth);

    }
    
    return(
        <div>
            <button onClick={onLogoutHandler}>Log-Out</button>
        </div>
    )
}