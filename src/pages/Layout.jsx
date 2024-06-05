import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Link to="/form">
      Form
      </Link>
      <Link to="/date">
      Date
      </Link>
      <Outlet/>
      <footer>Made in China </footer>

    </div>
  )
}

export default Layout