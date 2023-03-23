import React, { Suspense, useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import CreateCategory from "./CreateCategory/CreateCategory";

const management = (props) => {
    return (
        <div>
            management page
            <CreatePost />
            <Suspense fallback={<h1>Loading</h1>}>
                <CreateCategory />
            </Suspense>
        </div>
    )

}

export default management;