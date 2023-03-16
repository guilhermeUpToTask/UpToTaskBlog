import React, { useRef, useState } from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";
import InputProps from "../../../api/Classes/InputProps";
import Input from "../../../components/UI/Input/Input";
import SelectComponent from "../../../components/SelectComponent/SelectComponent";
import * as elType from "../../../api/Constants/DynamicElementType";
import { image } from "@cloudinary/url-gen/qualifiers/source";

export default (props) => {
    const needToCreateImageInput = '';
    const needToChooseInputTypeFromElType = '';


    const [elemBuilders, setElemBuilders] = useState([]);
    const [title, setTitle] = useState('Default Title');
    const [thumbNail, setThumbNail] = useState('noUrl');
    const imgsUpload = useRef([]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let contentStructure = [];

        elemBuilders.map(elBuilder => {
            contentStructure.push({
                type: elBuilder.contentType,
                data: elBuilder.inputProps.value
            });
        })
        console.log(contentStructure);
        const [promises, contentIds] = getImgPromises(contentStructure);
        console.log(promises);
        console.log(contentIds);
        Promise.all(promises).then((responses)=>{
            const newContentStructure = Array.from(contentStructure);
            responses.map((res, i)=>{
                const newContent = {...contentStructure[contentIds[i]]};
                newContent.data = res.data.public_id;
                newContentStructure[[contentIds[i]]] = newContent;

            });
            console.log(newContentStructure);
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
        /*
                axios.post('/posts.json', form)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });*/

    }


    const getImgPromises = (contStructure) => {
        let newContStructure = [...contStructure];
        let promises = [];
        let ids = [];
        newContStructure.map((contS, i) => {
            if (contS.type === 'IMAGE') {
                const form = new FormData();
                form.append('file', contS.data);
                form.append('folder', 'post');
                form.append('upload_preset', 'h1myoo06');
                promises.push(axios.post('https://api.cloudinary.com/v1_1/dwflpcrlz/upload', form));
                ids.push(i);
            }
        })
         return [promises,ids];
    }


    const onAddComponentHandler = (type) => {
        const inputType = elTypeToInptType(type);
        const newInputProps = new InputProps(inputType, { type: inputType, placeholder: `Write the ${type}` });
        const newContentType = type;
        const updatedElemBuilders = elemBuilders.concat({ inputProps: newInputProps, contentType: newContentType });
        setElemBuilders(updatedElemBuilders);

    }

    const elTypeToInptType = (elemType) => {
        switch (elemType) {
            case elType.HEADING: return 'input';
            case elType.TEXT: return 'text';
            case elType.IMAGE: return 'file';
            default: return '';
        }
    }

    const onInputChangeHandler = (value, i) => {
        const updateElemBuilder = { ...elemBuilders[i] };
        updateElemBuilder.inputProps.value = value;
        console.log(updateElemBuilder.inputProps.elementType);
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

            changed={
                (elBuilder.inputProps.elementType === 'file') ?
                    (ref) => onInputChangeHandler(ref, i) :
                    (event) => onInputChangeHandler(event.target.value, i)
            } />)
    });


    return (
        <div className={classes.CreatePost}>

            <form >
                <label >Enter the Title</label>
                <input id="title" type="text" name="title" placeholder="Title" />
                <label>Enter The Image srcLink </label>
                <input type="url" name="thumbnail" id="thumbnail" placeholder="https://example.com" pattern="https://.*" size="30" />
                {displayElemBuilders ?? ''}
                <SelectComponent changed={(type) => onAddComponentHandler(type)} />
                <button onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}