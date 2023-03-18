import React, { useEffect } from "react";
import classes from './Heading.module.css'
import parseHeadingToId from "../../../api/parseTextToId";
export default (props) => {


    return (
        <h2 id={props.id} className={classes.Heading}>
            {props.children}
        </h2>
    )
}