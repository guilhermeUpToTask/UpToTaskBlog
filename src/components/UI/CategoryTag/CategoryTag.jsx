import React from 'react';
import classes from './CategoryTag.module.css';
export default function (props) {
    const style = (props.color) ?
    {
        color: `rgb(${props.color.red} , ${props.color.green}, ${props.color.blue})`,
        backgroundColor:`rgba(${props.color.red} , ${props.color.green}, ${props.color.blue}, 0.3)`,
    }: {};
    
    return(
        <p className={classes.CategoryTag} style={style}>
            {props.category}
        </p>
    )
}