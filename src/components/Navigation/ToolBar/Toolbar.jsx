import React from "react"
import NavItens from "../NavItens/NavItens";
import classes from './Toolbar.module.css';

export default (props) =>
{

    return(
    <header className={classes.ToolBar}>
        <div className={classes.MobileOnly} onClick={props.toggleDrawer}>
            =
        </div>
        <div className={classes.DefaultNavItem}>Logo</div>
        <section className={classes.DesktopOnly} >
            <NavItens/>
        </section>

        <div className={classes.DefaultNavItem}>Search</div>
    </header>

    )


}