import classes from "./ArticleInfo.module.css";
import CategoryTag from "../../UI/CategoryTag/CategoryTag";
import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/reducers/categories";

export default function (props) {
    const categories = useSelector(selectCategories);
    const category = categories.find(category => category.id === props.categoryId);
    const date = new Date(props.date);
    const month = date.toLocaleString('en-US', { month: 'short' });


    return (
        <div className={classes.ArticleInfo}>
            <address>Publish By {props.author} / {month} {date.getDate()}, {date.getFullYear()}</address>
            <CategoryTag category={category}/>
        </div>
    )
}