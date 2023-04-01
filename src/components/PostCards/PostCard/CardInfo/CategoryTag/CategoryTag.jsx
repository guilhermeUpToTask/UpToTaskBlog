import React from 'react';
import classes from './CategoryTag.module.css';
export default function (props) {

    return(
        <p className={classes.CategoryTag} >
            {props.name}
        </p>
    )
}