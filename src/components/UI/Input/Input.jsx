import React, { useRef } from "react";
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    const inputRef = useRef();

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'textarea':
            inputElement = <textarea className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'select':
            inputElement =
                <select className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    )}
                </select>
            break;
        case 'file':
            inputElement =
                <input className={inputClasses.join(' ')} type={'file'}
                    ref={inputRef}
                    onChange={() => props.changed(inputRef.current.files[0])} />
            break;
        default:
            inputElement = <input className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;

    }
    const clicked = (props.removable) ? props.clicked : undefined;

    return (
        <div className={classes.Input}>
            <label className={classes.Label} onClick={clicked}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;