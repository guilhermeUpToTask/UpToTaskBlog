import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

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

export default database;