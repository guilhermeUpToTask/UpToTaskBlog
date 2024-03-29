import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';


//we have to change the name later so can be more generic like firebaseInstance
const firebaseConfig = {
    apiKey: "AIzaSyAl3WtNOplhEx8yrEUDw13RIASHoHquKvQ",
    authDomain: "up-to-task-blog.firebaseapp.com",
    databaseURL: "https://up-to-task-blog-default-rtdb.firebaseio.com",
    projectId: "up-to-task-blog",
    storageBucket: "up-to-task-blog.appspot.com",
    messagingSenderId: "14562160959",
    appId: "1:14562160959:web:8375344369286e7068e38a",
    measurementId: "G-YGYW8B9Y1T"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app, 'https://up-to-task-blog-default-rtdb.firebaseio.com/');
const auth = getAuth(app);

export {auth};
export {database}
export default app;