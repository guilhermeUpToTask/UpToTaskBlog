export default class InputProps {

    constructor(elementType ='input', elementConfig ={type:'text', placeholder:'your placeholder'},
     validation= {required : true}, valid = false, touched = false, value = ''){

        this.elementType = elementType;
        this.elementConfig = elementConfig;
        this.validation = validation;
        this.valid = valid;
        this.touched = touched;
        this.value = value;
    }
}   