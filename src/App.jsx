import { useState, useEffect } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Posts from './containers/Posts/Posts';
import Post from './containers/Post/Post';
import Login from './containers/Login/Login';
import Management from './containers/Management/Management';
import About from './containers/About/About';
import Search from './containers/Search/Search';

import database from "./databaseInstance";
import { ref, onValue, off } from 'firebase/database';
import { categoriesUpdate } from "./store/reducers/categories";
import {useDispatch } from 'react-redux';

import { Route, createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from 'react-router-dom';
import fetchData from './api/fetchData';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
      const categoriesRef = ref(database, 'categories/');
      const onValueCallBack = onCategoriesChangeListener(categoriesRef);

      return () => {
          off(categoriesRef, 'value', onValueCallBack);
      };

  }, []);
  const onCategoriesChangeListener = (categoriesRef) =>{
    const callback = onValue(categoriesRef, (snapshot) => {

        const categoriesData = snapshot.toJSON();
        const fetchedCategories = [];
        for (let key in categoriesData) {
            fetchedCategories.push({ ...categoriesData[key], id: key });
        };
        dispatch(categoriesUpdate(fetchedCategories));
    }, (error) => {
        console.log('error', error);
    });

    return callback;
}



  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Navigate to='posts' replace/>} />
      <Route path='posts' element={<Posts/>}
      loader={() => fetchData('/posts.json')}/>

      <Route path='post/:postId' 
      //later on we need to fetchdata based on the title
        loader={ ({params}) => fetchData(`posts/${params.postId}.json`)}
        element={<Post/>}/>
      <Route path='management' 
        element={<Management/>}/>

      <Route path='login' element={<Login/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='*' element={<h1>Not Found</h1>} />
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
