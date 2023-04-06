import React from "react"
import NavItens from "../NavItens/NavItens";
import classes from './Toolbar.module.css';
import DefaultNavItem from "../DefaultNavItem/DefaultNavItem";
import Logo from "../../UI/Icons/Logo";
import { BiSearch, BiMenu} from "react-icons/bi";
export default (props) =>
{

    return(
    <header className={classes.ToolBar}>
        <div className={classes.MobileOnly} onClick={props.toggleDrawer}>
            <BiMenu className={classes.Icon}/>
        </div>

        <DefaultNavItem link={'/posts'}><Logo className={classes.Icon} color={'white'}/></DefaultNavItem>

        <section className={classes.DesktopOnly} >
            <NavItens/>
        </section>

        <DefaultNavItem link={'/search'}>Search<BiSearch className={classes.Icon}/></DefaultNavItem>
    </header>

    )


}