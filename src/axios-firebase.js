import axios from "axios";


const instance = axios.create({
    baseURL: 'https://up-to-task-blog-default-rtdb.firebaseio.com/'
})


export default instance;