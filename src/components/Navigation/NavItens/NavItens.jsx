import NavItem from './NavItem/NavItem';
import React from 'react';
import classes from './NavItens.module.css';

export default (props) =>{
    return(
        <div className={classes.NavItens}>
            <NavItem link={'/posts'}>Categories</NavItem>
            <NavItem link={'about'}>About</NavItem>
        </div>
    )
}