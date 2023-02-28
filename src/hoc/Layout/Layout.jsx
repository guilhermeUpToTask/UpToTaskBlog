import { Fragment, useState } from "react"
import Toolbar from "../../components/Navigation/ToolBar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
export default (props) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const toggleSidebarHandler = ()=>{
        setToggleSidebar(!toggleSidebar);
    }

    return (
        <Fragment>
            <Toolbar toggleDrawer={toggleSidebarHandler}/>
            <SideDrawer showDrawer={toggleSidebar} toggleDrawer={toggleSidebarHandler}/>
        </Fragment>
    )
}