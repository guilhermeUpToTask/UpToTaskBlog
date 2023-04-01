import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import cld from '../../../../cldInstance';
import classes from './CardPhoto.module.css';

export default (props) => {
    const apndClasses = props.first ? [classes.CardPhoto, classes.First] : [classes.CardPhoto];
    const myImage = cld.image(props.imgId);

    return (
        <div className={classes.PhotoFrame}>
            <AdvancedImage className={apndClasses.join(' ')} cldImg={myImage} />
        </div>
    )
}