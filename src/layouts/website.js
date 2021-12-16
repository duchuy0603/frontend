import React from 'react'
import Header from '../components/Header'
import Headermem from '../components/Headermem'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
const WebsiteLayout = ({ children }) => {
    return (
        <div>
   
           <body>
       
           { children }
           
           </body>
           <Outlet/>
            <Footer />
           
        </div>
    )
}

export default WebsiteLayout
