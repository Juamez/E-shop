import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/global.scss'

import Login from '../containers/Login'
import Layout from '../containers/Layout'
import RecoveryPassword from '../containers/RecoveryPassword'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />  
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App