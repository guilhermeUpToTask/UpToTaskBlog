import React, { useEffect, useState } from "react";
import {NavLink, useLocation } from "react-router-dom";
import classes from './TableOfContent.module.css';
export default (props) =>{
    const [headings, setHeadings] = useState(null);

    useEffect(()=>{
        const elements = Array.from(document.querySelectorAll("h2"))
        .map((elem) => ({
          id: elem.id,
          headingName: elem.innerText
        }))
      setHeadings(elements);


    },[])

    const location=useLocation();
    const headingComponents = headings?.map((elem) => 
    <NavLink replace key={elem.id} to={`#${elem.id}`} onClick={(e) => onHeadingClickHandler(e, elem.id)}>{elem.headingName}</NavLink>)
     ?? 'loading';


    const onHeadingClickHandler = (e, id) =>{
      if (location.hash === `#${id}`)
          e.preventDefault();

       console.log(location);
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }

    return(
        <div className={classes.TableOfContent}>
            {headingComponents}
        </div>
    )
}