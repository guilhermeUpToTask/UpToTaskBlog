import React, { useState, useEffect, cloneElement } from "react";
import PostCard from "./PostCard/PostCard";
import classes from "./PostCards.module.css";
import { useNavigate } from "react-router-dom";


export default (props) => {

    const posts = props.loader.read();
    const navigate = useNavigate(); 

    const onPostClickedHandler=(key) =>{
        navigate(`/post/${key}`);
    }

    const postCards = [];
    
    for (let key in posts) {
        postCards.push(
            <PostCard key={key} title={posts[key].title} author={posts[key].author} img={posts[key].thumbNail} 
            clicked={() => onPostClickedHandler(key)}/>
        );
    }
    postCards.reverse();
    postCards[0] = cloneElement(postCards[0], {first:true});

    return (
        <div className={classes.PostCards}>
            {postCards}
        </div>
    )
}