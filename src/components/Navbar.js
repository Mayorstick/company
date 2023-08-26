import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logp from './images/logp.png'
import './css/style.css'

function Navbar() {
    const location=useLocation ()
    console.log(location);
  return (
  
    <div>
      <nav class="navbar navbar-expand-lg  bg-body-tertiary fixed-top     ">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand" ><img src={logp} alt="teni" width={60} height={60}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class={`nav-link ${location.pathname=== '/' ? "linkActive" : 'nav-link '}`} aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to='about' class={`nav-link ${location.pathname=== '/about' ? "linkActive" : 'nav-link '}`} >About</Link>
        </li>
        <li class="nav-item">
          <Link to='services' class={`nav-link ${location.pathname=== '/services' ? "linkActive" : 'nav-link '}`} >Services</Link>
        </li>
        <li class="nav-item">
          <Link to='contact' class={`nav-link ${location.pathname=== '/contact' ? "linkActive" : 'nav-link '}`} >Contacts</Link>
        </li>
        <li class="nav-item">
          <Link to='login' class="nav-link" >Login</Link>
        </li>
        {/* <li class="nav-item">
          <Link to='register' class="nav-link" >Register</Link>
        </li> */}
        
        
      </ul>
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
