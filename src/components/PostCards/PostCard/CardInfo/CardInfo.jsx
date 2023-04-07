import React from "react";
import CategoryTag from "../../../UI/CategoryTag/CategoryTag";
import CardTitle from "./CardTitle/CardTitle";
import PublishBy from "./PublishBy/PublishBy";
import classes from './CardInfo.module.css';
import { useSelector } from "react-redux";
import { selectCategories } from "../../../../store/reducers/categories";
export default function (props) {
    const categories = useSelector(selectCategories);
    const category = (categories) ? categories.find(category => category.id === props.categoryId) : 'none';
    return(
        
        <div className={classes.PostInfo}>
            <CategoryTag category={category}/>
            <CardTitle title={props.title}/>
            <PublishBy author={props.author} date={props.date}/>
        </div>
    )
}