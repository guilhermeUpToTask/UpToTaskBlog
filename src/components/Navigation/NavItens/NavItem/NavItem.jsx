import React from "react";
import classes from './NavItem.module.css';

export default (props) =>{
    return(
        <nav className={classes.NavItem}>{props.children}</nav>
    )
}