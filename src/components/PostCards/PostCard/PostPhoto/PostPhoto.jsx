import React from "react";
import classes from './PostPhoto.module.css';

export default (props) =>{
    const apndClasses = props.first ? [classes.PostPhoto, classes.First] : [classes.PostPhoto];
    return(
        <div className={apndClasses.join(' ')}>

        </div>
    )
}