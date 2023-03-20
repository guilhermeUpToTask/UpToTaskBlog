import classes from './SelectComponent.module.css';
import Input from '../UI/Input/Input';
import SelectProps from '../../api/Classes/SelectProps';
import { useState } from 'react';
import * as elType from "../../api/Constants/DynamicElementType";

export default (props) => {
    const [showSelectAddComponent, setShowSelectAddComponent] = useState(false);
    const [selectCompProps, setSelectCompProps] = useState(new SelectProps('select',
        {
            options: [{ value: 'none', displayValue: 'Please choose a Component Type' },
            { value: elType.TEXT, displayValue: 'Text' },
            { value: elType.HEADING, displayValue: 'Heading' },
            { value: elType.IMAGE, displayValue: 'image' },]
        }));



    //need to handle when the mouse click off the select to disable    
    const onSelectChangedHandler = (type) => {
        props.changed(type);
        setShowSelectAddComponent(false);
    }

    const onShowSelectCompHandler = () => {
        setShowSelectAddComponent(true);
    }


    const selectCompType = <Input elementType={selectCompProps.elementType}
        elementConfig={selectCompProps.elementConfig}
        value={selectCompProps.value}
        invalid={!selectCompProps.valid}
        shouldValidate={selectCompProps.validation}
        touched={selectCompProps.touched}
        changed={(event) => onSelectChangedHandler(event.target.value)} />

    const addComponent = showSelectAddComponent ? selectCompType : <button onClick={onShowSelectCompHandler}>Add Component</button>

    return addComponent;
}