import React from "react";
import classes from './Article.module.css'
import BigTitle from "./BigTitle/BigTitle";
import SubTitle from "./SubTitle/SubTitle";
import Title from "./Title/Title";
import Image from "./Image/Image";
export default (props) =>{
    const post = props.loader.read();

    return(
        <article className={classes.Article}>
            <BigTitle>{post.title}</BigTitle>
            <SubTitle>{post.author}</SubTitle>
            <p>{post.textContent}</p>
            <Image/>
        </article>
    )
}