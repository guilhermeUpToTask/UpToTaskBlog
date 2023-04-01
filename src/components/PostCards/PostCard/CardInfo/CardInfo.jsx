import React from "react";
import CategoryTag from "./CategoryTag/CategoryTag";
import CardTitle from "./CardTitle/CardTitle";
import PublishBy from "./PublishBy/PublishBy";
import classes from './CardInfo.module.css';
export default function (props) {
    return(
        <div className={classes.PostInfo}>
            <CategoryTag name={'HTML'}/>
            <CardTitle title={'Some Title'}/>
            <PublishBy author={'John'} date={'02/02/23'}/>
        </div>
    )
}