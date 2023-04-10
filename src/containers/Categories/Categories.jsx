import React from "react";
import classes from './Categories.module.css';
import { selectCategories } from "../../store/reducers/categories";
import { useSelector } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Link } from "react-router-dom";
export default function (props) {
    const categories = useSelector(selectCategories);



    const categoriesDisplay = (categories.length > 0) ?
        categories.map(category => {
            const colorRGB =  `rgb(${category.color.red} , ${category.color.green}, ${category.color.blue})`;
            const colorRGBA = `rgba(${category.color.red} , ${category.color.green}, ${category.color.blue}, 0.3)`;

            const style = (category?.color) ?
                {
                    color:colorRGB,
                    backgroundColor: colorRGBA,
                    border:`1px solid ${colorRGB}`

                } : {};

            return (
                <Link
                to= {{ 
                    pathname: '/posts',
                    search:`?category=${category.id}`
                }} 
                key={category.id} className={classes.Category} style={style}>
                    {category.name}
                </Link>)
        }) :
        <Spinner />

    return (
        <section className={classes.Container}>
            <h1>Categories</h1>
            <div className={classes.Categories}>
                {categoriesDisplay}
            </div>
        </section>
    )
}