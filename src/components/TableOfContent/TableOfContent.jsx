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

    const needToHandleInitialHashLink ='';
    const needToHandleCurrentHeadingOnView = '';

    const headingComponents = headings?.map((elem) => 
    <NavLink className={classes.Heading} key={elem.id} to={`#${elem.id}`} onClick={(e) => onHeadingClickHandler(e, elem.id)}>{elem.headingName}</NavLink>)
     ?? 'loading';
    const location=useLocation();

    const onHeadingClickHandler = (e, id) =>{
      if (location.hash === `#${id}`)
          e.preventDefault();

        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: "start",
            top: 20,
          });
        }

    return(
        <div className={classes.TableOfContent}>
            {headingComponents}
        </div>
    )
}