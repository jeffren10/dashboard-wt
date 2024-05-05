import React from 'react'
import App from '../App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../components/Index'


   
const Router = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<App />}>
            <Route main element={<index  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
