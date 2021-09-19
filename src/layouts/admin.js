import React from 'react'
import Headeradmin from '../components/Headermem'
import Header from '../components/Header'
import Footer from '../components/Footer'
const AdminLayout = ({ children }) => {
    return (
        <div>
           <Header/>
           <body>
          
           { children }
           </body>
            
        </div>
    )
}

export default AdminLayout
