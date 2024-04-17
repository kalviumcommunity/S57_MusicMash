import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './page/Home';
import Login from './page/(auth)/Login';

const App = () => {
  const isAuthticated = false
  return (
    <Routes>
      <Route path={isAuthticated ? '/login' : '/'} element={
        isAuthticated ?
          <Login />
          :
          <Home />
      } />
    </Routes>
  )
}

export default App