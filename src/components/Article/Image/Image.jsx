import { AdvancedImage} from "@cloudinary/react";
import React, { Fragment } from "react";
import classes from './Image.module.css'
import cld from '../../../cldInstance';


export default (props) =>{
    
      const myImage = cld.image(props.id);
    


    return(
        <Fragment>
            <AdvancedImage className={classes.Image} cldImg={myImage}/>
        </Fragment>
    )
}