import React from "react";
import classes from './Article.module.css'
import BigTitle from "./BigTitle/BigTitle";
import SubTitle from "./SubTitle/SubTitle";
import Title from "./Title/Title";
import Image from "./Image/Image";
export default (props) =>{
    return(
        <article className={classes.Article}>
            <BigTitle>Testando1</BigTitle>
            <Title>Testando2</Title>
            <SubTitle>Testando3</SubTitle>
            <Image/>
        </article>
    )
}