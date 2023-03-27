import React, { Suspense} from "react";
import classes from "./Posts.module.css";
import PostCards from "../../components/PostCards/PostCards";
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