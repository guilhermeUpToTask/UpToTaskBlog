import React, { Suspense, useEffect, useState } from "react";
import classes from "./Posts.module.css";
import PostCards from "../../components/PostCards/PostCards";
import axios from '../../axios-firebase';

const posts = (props) => {


    return (
        <div className={classes.Posts}>
            <Suspense fallback={<h1>Loading</h1>}>
                <PostCards />
            </Suspense>
        </div>
    )
}

export default posts;