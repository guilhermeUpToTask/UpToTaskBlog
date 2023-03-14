import React from "react";
import { AdvancedImage, placeholder, responsive} from "@cloudinary/react";
import cld from '../../../../cldInstance';
import classes from './PostPhoto.module.css';

export default (props) =>{
    const apndClasses = props.first ? [classes.PostPhoto, classes.First] : [classes.PostPhoto];
    const myImage = cld.image('minimalist');

    return(
             <AdvancedImage className={apndClasses.join(' ')} cldImg={myImage} plugins={[responsive(),placeholder()]}/>
    )
}