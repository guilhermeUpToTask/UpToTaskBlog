import React from "react"
import NavItens from "../NavItens/NavItens";
import classes from './Toolbar.module.css';
import { NavLink } from "react-router-dom";
import DefaultNavItem from "../DefaultNavItem/DefaultNavItem";
export default (props) =>
{

    return(
    <header className={classes.ToolBar}>
        <div className={classes.MobileOnly} onClick={props.toggleDrawer}>
            =
        </div>

        <DefaultNavItem link={'/posts'}>Logo</DefaultNavItem>

        <section className={classes.DesktopOnly} >
            <NavItens/>
        </section>

        <DefaultNavItem link={'/search'}>Search</DefaultNavItem>
    </header>

    )


}