
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { authenticate } from '../auth';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import { useTranslation, Trans } from "react-i18next";
import { t } from 'i18next';
import { changeLanguage } from 'i18next';
import { useDispatch } from 'react-redux';
const Navmem = () => {
    var user=localStorage.getItem('role');

    

    return (
   
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                
    <button onClick={() => changeLanguage("vi")}>vi</button>
    <button onClick={() => changeLanguage("en")}>en</button>
            <li className="nav-item">
                <Link className="nav-link active"  aria-current="page" to="/"><Trans>Home</Trans></Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link admin "  id="admin" to="admin/listpro">Product</Link>
            </li> */}
    
            <li className="nav-item admin">
                <NavLink className="nav-link" to="/productpage/:page"><Trans>Page</Trans></NavLink>
            </li>
       
            
       
        </ul>
    )
}


export default Navmem;
