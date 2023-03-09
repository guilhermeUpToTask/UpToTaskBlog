import React, { useEffect, useState } from "react";
import classes from './Article.module.css'
import Title from "./Title/Title";
import Image from "./Image/Image";
import Heading from "./Heading/Heading";
import DynamicComponent from "./DynamicComponent/DynamicComponent";

export default (props) =>{
    const postData = props.loader.read();
    const [post, setPost] = useState(postData);

    const needToHandleNotFoundData = '';


    const getContentArray = () =>{
        const arr = [];
        for(let key in post.contentStructure){
            arr.push(post.contentStructure[key]);
        }
        return arr;
    }

    
    const contentComponents = getContentArray().map((el, i) =>{
        return (<DynamicComponent element={el} key={i}/>)
    });

    return(
        <article className={classes.Article}>
            <Title>{post.title}</Title>
            <h3>{post.info.author}</h3>
            {contentComponents}
        </article>
    )
}