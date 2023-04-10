import React, { useState, useEffect, cloneElement } from "react";
import PostCard from "./PostCard/PostCard";
import classes from "./PostCards.module.css";
import { useNavigate } from "react-router-dom";



export default (props) => {
    const navigate = useNavigate();

    const onPostClickedHandler = (key) => {
        navigate(`/post/${key}`);
    }

    const postCards = [];
    let notFound;

    if (Object.keys(props.posts).length> 0) {
        for (let key in props.posts) {
            postCards.push(
               <PostCard key={key} post={props.posts[key]}
                    clicked={() => onPostClickedHandler(key)} />
            );
        }
        postCards.reverse();
        postCards[0] = cloneElement(postCards[0], { first: true });
    }else{
         notFound = <h1>No Post Found</h1>;

    }

    return (
        <>
        {notFound}
        <div className={classes.PostCards}>
            {postCards}
        </div>
        </>
    )
}