import { AdvancedImage, placeholder, responsive} from "@cloudinary/react";
import React, { Fragment } from "react";
import classes from './Image.module.css'
import cld from '../../../cldInstance';


export default (props) =>{
    
      const myImage = cld.image('minimalist');
    


    return(
        <Fragment>
            <AdvancedImage style={{maxWidth: '100%'}} cldImg={myImage} plugins={[responsive(),placeholder()]}/>
        </Fragment>
    )
}