import React from "react";
import classes from './SubTitle.module.css'

export default (props) => {
    return (
        <h3 className={classes.SubTitle}>
            {props.children}
        </h3>
    )
}