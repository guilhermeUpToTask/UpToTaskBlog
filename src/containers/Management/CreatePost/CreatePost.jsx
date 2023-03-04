import React from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";

export default (props) =>{
    const onSubmitHandler =(event) =>{
        event.preventDefault();

        const form = {
            id: Number.parseInt(Math.random()*1000),
            title: 'whatever',
            textContent:' this is our content',
            author:'upToTask',
        }


        axios.post('/posts.json', form)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <input/>
            <button>Submit</button>
        </form>
    )
}