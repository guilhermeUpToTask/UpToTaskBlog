import React from "react";
import classes from './PostCard.module.css';
import CardPhoto from "./CardPhoto/CardPhoto";
import CardInfo from "./CardInfo/CardInfo";
export default (props) =>{
    const apndClasses = props.first ? [classes.PostCard, classes.FirstCard] : [classes.PostCard];
    return(
        <div className={apndClasses.join(' ')} onClick={props.clicked}>
            <CardPhoto first={props.first} imgId={props.img}/>
            <CardInfo/>
        </div>
    )
}