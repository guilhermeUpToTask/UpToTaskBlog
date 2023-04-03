import React from "react";
import TableOfContent from "../TableOfContent/TableOfContent";
import classes from './SideContent.module.css';

export default (props) => {
    return (
        <aside className={classes.SideContent}>
            <TableOfContent />
        </aside>
    )
}