import React from "react";
import { useState} from "react";
import Input from "../../../components/UI/Input/Input";
import InputProps from "../../../api/Classes/InputProps";
import classes from "./CreateCategory.module.css";
import axios from "../../../axios-firebase";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/reducers/categories";

export default (props) => {

    const categories = useSelector(selectCategories);

    const [categoryInputProps, setCategoryInputProps] = useState(
        new InputProps('input', { type: 'input', placeholder: `Write the Category Name` }));

    const onSubmitHandler = (e) => {

        e.preventDefault();
        const categoryName = categoryInputProps.value;
        const form = {
            name: categoryName,
            description: 'none',
            iconPath: 'none'
        }
        axios.post('/categories.json', form)
            .then((res) => {
               console.log('response', res);
            })
            .catch(err => console.log(err));
    }

    const onInputChange = (value) => {
        const newCtgrInptProps = { ...categoryInputProps };
        newCtgrInptProps.value = value;
        setCategoryInputProps(newCtgrInptProps);
    }

    const displayCategories = categories.map((category) => {
        return (<h3 key={category.id}>{category.name}</h3>)
    });

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
                {displayCategories}
                {displayCategoryInput}
                <button onClick={(e) => onSubmitHandler(e)}>Submit The Category</button>
            </form>
        </div>
    )
}