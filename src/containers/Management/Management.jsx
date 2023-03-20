import React, { Suspense, useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import CreateCategory from "./CreateCategory/CreateCategory";
import { useLoaderData } from "react-router";

const management = (props) => {
    const loader = useLoaderData();
    return (
        <div>
            management page
            <CreatePost />
            <Suspense>
                <CreateCategory loader={loader.categories}/>
            </Suspense>
        </div>
    )

}

export default management;