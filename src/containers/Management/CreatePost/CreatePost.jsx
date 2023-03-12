import React, { useState } from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";
import InputProps from "../../../api/Classes/InputProps";
import SelectProps from "../../../api/Classes/SelectProps";
import Input from "../../../components/UI/Input/Input";


export default (props) =>{
    const [compBuilders, setCompBuilders] = useState([]);
    const [title, setTitle] = useState('Default Title');
    const [thumbNail, setThumbNail] = useState('noUrl');
    const [showSelectAddComponent, setShowSelectAddComponent] = useState(false);
    const [selectedCompType, setSelectedCompType] = useState('none');
    const [selectCompProps, setSelectCompProps] = useState(new SelectProps('select',
    {options:[{value:'none', displayValue:'Please choose a Component Type'}, 
    {value:'text', displayValue: 'Text'},
    {value:'heading', displayValue: 'Heading'}]}));

    console.log(selectCompProps);

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

    const selectCompType = <Input elementType={selectCompProps.elementType}
    elementConfig={selectCompProps.elementConfig}
    value={selectCompProps.value}
    invalid={!selectCompProps.valid}
    shouldValidate={selectCompProps.validation}
    touched= {selectCompProps.touched}
    changed={(event) => onAddComponentHandler(event.target.value)}/>

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