import NavItem from './NavItem/NavItem';
import React from 'react';
import classes from './NavItens.module.css';
import { BiGridAlt, BiInfoCircle} from "react-icons/bi";
export default (props) =>{
    return(
        <div className={classes.NavItens}>
            <NavItem link={'categories'}><BiGridAlt/>Categories</NavItem>
            <NavItem link={'about'}><BiInfoCircle/>About</NavItem>
        </div>
    )
}