import React, { useEffect, useState } from "react";
import classes from './Article.module.css'
import DynamicComponent from "./DynamicComponent/DynamicComponent";
import ArticleInfo from "./ArticleInfo/ArticleInfo";


export default (props) =>{
    //later on we will see react query to implement
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
    console.log(post.info);
    return(
        <article className={classes.Article}>
            <ArticleInfo author={post.info.author} date={post.info.date} category={post.info.category}/>
            {contentComponents}
        </article>
    )
}