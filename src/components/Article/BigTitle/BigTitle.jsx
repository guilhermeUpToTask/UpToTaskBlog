import React from "react";
import classes from './BigTitle.module.css'

export default (props) =>{
    return(
        <h1 className={classes.BigTitle}>
           {props.children}
        </h1>
    )
}