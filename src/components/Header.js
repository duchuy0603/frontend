import React from 'react'
import Nav from './Nav';
import Search from './Search';
import UserAdmin from './UserAdmin';
import Slide from './Slide';
import { Outlet } from 'react-router';
const Header = () => {
  return (
    <div>
      <header>
        {/* Fixed navbar */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Nguyễn Đức Huy</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
          
              <Nav />
             
            
          
             
           <UserAdmin/>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header
