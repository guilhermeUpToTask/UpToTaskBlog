import React from "react"
import classes from './Toolbar.module.css';

export default (props) =>
{

    return(
    <header className={classes.ToolBar}>
        <div>Logo</div>
        <div className={classes.DesktopOnly} >
                <nav>Categories</nav>
                <nav>Categories</nav>
        </div>
        <div>Search</div>
    </header>

    )


}