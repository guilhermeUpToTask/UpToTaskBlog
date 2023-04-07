import classes from "./ArticleInfo.module.css";
import CategoryTag from "../../UI/CategoryTag/CategoryTag";
import React from "react";

export default function (props) {
    const date = new Date(props.date);
    const month = date.toLocaleString('en-US', { month: 'short' });


    return (
        <div className={classes.ArticleInfo}>
            <address>Publish By {props.author} / {month} {date.getDate()}, {date.getFullYear()}</address>
            <CategoryTag category={props.category} color={props.color}/>
        </div>
    )
}