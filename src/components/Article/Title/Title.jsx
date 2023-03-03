import React from "react";
import classes from './Title.module.css'

export default (props) =>{
    return(
        <h2 className={classes.Title}>
            {props.children}
        </h2>
    )
}