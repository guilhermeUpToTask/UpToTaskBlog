import React from "react";
import classes from './Spinner.module.css';
export default function (props) {
    return (
        <div style={props.style}>
            <div className={classes.Spinner}/>
        </div>
    )
}