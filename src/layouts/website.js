import React from 'react'
import Header from '../components/Header'
import Headermem from '../components/Headermem'
import Footer from '../components/Footer'
const WebsiteLayout = ({ children }) => {
    return (
        <div>
            <Headermem />
           <body>
       
           { children }
           </body>
            <Footer />
        </div>
    )
}

export default WebsiteLayout
