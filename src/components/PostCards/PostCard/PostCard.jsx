import React from "react";
import classes from './PostCard.module.css';
import PostPhoto from "./PostPhoto/PostPhoto";

export default (props) =>{
    const apndClasses = props.first ? [classes.PostCard, classes.FirstCard] : [classes.PostCard];
    return(
        <div className={apndClasses.join(' ')}>
            <PostPhoto first={props.first}/>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
        </div>
    )
}