import React from 'react';
import classes from './PublishBy.module.css';
export default function (props) {

    return(
        <address className={classes.PublishBy} >
            {props.author}
            {props.date}
        </address>
    )
}