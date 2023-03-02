import React from "react";
import classes from './NavItem.module.css';
import { NavLink } from "react-router-dom";

export default (props) =>{
    return(
        <NavLink to={props.link} className={classes.NavItem}>{props.children}</NavLink>
    )
}