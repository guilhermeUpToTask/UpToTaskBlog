import { useState } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Posts from './containers/Posts/Posts';
import Post from './containers/Post/Post';
import Login from './containers/Login/Login';
import Management from './containers/Management/Management';
import About from './containers/About/About';
import Search from './containers/Search/Search';

import { Route, createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from 'react-router-dom';
import fetchData from './api/fetchData';


function App() {
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
        loader={() => ({categories: fetchData('/categories.json')}) }
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
