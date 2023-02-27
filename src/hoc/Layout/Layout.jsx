import { Fragment } from "react"
import Toolbar from "../../components/Navigation/ToolBar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
export default (props) => {

    return (
        <Fragment>
            <Toolbar/>
            <SideDrawer/>
        </Fragment>
    )
}