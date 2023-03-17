import React, { useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import axios from 'axios';

const management = (props) => {

    return (
        <div>
            management page
            <CreatePost />
        </div>
    )

}

export default management;