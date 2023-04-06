import React from "react";
import classes from './Banner.module.css';
import Logo from "../../UI/Icons/Logo";
export default function (props) {
    return (
        <section className={classes.Banner}>
            <Logo className={classes.Logo} color={'white'}/>
            <h1 className={classes.LogoTitle}>UpToTask Blog</h1>
        </section>
    )
}
