import React from "react";
import { useState} from "react";
import Input from "../../../components/UI/Input/Input";
import InputProps from "../../../api/Classes/InputProps";
import classes from "./CreateCategory.module.css";
import axios from "../../../axios-firebase";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/reducers/categories";
import ColorPicker from "./ColorPicker";

export default (props) => {

    const categories = useSelector(selectCategories);

    const [categoryInputProps, setCategoryInputProps] = useState(
        new InputProps('input', { type: 'input', placeholder: `Write the Category Name` }));
    const [categoryColor, setCategoryColor] = useState({red: '0', green:'0', blue:'0'})


    const onSubmitHandler = async (e) => {

        e.preventDefault();
        const categoryName = categoryInputProps.value;
        const form = {
            name: categoryName,
            description: 'none',
            icon: 'none',
            color: categoryColor,
        }
        const idToken = await props.user.getIdToken(true);
        axios.post('/categories.json?auth='+idToken, form)
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
    const onColorInputChange = (red, green, blue) =>{
        const newColor = {red, green, blue};
        setCategoryColor({...newColor})
    }

    const displayCategories = categories.map((category) => {
        const style = {
                padding:'10px',
                width:'20vw',
                backgroundColor: `rgb(${category.color?.red}, ${category.color?.green}, ${category.color?.blue})`, // current color picked
            }
        console.log(style);
        return (
        <h3 style={style} key={category.id}>{category.name}</h3>)
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
            {displayCategories}
            <form>
                {displayCategoryInput}
                <ColorPicker changed={onColorInputChange} color={categoryColor}/>
                <button onClick={(e) => onSubmitHandler(e)}>Submit The Category</button>
            </form>
        </div>
    )
}