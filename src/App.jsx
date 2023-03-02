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


function App() {
  const [count, setCount] = useState(0)
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Navigate to='posts' replace/>} />
      <Route path='posts' element={<Posts/>}/>
      <Route path='post' element={<Post/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='management' element={<Management/>}/>
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
