import React from 'react';
import classes from './CardTitle.module.css';
export default function (props) {

    return(
        <h3 className={classes.CardTitle} >
            {props.title}
        </h3>
    )
}