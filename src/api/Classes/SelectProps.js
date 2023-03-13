import InputProps from "./InputProps";

export default class SelectProps extends InputProps {

    constructor(elementType ='select', elementConfig ={options: [ { value: 'option1', displayValue: 'Option 1' },]},
    validation={}){
        super(elementType, elementConfig, validation);
    }
}