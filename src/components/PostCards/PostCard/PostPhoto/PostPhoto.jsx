import React from "react";
import { AdvancedImage} from "@cloudinary/react";
import cld from '../../../../cldInstance';
import classes from './PostPhoto.module.css';

export default (props) =>{
    const apndClasses = props.first ? [classes.PostPhoto, classes.First] : [classes.PostPhoto];
    const myImage = cld.image(props.imgId);

    return(
             <AdvancedImage className={apndClasses.join(' ')} cldImg={myImage} />
    )
}