import React from "react";
import classes from './PostCard.module.css';
import PostPhoto from "./PostPhoto/PostPhoto";

export default (props) =>{
    const apndClasses = props.first ? [classes.PostCard, classes.FirstCard] : [classes.PostCard];
    return(
        <div className={apndClasses.join(' ')}>
            <PostPhoto first={props.first}/>
            <h3>Categorie</h3>
            <h2>Post Card Title dosakdoaskdoaskdaosko</h2>
            <h3>author - data</h3>
        </div>
    )
}