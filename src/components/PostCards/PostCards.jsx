import React from "react";
import PostCard from "./PostCard/PostCard";
import classes from "./PostCards.module.css";

export default (props) =>{
    return(
        <div className={classes.PostCards}>
            <PostCard first/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )
}