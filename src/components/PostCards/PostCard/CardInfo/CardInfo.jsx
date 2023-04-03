import React from "react";
import CategoryTag from "../../../UI/CategoryTag/CategoryTag";
import CardTitle from "./CardTitle/CardTitle";
import PublishBy from "./PublishBy/PublishBy";
import classes from './CardInfo.module.css';
export default function (props) {
    return(
        <div className={classes.PostInfo}>
            <CategoryTag category={props.category}/>
            <CardTitle title={props.title}/>
            <PublishBy author={props.author} date={props.date}/>
        </div>
    )
}