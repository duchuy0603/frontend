import React from 'react'
import Headeradmin from '../components/Headermem'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
const AdminLayout = ({ children }) => {
    return (
        <div>
           <Header/>
           <body>
           { children }
           <Outlet/>
           </body>
       
        </div>
    )
}

export default AdminLayout
