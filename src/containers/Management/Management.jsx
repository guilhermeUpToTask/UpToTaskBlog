import React, { useRef, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import axios from 'axios';

const management = (props) =>{
    const [fileValue, setFileValue] = useState();
    const inputRef = useRef();

    const onChangeHandler=(value) =>{
        setFileValue(value);
    }

    const onSubmitFile=()=>{
        const form = new FormData();
        form.append('file',fileValue);
        form.append('folder', 'post');
        form.append('upload_preset','h1myoo06');
        axios.post('https://api.cloudinary.com/v1_1/dwflpcrlz/upload',form)
        .then((res)=> console.log(res.data.public_id))
        .catch((err) => console.log(err));

    }

    return(
        <div>
            management page
            <CreatePost/>
        <form>
            <input type={'file'}
            ref={inputRef}
            onChange={() => onChangeHandler(inputRef.current.files[0])}/>
            </form>

            <button onClick={onSubmitFile}>Submit Image</button>
        </div>
    )
}

export default management;