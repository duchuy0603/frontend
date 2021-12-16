import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink, useNavigate } from 'react-router-dom'
import UserApi from '../api/UserApi'
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { exists, list, total, quantity, remove, destroy } from "cart-localstorage";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { color } from '@mui/system';


const User = () => {
  const data = list();

  var name = localStorage.getItem("name");

  const count = data.length;
  const dispatch = useDispatch();
  let history = useNavigate()

  async function dangxuat() {
    localStorage.clear();
    await UserApi.signout();
    history('/user/:id')
  }

  return (

    <div>
      <div className=" form-group dkdn">
        <span className="username">{name}</span>
        <div className="dropdown">
          <div className="user">
            <AccountCircleIcon style={{ color: "white", fontSize: "30px" }}>
              <span class="badge badge-danger badge-counter">7</span>
            </AccountCircleIcon>
          </div>
          <div className="dropdown-content">
            <NavLink className="nav-link" to="/user/:id">signin</NavLink>
            <NavLink className="nav-link " to="/user/:id" onClick={() => dangxuat()}>signout</NavLink>

          </div>
        </div>


        <div className="cart">
          <span className="cart-note">{count}</span>
          <span className="shopping"> <NavLink to="/cart"> <ShoppingCartOutlinedIcon style={{ color: "white", fontSize: "30px" }} /></NavLink></span>

        </div>




      </div>



    </div>
  )

}

export default User;
