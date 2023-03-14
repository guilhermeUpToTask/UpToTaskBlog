import { AdvancedImage } from "@cloudinary/react";
import React, { Fragment } from "react";
import classes from './Image.module.css'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';



export default (props) =>{
    const myImage = new CloudinaryImage('sample', {cloudName: 'dwflpcrlz'}).resize(fill().width(100).height(150));
    
    return(
        <Fragment>
            <AdvancedImage cldImg={myImage} />
        </Fragment>
    )
}