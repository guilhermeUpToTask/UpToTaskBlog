import React from "react";
import classes from "./Posts.module.css";
import PostCards from "../../components/PostCards/PostCards";
const posts = (props) =>{


    return(
        <div className={classes.Posts}>
            <PostCards/>
        </div>
    )
}

export default posts;