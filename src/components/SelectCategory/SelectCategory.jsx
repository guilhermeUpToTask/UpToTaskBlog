import React, { useEffect } from "react";
import Input from "../UI/Input/Input";
import SelectProps from "../../api/Classes/SelectProps";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/reducers/categories";

export default (props) => {

    const categories = useSelector(selectCategories);
    const [selectCategoryProps, setSelectCategoryProps] = useState(new SelectProps('select',
        {
            options: []
        }));

    useEffect(() => {
        if (categories.length > 0) {
            const newCategoryProps = { ...selectCategoryProps };
            newCategoryProps.elementConfig.options = toOptionsFormat(categories);
            setSelectCategoryProps(newCategoryProps);
        }

    }, [categories])

    const toOptionsFormat = (categories) => {
        return categories.map((category) => {
            return { value: category.id, displayValue: category.name };
        });
    }
    //need to handle when the mouse click off the select to disable    
    const onSelectChangedHandler = (value) => {
        props.changed(value);
        const newCategoryProps = { ...selectCategoryProps };
        newCategoryProps.value = value;
        setSelectCategoryProps(newCategoryProps);
    }

    const selectDisplay = <Input
        elementType={selectCategoryProps.elementType}
        elementConfig={selectCategoryProps.elementConfig}
        value={selectCategoryProps.value}
        invalid={!selectCategoryProps.valid}
        shouldValidate={selectCategoryProps.validation}
        touched={selectCategoryProps.touched}
        changed={(event) => onSelectChangedHandler(event.target.value)} />
        
    return (
        <div>
            <label>Post Category</label>
            {selectDisplay}
        </div>
    )
}