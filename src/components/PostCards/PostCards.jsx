import React, { useState, useEffect } from "react";
import axios from '../../axios-firebase';
import PostCard from "./PostCard/PostCard";
import classes from "./PostCards.module.css";

function fetchPosts() {
    let status = 'pending';
    let result = '';

    const fetching = axios.get('/posts.json')
        .then(res => {
            status = 'fulfilled';
            result = res.data;
        })
        .catch(error => {
            status = 'rejected';
            result = error;
        });
        console.log('fetching...');
    return () => {
        if (status === "pending") {
            console.log(fetching);
            throw fetching; // Suspend(A way to tell React data is still fetching)
        } else if (status === "rejected") {
            throw result; // Result is an error
        } else if (status === "fulfilled") {
            return result; // Result is a fulfilled promise
        }
    }
}

const postData = fetchPosts();
console.log(postData);
export default (props) => {
    const posts = postData();

    const postCards = [];
    for (let key in posts) {
        postCards.push(
            <PostCard key={key} title={posts[key].title} author={posts[key].author} />
        );
    }


    return (
        <div className={classes.PostCards}>
            {postCards}
        </div>
    )
}