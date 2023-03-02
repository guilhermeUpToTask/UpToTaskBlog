import React from "react";
import classes from './PathBar.module.css'
export default (props) =>{
    const content ='Home > PlaceHolder > Example> pathBar'
    return(
    <div className={classes.PathBar}>
        {content}
    </div>)
}