import React from "react";
import { NavLink } from "react-router-dom";
import classes from './DefaultNavItem.module.css';

export default (props) => {
    return (
        <NavLink to={props.link} className={classes.DefaultNavItem}>{props.children}</NavLink>
    )
}