import React from 'react'
import ProductApi from '../../api/ProductApi'
import CategoryApi from '../../api/CategoryApi';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Headermem from './../../components/Headermem';
import { Trans } from 'react-i18next';
const CategoryPage = () => {

    const {id}=useParams();
    const[products,setproduct]=useState([])
    useEffect(() => {
    try {
        const listpro = async () => {
            const { data } = await ProductApi.getAll()
            setproduct(data);
        }
        listpro();
    } catch (error) {
        console.log(error);
    }
    }, [products])
    const[listcate,setlistcate]=useState([])
    useEffect(() => {
    try {
        const listcate = async () => {
            const { data } = await CategoryApi.getAll()
            setlistcate(data);
        }
        listcate();
    } catch (error) {
        console.log(error);
    }
    }, [listcate])
const result=products.filter(x=>x.categoryId==id);

    return (
        <div>
          <Headermem></Headermem>
            <div className="row cate">
            {/* <div className="col-md-3">
                    {listcate.map((btn, index) => (

                        <NavLink className="Link" to={`/category/${btn._id}`}><button className="form-control mt-1 btn-menu" key={index}>{btn.name}</button></NavLink>
                    ))}
                </div> */}
                    <div className="col-md-3 danhmuc">
                <h4><Trans>Category</Trans></h4>
                    {listcate.map((btn, index) => (
                           
                        
                           <NavLink activeClassName className="Link mt-1" to={`/category/${btn._id}`}><div className="itemlist" key={index}><Trans>{btn.name}</Trans></div></NavLink> 
                        
                    ))}
                </div>
                <div className="col-md-9">
                <div className="row">
           {result.map((product,index)=>(
            <div className="col-md-3 ">
                    <div className="  spcate " key={index}>
                    <NavLink to={"/product/"+ product._id}><img src={"http://localhost:4000/api/products/photo/"+product._id} height="250px" width="230"></img></NavLink>
                  <div className="product-name">{product.name}</div>
                  <Link className="Link" to=""><span >{product.price}$</span></Link>
                </div>
            </div>
           
            ))} 
             </div>
             </div>
            </div>
        </div>
    )
}

export default CategoryPage;
