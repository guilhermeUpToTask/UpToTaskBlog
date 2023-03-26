import React, { useEffect, useRef, useState } from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";
import InputProps from "../../../api/Classes/InputProps";
import Input from "../../../components/UI/Input/Input";
import SelectComponent from "../../../components/SelectComponent/SelectComponent";
import SelectCategory from "../../../components/SelectCategory/SelectCategory";
import parseTextToId from "../../../api/parseTextToId";
import { useNavigate } from "react-router";
import {auth} from "../../../databaseInstance";
import { useAuthState } from "react-firebase-hooks/auth";
import * as elType from "../../../api/Constants/DynamicElementType";

export default (props) => {
    const navigate = useNavigate();
    
    const [user, loading, error] = useAuthState(auth);
    const [elemBuilders, setElemBuilders] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        onAddMultipleComponentsHandler([elType.THUMBNAIL, elType.TITLE]);
    }, []);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let contentStructure = [];

        elemBuilders.map(elBuilder => {
            contentStructure.push({
                type: elBuilder.contentType,
                data: elBuilder.inputProps.value
            });
        })

        //later we need to refactor this to get the title dynamic from contentstructure
        const title = contentStructure[1].data;
        const titleToId = parseTextToId(title);
        const updateContStructure = await uploadImages(contentStructure, titleToId);
        const thumbnailId = updateContStructure[0].data;

        console.log(category);
        const form = {
            title: title,
            thumbNail: thumbnailId,
            info: {
                author: 'john',
                data: '02/07',
                category: category,
            },
            contentStructure: updateContStructure,
        };

        const idToken = await user.getIdToken(true);
        console.log(idToken)
        axios.post('/posts.json?auth='+idToken, form)
            .then((response) => {
                navigate('/posts');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    //later we will change to a generic function and outsorcer it
    const uploadImages = async (contStructure, folderName) => {
        const newContStrct = [...contStructure];
        console.log(folderName);
        for (let i = 0; i < newContStrct.length; i++) {
            if (newContStrct[i].type === elType.IMAGE || newContStrct[i].type === elType.THUMBNAIL) {
                const newContent = { ...newContStrct[i] }
                const form = new FormData();
                form.append('file', newContent.data);
                form.append('folder', folderName);
                form.append('upload_preset', 'h1myoo06');
                const { data } = await axios.post('https://api.cloudinary.com/v1_1/dwflpcrlz/upload', form);
                newContent.data = data.public_id;
                newContStrct[i] = newContent;
            }
        }
        return newContStrct;
    }

    const onSelectCtgr = (category) => {
        setCategory(category);
    }

    const onAddComponentHandler = (type) => {
        const inputType = elTypeToInptType(type);
        const newInputProps = new InputProps(inputType, { type: inputType, placeholder: `Write the ${type}` });
        const newContentType = type;
        const updatedElemBuilders = elemBuilders.concat({ inputProps: newInputProps, contentType: newContentType });
        setElemBuilders(updatedElemBuilders);

    }
    const onAddMultipleComponentsHandler = (types) => {
        const inputTypes = types.map(type => elTypeToInptType(type));
        const newInputs = inputTypes.map((inputType, i) =>
            new InputProps(inputType, { type: inputType, placeholder: `Write the ${types[i]}` }));
        const newElemBuilders = types.map((type, i) => ({ inputProps: newInputs[i], contentType: type }));
        const updatedElemBuilders = elemBuilders.concat(newElemBuilders);
        setElemBuilders(updatedElemBuilders);
    }
    const onRemoveComponentHandler = (id) => {
        const elemBuilder = { ...elemBuilders[id] };
        const newElemBuilders = [...elemBuilders];
        newElemBuilders.splice(id, 1);
        setElemBuilders(newElemBuilders);
    }

    //outsourcer it
    const elTypeToInptType = (elemType) => {
        switch (elemType) {
            case elType.HEADING: return 'input';
            case elType.TEXT: return 'text';
            case elType.IMAGE: return 'file';
            case elType.THUMBNAIL: return 'file';
            case elType.TITLE: return 'input';
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
            label={elBuilder.contentType}
            removable={(elBuilder.contentType !== elType.TITLE && elBuilder.contentType !== elType.THUMBNAIL)}
            clicked={() => onRemoveComponentHandler(i)}
            changed={
                (elBuilder.inputProps.elementType === 'file') ?
                    (ref) => onInputChangeHandler(ref, i) :
                    (event) => onInputChangeHandler(event.target.value, i)
            } />)
    });


    return (
        <div className={classes.CreatePost}>

            <form >
                <SelectCategory changed={onSelectCtgr} />
                {displayElemBuilders ?? ''}
                <SelectComponent changed={(type) => onAddComponentHandler(type)} />
                <button onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}