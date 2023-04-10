import { useState, useEffect } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Posts from './containers/Posts/Posts';
import Post from './containers/Post/Post';
import Management from './containers/Management/Management';
import About from './containers/About/About';
import Search from './containers/Search/Search';
import Categories from './containers/Categories/Categories';
import { Suspense } from 'react';
import Spinner from './components/UI/Spinner/Spinner';
import { database } from "./databaseInstance";
import { ref, onValue, off } from 'firebase/database';
import { categoriesUpdate } from "./store/reducers/categories";
import { useDispatch } from 'react-redux';

import { Route, createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from 'react-router-dom';
import fetchData from './api/fetchData';


function App() {

  //later we need to outsorce this code to a component for exemple
  const dispatch = useDispatch();
  useEffect(() => {
    const categoriesRef = ref(database, 'categories/');
    const onValueCallBack = onCategoriesChangeListener(categoriesRef);

    return () => {
      off(categoriesRef, 'value', onValueCallBack);
    };

  }, []);

  // need to add a first get method so we can have something to show initialy
  const onCategoriesChangeListener = (categoriesRef) => {
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

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to='posts' replace />} />

      <Route path='posts'
        element={
          <Suspense fallback={<Spinner />}>
            <Posts />
          </Suspense>}
        loader={({request}) => {
          const category= new URL(request.url).searchParams.get('category');
          return (category)? fetchData(`/posts.json?orderBy="info/categoryId"&equalTo="${category}"`) : fetchData('/posts.json');
          }} />

      <Route path='post/:postId'
        //later on we need to fetchdata based on the title
        loader={({ params }) => fetchData(`posts/${params.postId}.json`)}
        element={<Post />} />

      <Route path='management' element={<Management />} />
      <Route path='search' element={<Search />} />
      <Route path='about' element={<About />} />
      <Route path='categories' element={<Categories />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
