import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProductApi from '../api/ProductApi';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
var userId=localStorage.getItem('id')
const history=useHistory
function Search() {
    const [todos, setTodos] = useState([]);
  
    const {id}=useParams();
    useEffect(() => {
      console.log("sau");
      // didmount
    const listtodo = async () => {
    
      try {
        // const { data: products } = await ProductApi.getAll();
        const {data:product}=await ProductApi.getAll();
      
        setTodos(product);
    
      } catch (error) {
        console.log(error)
      };
    }
    listtodo();
    return ()=>{
      console.log("truoc");
      setTodos(null);
     
      
      };
       // didupdate
    }, [])
    const [change, setchange] = useState(1);

    const handlechange = (event, value) => {
        setchange(value)
    }


    const [page, setpage] = useState([]);
    useEffect(() => {
        try {
            const fetchpage = async () => {
                const respone = await fetch(`http://localhost:4000/api/news/${change}`)

                const responejson = await respone.json()

                setpage(responejson);
            }
            fetchpage();
        } catch (error) {
            console.log(error);
        }
    }, [change])
    const count=todos.length;
    const total=Math.ceil(count/8)
  console.log(total);
  const  onRemove=async(id,userId)=>{
      await ProductApi.remove(id,userId);
      const newpro=todos.filter(x=>x._id!==id);
      setTodos(newpro)

  }
  const removeAll=async(userId)=>{
    const question= window.confirm('xoa');
    if(question){
      await ProductApi.removeAll(userId);

    }
   
  }
    const [search,setsearch]=useState([]);
    return (
        <div>
            
              <input className="user" type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="search" onChange={e=>setsearch(e.target.value)}/>
      
              <button className="btn btn-primary " ><NavLink className="btnAdd" to="/admin/addproduct">Thêm Sản Phẩm</NavLink></button>
              <button className="btn btn-danger"onClick={()=>removeAll(userId)} >DeleteAll</button>

     {page.filter((val)=>{
         if(search==""){
             return val;
         }else if(val.name.toLowerCase().includes(search.toLowerCase())){
             return val;
         }
         
     }).map((val,key)=>{
      
       return(
        <div className="user"  key={key}> 

<table className="table table-striped table-sm mx-2 px-4">
<thead>
<tr>
<th>id</th>
<th>Name</th>
<th>Pirce</th>
<th>Image</th>
<th>Quantity</th>
<th>Category</th>
<th>status</th>
<th></th>
<th></th>
</tr>
</thead>
     <tbody>
  
         <tr >
           <td>{val._id}</td>
           <td>{val.name}</td>
           <td>{val.price}</td>
           <td> <img src={"http://localhost:4000/api/products/photo/" + val._id} alt="" height="120px" width="110px" /></td>
          
           <td>{val.quantity}</td>
           <td>{val.categoryId}</td>
           <td>{val.status}
           </td>
           <NavLink to={"/admin/editproduct/" + val._id}><td><button className="btn btn-primary" >Update</button></td></NavLink>
           <td><button className="btn btn-danger" onClick={() => onRemove(val._id,userId)} >Delete</button></td>
       
         </tr>

  

     </tbody>
   </table>
   <br />





        </div>
    )
})
}

<Stack sx={{color:"red"}}  spacing={2}>

<Pagination count={total} page={change} onChange={handlechange} />
</Stack>
   </div>
);
    
}

export default Search;
{/* <thead>
<tr>
  <th>id</th>
  <th>Name</th>
  <th>Pirce</th>
  <th>Image</th>
  <th>Quantity</th>
  <th>Category</th>
  <th>status</th>
  <th></th>
  <th></th>
</tr>
</thead> */}