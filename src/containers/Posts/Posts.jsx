import React, { Suspense} from "react";
import classes from "./Posts.module.css";
import PostCards from "../../components/PostCards/PostCards";
import { useLoaderData } from "react-router";
import Spinner from "../../components/UI/Spinner/Spinner";

const posts = (props) => {
    const loader = useLoaderData();

    return (
        <div className={classes.Posts}>
            <Suspense fallback={<Spinner/>}>
                <PostCards loader={loader}/>
            </Suspense>
        </div>
    )
}

export default posts;