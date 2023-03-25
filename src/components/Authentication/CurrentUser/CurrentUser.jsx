import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../databaseInstance';

export default (props) => {
    const [user, loading, error] = useAuthState(auth);


    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
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
            </div>
        );
    }

}