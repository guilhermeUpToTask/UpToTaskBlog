import React, { Suspense} from "react";
import classes from "./Posts.module.css";
import PostCards from "../../components/PostCards/PostCards";
import { useLoaderData } from "react-router";

const posts = (props) => {
    const posts = useLoaderData().read();
    console.log(posts);
   return (
        <div className={classes.Posts}>
                <PostCards posts={posts}/>
        </div>
    )
}

export default posts;