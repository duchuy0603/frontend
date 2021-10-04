import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoryApi from '../../api/CategoryApi';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
function ListCate() {
  let userId = localStorage.getItem("id")
  const {id}=useParams();
  const [listcate,setlistcate]=useState([]);
  useEffect(() => {
    const listcate=async()=>{
        const {data}=await CategoryApi.getAll();
        setlistcate(data);
      }
      listcate();
  }, [listcate])
  const onRemovecate=async(id,userId)=>{
     await CategoryApi.remove(id,userId);
     const newdata=listcate.filter(x=>x._id!==id)
     setlistcate(newdata)
  }
    return (
        <div>
        {/* <SearchPro/> */}
        <h2>Quản lý category</h2>
        <button className="btn btn-primary " ><NavLink className="btnAdd" to="/admin/addcategory">Add</NavLink></button>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th></th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              {listcate.map((x) => (
                <tr key={x._id}>
                  <td>{x._id}</td>
                  <td>{x.name}</td>
                  <NavLink to={"/admin/editcategory/"+x._id}><td><button className="btn btn-primary" >Update</button></td></NavLink>
                  <td><button className="btn btn-danger" onClick={() => onRemovecate(x._id,userId)} >Delete</button></td>
                </tr>
              ))}
  
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default ListCate
