import React, { Fragment } from "react";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Title from "../Title/Title";
import Text from "../Text/Text";
import parseTextToId from "../../../api/parseTextToId";
import * as elType from "../../../api/Constants/DynamicElementType";
import Code from "../Code/Code";

export default (props) => {
    let component;
    switch (props.element.type) {
        case elType.TITLE:
            component = (<Title>{props.element.data}</Title>);
            break;
        case elType.TEXT:
            component = (<Text>{props.element.data} </Text>);
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
        case elType.CODE:
            component = (<Code>{props.element.data} </Code>);
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