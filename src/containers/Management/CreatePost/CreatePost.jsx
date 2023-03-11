import React, { useState } from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";

export default (props) =>{
    const [compBuilders, setCompBuilders] = useState([]);
    const [title, setTitle] = useState('Default Title');
    const [thumbNail, setThumbNail] = useState('noUrl');
    const [showSelectAddComponent, setShowSelectAddComponent] = useState(false);
    const [selectedCompType, setSelectedCompType] = useState('none');

    const onSubmitHandler =(event) =>{
        event.preventDefault();
        const form = {
            title: 'whatever',
            thumbNail:'img_path',
            info:{
                author: 'john',
                data:'02/07',
                categorie:'exemple',
            },
            contentStructure:[
                {type:'TEXT', content:{text:'testando'}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
            ]
        }
        axios.post('/posts.json', form)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const onAddComponentHandler =(type) =>{
        console.log(type);
        const newComponent= <div key={type+compBuilders.length}>new Compoenet with type={type}</div>
        const updateCompBuilders = compBuilders.concat(newComponent);
        setCompBuilders(updateCompBuilders);

        setSelectedCompType('none');
        setShowSelectAddComponent(false);
    }

    const onShowSelectCompHandler = () =>{
        setShowSelectAddComponent(true);
    }

    const selectCompType = 
    <select name="componentType" id="select-component" value={selectedCompType} 
    onChange={(e) => { onAddComponentHandler(e.target.value)}}>
        <option value="none">Please choose a Component Type</option>
        <option value="text">Text</option>
        <option value="heading">Heading</option>
    </select>
    const addComponent = showSelectAddComponent ? selectCompType : <button onClick={onShowSelectCompHandler}>Add Component</button>



    return(
        <div className={classes.CreatePost}>

        <form >
             <label >Enter the Title</label>
            <input id="title" type="text" name="title" placeholder="Title"/>
            <label>Enter The Image srcLink </label>
            <input type="url" name="thumbnail" id="thumbnail" placeholder="https://example.com" pattern="https://.*" size="30"/>
            {compBuilders ?? ''}
            {addComponent}
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
        </div>
    )
}