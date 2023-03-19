import React, { Fragment } from "react";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Title from "../Title/Title";
import parseTextToId from "../../../api/parseTextToId";
import * as elType from "../../../api/Constants/DynamicElementType";

export default (props) => {
    let component;
    console.log(props.element.data);
    switch (props.element.type) {
        case elType.TITLE:
            component = (<Title>{props.element.data}</Title>);
            break;
        case elType.TEXT:
            component = (<p>{props.element.data}</p>);
            break;
        case elType.HEADING:
            component = (<Heading id={parseTextToId(props.element.data)}>{props.element.data}</Heading>);
            break;
        case elType.IMAGE:
            component = (<Image id={props.element.data} />);
            break;
        case elType.THUMBNAIL:
            component = (<Image id={props.element.data} />);
            break;
        default:
            component = (<p>{props.element.data}</p>);
    }

    return (
        <Fragment>
            {component}
        </Fragment>
    )
}