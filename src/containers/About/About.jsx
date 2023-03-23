import React, { useEffect } from "react";
import {useSelector } from 'react-redux';
import {selectCategories } from "../../store/reducers/categories";


const about = (props) => {
    
    const categories = useSelector(selectCategories);
    console.log(categories);
    return (
        <div>
            About page - testing features
        </div>
    )
}


export default about;