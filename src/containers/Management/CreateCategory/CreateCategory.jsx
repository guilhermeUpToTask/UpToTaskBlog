import React from "react";
import { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import InputProps from "../../../api/Classes/InputProps";
import classes from "./CreateCategory.module.css";
import axios from "../../../axios-firebase";


export default (props) => {
    const [categoryInputProps, setCategoryInputProps] = useState(
        new InputProps('input', { type: 'input', placeholder: `Write the Category Name` }));

    
    const onSubmitHandler= (e) => {
        e.preventDefault();
        const categoryName = categoryInputProps.value;
        const form={
            name:categoryName,
            description:'none',
            iconPath:'none'
        }
        axios.post('/categories.json',form)
        .then((res)=> console.log(res))
        .catch(err => console.log(err));

    }    

    const onInputChange = (value) => {
        const newCtgrInptProps = { ...categoryInputProps };
        newCtgrInptProps.value = value;
        setCategoryInputProps(newCtgrInptProps);
    }

    const displayCategoryInput = <Input
        elementType={categoryInputProps.elementType}
        elementConfig={categoryInputProps.elementConfig}
        value={categoryInputProps.value}
        invalid={!categoryInputProps.valid}
        shouldValidate={categoryInputProps.validation}
        touched={categoryInputProps.touched}
        label={'Create a Category'}
        changed={(e) => onInputChange(e.target.value)} />


    return (
        <div className={classes.CreateCategory}>
            <form>
                {displayCategoryInput}
                <button onClick={(e) => onSubmitHandler(e)}>Submit The Category</button>
            </form>
        </div>
    )
}