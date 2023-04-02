import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import cld from '../../../../cldInstance';
import classes from './CardPhoto.module.css';

export default (props) => {
    const apndClasses = props.first ? [classes.PhotoFrame, classes.First] : [classes.PhotoFrame];
    const myImage = cld.image(props.imgId);

    return (

        <div className={apndClasses.join(' ')}>
            <AdvancedImage className={classes.CardPhoto} cldImg={myImage} />
        </div>
    )
}