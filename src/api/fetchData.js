import axios from '../axios-firebase';
import wrapPromise from "./wrapPromise";


export default (subPath) =>{
    const promise = axios.get(subPath).then(res => res.data);
    console.log(promise);
    return wrapPromise(promise);
}