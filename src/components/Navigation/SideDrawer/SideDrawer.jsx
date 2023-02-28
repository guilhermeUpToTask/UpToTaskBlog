import React, { Fragment } from "react";
import classes from './SideDrawer.module.css';
import NavItens from "../NavItens/NavItens";
import BackDrop from "../../UI/BackDrop/Backdrop";
export default (props) => {
    let attachedClasses = [classes.SideDrawer, props.showDrawer ? classes.Open : classes.Close];

    return (
        <Fragment>
            <BackDrop show={props.showDrawer} clicked={props.toggleDrawer}/>
            <div className={attachedClasses.join(' ')}>
                <NavItens />
            </div>
        </Fragment>
    )
}