import React, { Suspense } from "react";
import Article from "../../components/Article/Article";
import SideContent from "../../components/SideContent/SideContent";
import classes from './Post.module.css';
import { useLoaderData, useParams } from "react-router";
import Spinner from "../../components/UI/Spinner/Spinner";

const post = (props) =>{
    const loader = useLoaderData();

    return(
        <div className={classes.Post}>
            <Suspense fallback={<Spinner style={{gridColumn:'4/1'}}/>}>
                <Article loader={loader}/>
                <SideContent/>
            </Suspense>
        
        </div>
    )
}

export default post;