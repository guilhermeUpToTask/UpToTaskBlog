import React from 'react';
import classes from './CategoryTag.module.css';


export default function (props) {

    const style = (props.category?.color) ?
    {
        color: `rgb(${props.category.color.red} , ${props.category.color.green}, ${props.category.color.blue})`,
        backgroundColor:`rgba(${props.category.color.red} , ${props.category.color.green}, ${props.category.color.blue}, 0.3)`,
    }: {};
    console.log(props.category);
    return(
        <p className={classes.CategoryTag} style={style}>
            {props.category?.name}
        </p>
    )
}