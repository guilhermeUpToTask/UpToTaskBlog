import React, { Fragment } from "react";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import parseHeadingToId from "../../../api/parseHeadingToId";
import * as elType from "../../../api/Constants/DynamicElementType";

export default (props) => {
    let component;
    switch (props.element.type) {
        case elType.TEXT:
            component = (<p >{props.element.content.text}</p>);
            break;
        case elType.HEADING:
            component = (<Heading id={parseHeadingToId(props.element.content.text)}>{props.element.content.text}</Heading>);
            break;
        case elType.IMAGE:
            component = (<Image/>);
            break;
        default:
            component = (<p>{props.element.content.text}</p>);
    }

    return (
        <Fragment>
            {component}
        </Fragment>
    )
}