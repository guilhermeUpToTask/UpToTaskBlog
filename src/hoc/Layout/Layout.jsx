import { Fragment, useState } from "react"
import React from "react";
import Toolbar from "../../components/Navigation/ToolBar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
import { Outlet } from "react-router";
import PathBar from "../../components/Navigation/PathBar/PathBar";
import Banner from "../../components/Navigation/Banner/Banner";

const layout = (props) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const toggleSidebarHandler = ()=>{
        setToggleSidebar(!toggleSidebar);
    }

    return (
        <Fragment>
            <Toolbar toggleDrawer={toggleSidebarHandler}/>
            <SideDrawer showDrawer={toggleSidebar} toggleDrawer={toggleSidebarHandler}/>
            <main>
                <Banner/>
                <Outlet/>
            </main>
        </Fragment>
    )
}

export default layout;