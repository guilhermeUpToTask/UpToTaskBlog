import React from "react";
import Input from "../UI/Input/Input";
import SelectProps from "../../api/Classes/SelectProps";
import { useState } from "react";

export default (props) => {
    const [selectCategoryProps, setSelectCategoryProps] = useState(new SelectProps('select',
        {
            options: [{ value: 'none', displayValue: 'Please choose a Category' },
            { value: 'JavaScript', displayValue: 'JavaScript' },
            { value: 'React', displayValue: 'React' },
            { value: 'Fundamentials', displayValue: 'Fundamentials' },]
        }));


    //need to handle when the mouse click off the select to disable    
    const onSelectChangedHandler = (value) => {
        props.changed(value);
        const newCategoryProps = {...selectCategoryProps};
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
        changed={(event) => onSelectChangedHandler(event.target.value)}/>

    return (
        <div>
            <label>Post Category</label>
            {selectDisplay}
        </div>
    )
}