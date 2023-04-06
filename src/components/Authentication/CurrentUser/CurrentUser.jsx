import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../databaseInstance';
import LogOut from "../LogOut/LogOut";
import Spinner from "../../UI/Spinner/Spinner";

export default (props) => {
    const [user, loading, error] = useAuthState(auth);


    if (loading) {
        return (
            <div>
                <Spinner/>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    if (user) {
        return (
            <div>
                <p>Current User: {user.email}</p>
                <LogOut/>
            </div>
        );
    }

}