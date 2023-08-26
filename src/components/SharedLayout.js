import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
