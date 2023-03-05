import React, { Suspense, useEffect, useState } from "react";
import classes from "./Posts.module.css";
import PostCards from "../../components/PostCards/PostCards";
import axios from '../../axios-firebase';
import { useLoaderData } from "react-router";

const posts = (props) => {
    const loader = useLoaderData();

    return (
        <div className={classes.Posts}>
            <Suspense fallback={<h1>Loading</h1>}>
                <PostCards loader={loader}/>
            </Suspense>
        </div>
    )
}

export default posts;