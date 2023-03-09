import React, { Fragment } from "react";
import Heading from "../Heading/Heading";
import parseHeadingToId from "../../../api/parseHeadingToId";
export default (props) => {
    let component;
    switch (props.element.type) {
        case 'TEXT':
            component = (<p >{props.element.content.text}</p>);
            break;
        case 'HEADING':
            component = (<Heading id={parseHeadingToId(props.element.content.text)}>{props.element.content.text}</Heading>);
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