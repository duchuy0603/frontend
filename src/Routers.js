import React, { Children } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Header from './components/Header';
import AddProduct from './pages/admin/Product/AddProduct';
import EditProduct from './pages/admin/Product/EditProduct';
import AddCategory from './pages/admin/category/AddCategory';
import CategoryPage from './pages/product/category';
import ProductDetailPage from './pages/product/Detail';
import ListPro from './pages/product/ListPro';
import ListCate from './pages/product/ListCate';
import Editcategory from './pages/admin/category/Editcategory';
import HomePage from './pages/Home';
import AdminLayout from './layouts/admin';
import WebsiteLayout from './layouts/website';
import Signin from '././pages/user/Signin'
import Signup from '././pages/user/Signup'
import Page from './pages/product/Page';
import Pagination from './Pagination';
import Update from './pages/user/update';
import Search from './components/Search';
import Cart from '.././src/pages/admin/Cart/Cartstore'
import { useNavigate } from 'react-router';
import { useRoutes } from 'react-router';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
// import SearchPro from './components/SearchPro';
const routers =()=> {
 
//   console.log('ccc',role);
  function PrivateRoute({ children }) {  
   const role=localStorage.getItem('role')
     return role==1? children : <Navigate to="/user/:id" />;
   }
 return (
  <BrowserRouter>
  <Routes>

    <Route element={  
      
      <PrivateRoute><AdminLayout/></PrivateRoute>
      }>
  <Route  path="/admin/search" element={ <Search/>}>
            
            </Route>
            <Route  path="/admin/dashboard"> 
            </Route>
            <Route  path="/admin/listpro" element={  <ListPro   />}>
            
            </Route>
            <Route  path="/admin/addproduct" element={ <AddProduct  />}>
             
            </Route>
            <Route  path="/admin/editproduct/:id" element={ <EditProduct  />} >
             
            </Route>
            <Route  path="/admin/addcategory" element={<AddCategory  />} >
        
            </Route>
            <Route  path="/admin/listcate" element={ <ListCate  />}  >
            
            </Route>
            <Route  path="/admin/editcategory/:id" element={  <Editcategory  />} >
            
            </Route>
            <Route  path="/admin/Page/:id"element={  <Pagination  />}>
            
            </Route>
            <Route  path="/admin/update/:id" element={ <Update  />} >
             
            </Route>
 
      
          {/* <Route  path="/admin/SearchPro" >
            <SearchPro  />
          </Route> */}
  
    
      
    </Route>
    {/* website layout */}
    <Route element={<WebsiteLayout />} >
          <Route  path="/" element={ <HomePage   />} >
           
          </Route>
          <Route  path="/product" element={  <Page  />} >
          
          </Route>
          <Route  path="/category/:id" element={  <CategoryPage  />}>
          
          </Route>
          <Route  path="/user/:id" element={  <Signin />} >
          
          </Route>
          <Route  path="/user" element={ <Signup />}>
         
          </Route>
          <Route  path="/cart" element={ <Cart  />}  >
           
          </Route>
          <Route  path="/product/:id" element={ <ProductDetailPage  />}  >
           
          </Route>
          <Route  path="/product/:id" element={<Pagination  />} >
      
          </Route>
        
     
     
    </Route>
  
    </Routes>

</BrowserRouter>
 )
}
export default routers;