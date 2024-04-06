import React from 'react'
import { BrowserRouter, Routes as ReactDOMRoutes, Route, } from 'react-router-dom'
import Home from '../pages/Home/Home'
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ReactDOMRoutes>
          <Route exact path='/' element={<Home />} />
      </ReactDOMRoutes>
    </BrowserRouter>
  )
}

export default MyRoutes