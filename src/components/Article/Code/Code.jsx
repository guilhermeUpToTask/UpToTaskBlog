import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierPlateauDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function (props) {
    return (
            <SyntaxHighlighter language="javascript" style={atelierPlateauDark} 
            customStyle={{
                width:'80%',
                border: '1px solid #845892',
                fontSize: '1.1rem',
                margin:'auto'
            }}>
                {props.children}
            </SyntaxHighlighter>
    )
}
