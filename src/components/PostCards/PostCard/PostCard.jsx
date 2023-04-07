import React from "react";
import classes from './PostCard.module.css';
import CardPhoto from "./CardPhoto/CardPhoto";
import CardInfo from "./CardInfo/CardInfo";
export default (props) =>{
    const apndClasses = props.first ? [classes.PostCard, classes.FirstCard] : [classes.PostCard];
    return(
        <div className={apndClasses.join(' ')} onClick={props.clicked}>
            <CardPhoto first={props.first} imgId={props.post.thumbNail}/>
            <CardInfo author={props.post.info.author} categoryId={props.post.info.categoryId}
             title={props.post.title} date={props.post.info.date}/>
        </div>
    )
}