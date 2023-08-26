import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import SharedLayout from './components/SharedLayout'
import './components/css/style.css'
import Forgotten from './pages/Forgotten'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile'
import Aos from 'aos'
import "aos/dist/aos.css"


Aos.init({
  duration: 2000,
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgotten-password' element={<Forgotten />}></Route>
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute> }></Route>
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export function ProtectedRoute({children}){
  if(localStorage.getItem('user')){
    return children

  }
  else{
    return <Navigate to='/login'/>
  }

}



export default App
