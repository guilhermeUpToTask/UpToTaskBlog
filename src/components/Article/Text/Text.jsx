import classes from './Text.module.css';
import React from 'react';

export default function (props) {
    return (
        <p className={classes.Text}>
            {props.children}
        </p>
    )
}