import React, { useState, useEffect } from "react";
import fetchData from "../../api/fetchData";
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
        const first = (postCards.length === 0);
        console.log(first);
        postCards.push(
            <PostCard key={key} title={posts[key].title} author={posts[key].author} img={posts[key].thumbNail} first={first} 
            clicked={() => onPostClickedHandler(key)}/>
        );
    }


    return (
        <div className={classes.PostCards}>
            {postCards}
        </div>
    )
}