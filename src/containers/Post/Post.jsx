import React from "react";
import Article from "../../components/Article/Article";
import ArticleGuide from "../../components/ArticleGuide/ArticleGuide";
import SideContent from "../../components/SideContent/SideContent";
import classes from './Post.module.css' 
const post = (props) =>{


    return(
        <div className={classes.Post}>
            <Article/><SideContent/>
        </div>
    )
}

export default post;