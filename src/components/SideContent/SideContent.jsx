import React from "react";
import ArticleGuide from "../ArticleGuide/ArticleGuide";
import classes from './SideContent.module.css';

export default (props) => {
    return (
        <div className={classes.SideContent}>
            <ArticleGuide />
        </div>
    )
}