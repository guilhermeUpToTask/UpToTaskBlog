import React, { useState } from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";
import InputProps from "../../../api/Classes/InputProps";
import SelectProps from "../../../api/Classes/SelectProps";
import Input from "../../../components/UI/Input/Input";
import SelectComponent from "../../../components/SelectComponent/SelectComponent";

export default (props) => {
    const needToCreateImageInput = '';
    const needToChooseInputTypeFromElType='';

    
    const [elemBuilders, setElemBuilders] = useState([]);
    const [title, setTitle] = useState('Default Title');
    const [thumbNail, setThumbNail] = useState('noUrl');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let contentStructure = [];
        elemBuilders.map(elBuilder =>{
            contentStructure.push({
                type:elBuilder.contentType, 
                content:{ text: elBuilder.inputProps.value} 
            });
        })

        const form = {
            title: 'whatever',
            thumbNail: 'img_path',
            info: {
                author: 'john',
                data: '02/07',
                categorie: 'exemple',
            },
            contentStructure,
        };

        axios.post('/posts.json', form)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const onAddComponentHandler = (type) => {
        const newInputProps = new InputProps('input', { type: 'input', placeholder: `Write the ${type}` });
        const newContentType = type;
        const updatedElemBuilders = elemBuilders.concat({ inputProps: newInputProps, contentType: newContentType });
        setElemBuilders(updatedElemBuilders);

    }

    const onInputChangeHandler = (value, i) =>{
        const updateElemBuilder = {...elemBuilders[i]};
        updateElemBuilder.inputProps.value=value;
        const newElemBuilders = [...elemBuilders];
        newElemBuilders[i] = updateElemBuilder;
        setElemBuilders(newElemBuilders);

    }

    const displayElemBuilders = elemBuilders.map((elBuilder, i) => {
        return (<Input key={elBuilder.contentType + i}
            elementType={elBuilder.inputProps.elementType}
            elementConfig={elBuilder.inputProps.elementConfig}
            value={elBuilder.inputProps.value}
            invalid={!elBuilder.inputProps.valid}
            shouldValidate={elBuilder.inputProps.validation}
            touched={elBuilder.inputProps.touched}
            label={elBuilder.postCompType}
            changed={(event) => onInputChangeHandler(event.target.value, i)}/>)
    });


    return (
        <div className={classes.CreatePost}>

            <form >
                <label >Enter the Title</label>
                <input id="title" type="text" name="title" placeholder="Title" />
                <label>Enter The Image srcLink </label>
                <input type="url" name="thumbnail" id="thumbnail" placeholder="https://example.com" pattern="https://.*" size="30" />
                {displayElemBuilders ?? ''}
                <SelectComponent changed={(type) => onAddComponentHandler(type)}/>
                <button onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}