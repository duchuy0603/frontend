
import { exists, list, total,quantity, remove } from "cart-localstorage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductApi from "../../../api/ProductApi";
import { fetchCart } from './../../../reduxcart/slide/Cartslide';
function Cart() {
  const {id}=useParams()
// const dispatch=useDispatch();
// useEffect(() => {
// dispatch(fetchCart())
// }, [])
// const items=useSelector(state=>state.cart.items);

const count= list().length
  return (
    
     <section className="py-4 container">
       <div className="row justify-content-center">
    <div className="col-12">
<h5 > Total items:({count}) </h5>
    <table className="table table-light table-hover m-0">
<tbody>

  {list().map((item,index)=>{
return(
  <tr>
    
    <td>{item.name}</td>
     <td>{item.price}</td>
    <td>{item.quantity}</td>
    <td> <td> <img src={"http://localhost:4000/api/products/photo/"+item.id} alt="" height="120px" width="110px" /></td></td> 
    <td><button className="btn btn-info" onClick={()=>quantity(item.id,-1)}>-</button>
<button className="btn btn-info" onClick={()=>quantity(item.id,+1)}>+</button></td>
<td><button className="btn btn-danger" onClick={()=>remove(item.id)}>remove</button> </td>
  </tr>
)
  })}
</tbody>
</table>
    </div>
         <div className="col-auto ms-auto">
           <h2>Total Price:${total()}</h2>
         </div>
         <div className=" col-auto">
          <button className="btn btn-danger" onClick={()=>remove(list())}>Clear cart</button>
         </div>
         </div> 

  
    </section>
  );
}
export default Cart;
