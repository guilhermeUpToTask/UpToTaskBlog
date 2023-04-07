import { color } from "@cloudinary/url-gen/qualifiers/background";
import React from "react";

export default function (props) {
    const style = {
        padding:'10px',
        width:'20vw',
        backgroundColor: `rgb(${props.color.red}, ${props.color.green}, ${props.color.blue})`, // current color picked
    }
  return (
    <div>
        <label>Set the RGB color for the category</label>
        <input value={props.color.red} onChange={(e) => props.changed(e.target.value, props.color.green, props.color.blue)} placeholder="RED"/>
        <input value={props.color.green} onChange={(e) => {props.changed(props.color.red, e.target.value, props.color.blue)}} placeholder="GREEN"/>
        <input value={props.color.blue} onChange={(e) => props.changed(props.color.red, props.color.green, e.target.value)} placeholder="BLUE"/>
        <div style={style}>Current Color</div>
    </div>
  );
}