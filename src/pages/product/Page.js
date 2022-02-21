import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductApi from "../../api/ProductApi";
import CategoryApi from "../../api/CategoryApi";
import { useState } from "react";
import { useEffect } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useCallback } from "react";
import { Trans } from "react-i18next";
import Headermem from "../../components/Headermem";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { useParams } from "react-router";
const Page = () => {
   const {page}=useParams();


const dispatch=useDispatch();
  const [product, setproduct] = useState([]);

 const history=useNavigate()
  useEffect(() => {
    try {
      const listpro = async () => {
        const { data } = await ProductApi.getAll();
        setproduct(data);
      };
      listpro();
    } catch (error) {
      console.log(error);
    }
  }, [product]);
  const [listcate, setlistcate] = useState([]);

  useEffect(() => {
    try {
      const listcate = async () => {
        const { data } = await CategoryApi.getAll();
        setlistcate(data);
      };
      listcate();
    } catch (error) {
      console.log(error);
    }
  }, [listcate]);

  const [change, setchange] = useState(1); 
 

  const handlechange = useCallback(
    (event, value) => {
      setchange(value);
      history("/productpage/"+value)
    
    },
    [change]
  );
  const [page1, setpage] = useState([]);

  useEffect(() => {
    try {
      const fetchpage = async () => {
    
        const respone = await fetch(`http://localhost:4000/api/news/${(page)}`);
        const responejson = await respone.json();
        setpage(responejson);
      };
      fetchpage();
    } catch (error) {
      console.log(error);
    }
  }, [change]);
  const count = product.length;
  const total = Math.ceil(count / 8);

  return (
    <div>
      <Headermem></Headermem>
      <div className="row cate">
        <div className="col-md-3 danhmuc">
          <h4>
            <Trans>Category</Trans>
          </h4>
          {listcate.map((btn, index) => (
            <NavLink
              activeClassName
              className="Link"
              to={`/category/${btn._id}`}
            >
              <div className="itemlist" key={index}>
                <Trans>{btn.name}</Trans>
              </div>
            </NavLink>
          ))}
        </div>

        <div className=" col-md-9">
          <div className="row">
            {page1.map((product, index) => (
              <div className="col-md-3  col-sm-4 col-xs-12 respro " key={index}>
                <div className="pro">
                  <NavLink className="Link" to={"/product/" + product._id}>
                    <img
                      src={
                        "http://localhost:4000/api/products/photo/" +
                        product._id
                      }
                      height="250px"
                      width="230px"
                    ></img>
                  </NavLink>
                  <div className="product-name">{product.name}</div>
                  <Link className="Link" to="">
                    <span>{product.price}$</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <br />
          <Stack spacing={1}>
            <Pagination count={total} page={page} onChange={handlechange} />
          </Stack>
         
        </div>
      </div>
    </div>
  );
};

export default Page;
