
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { authenticate } from '../auth';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react-dom';

const Nav = () => {
    var user=localStorage.getItem('role');
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* <li className="nav-item">
                <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
            </li> */}
            {/* <li className="nav-item">
                <Link className="nav-link admin "  id="admin" to="admin/listpro">Product</Link>
            </li> */}
            <li className="nav-item">
                <Link className="nav-link admin "  id="admin" to="/admin/search">Product</Link>
            </li>
            <li className="nav-item admin">
                <Link className="nav-link"id="admin" to="/admin/listcate">category</Link>
            </li>
      
       
            
       
        </ul>
    )
}


export default Nav;
