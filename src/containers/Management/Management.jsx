import React, { Suspense, useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import CreateCategory from "./CreateCategory/CreateCategory";
import CurrentUser from "../../components/Authentication/CurrentUser/CurrentUser";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../databaseInstance';
import Login from "../Login/Login";
import classes from "./Management.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";

const management = (props) => {
    const [user, loading, error] = useAuthState(auth);

    const displayManagement =
        <>
            management page
            <CurrentUser />
            <CreatePost />
            <Suspense fallback={<Spinner/>}>
                <CreateCategory />
            </Suspense>
        </>


    const getManagementState = () => {
        if (loading) return <Spinner />;
        else return (user) ? displayManagement : <Login/>
    }

    const content = getManagementState();
    return (
        <div className={classes.Management}>
            {content}
        </div>
    )

}

export default management;