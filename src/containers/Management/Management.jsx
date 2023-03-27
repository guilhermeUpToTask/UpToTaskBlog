import React, { Suspense, useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import CreateCategory from "./CreateCategory/CreateCategory";
import CurrentUser from "../../components/Authentication/CurrentUser/CurrentUser";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../databaseInstance';
import Login from "../Login/Login";
const management = (props) => {
    const [user, loading, error] = useAuthState(auth);

    const displayManagement =
        <>
            management page
            <CurrentUser />
            <CreatePost />
            <Suspense fallback={<h1>Loading</h1>}>
                <CreateCategory />
            </Suspense>
        </>


    const getManagementState = () => {
        if (loading) return <>Loading</>
        else return (user) ? displayManagement : <Login/>
    }

    console.log('redering management');
    const content = getManagementState();
    return (
        <div>
            {content}
        </div>
    )

}

export default management;