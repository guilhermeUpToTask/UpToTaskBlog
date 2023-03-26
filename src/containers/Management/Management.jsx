import React, { Suspense, useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import CreateCategory from "./CreateCategory/CreateCategory";
import CurrentUser from "../../components/Authentication/CurrentUser/CurrentUser";

const management = (props) => {

    return (
        <div>
             management page
                <CurrentUser />
                <CreatePost />
                <Suspense fallback={<h1>Loading</h1>}>
                    <CreateCategory />
                </Suspense>
        </div>
    )

}

export default management;