import React from 'react'
import { BrowserRouter, Routes as ReactDOMRoutes, Route, } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/login'

import NotFound from '../pages/Error/NotFound/notFound'
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ReactDOMRoutes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
      </ReactDOMRoutes>
    </BrowserRouter>
  )
}

export default MyRoutes