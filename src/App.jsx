import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


// import pages
import RootLayout from './pages/RootLayout';
import Home, { loader as MovieLoader } from './pages/Home';
import SingleMovieDetail, { loader as singleMovieLoader } from './pages/SingleMovieDetail';
import Error from './pages/Error';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />} >
      <Route index loader={MovieLoader} element={<Home />} />
      <Route path="detail/:imdbId" loader={singleMovieLoader} element={<SingleMovieDetail />} />
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  )
}

export default App