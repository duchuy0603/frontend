import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink, useHistory } from 'react-router-dom'
import UserApi from '../api/UserApi'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  '../style/useradmin.css'
const UserAdim = () => {
  var name= localStorage.getItem("name");
 
let history=useHistory()
var user=localStorage.getItem('user')
 async function dangxuat(){
  localStorage.clear();
await UserApi.signout();
history.push('/user/:id')
  }
    return (
    
        <div>
          <div className=" form-group dkdn">
          <span className="username">{name}</span>
          <div className="dropdown ad">
        <AccountCircleIcon sx={{color:"white"}}></AccountCircleIcon>
          <div className="dropdown-content">
            <NavLink className="nav-link" to="/user/:id">signin</NavLink>
            <NavLink className="nav-link " to="/user/:id" onClick={() => dangxuat()}>signout</NavLink>

          </div>
        </div>



         
          </div>
         
       
        
        </div>
    )
    
}

export default UserAdim;