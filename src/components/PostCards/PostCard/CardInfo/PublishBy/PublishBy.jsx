import React from 'react';
import classes from './PublishBy.module.css';
export default function (props) {
    const date = new Date(props.date);
    const month = date.toLocaleString('en-US', { month: 'short' });
    //can be otmized to be save in the database in the desire string format
    return(
        <address className={classes.PublishBy} >
            Publish By: {props.author} / {month} {date.getDate()}, {date.getFullYear()}
        </address>
    )
}