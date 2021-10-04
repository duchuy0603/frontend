import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCart } from 'react-use-cart';
import ProductApi from '../../api/ProductApi';
import CommentApi from '../../api/comment';
import {add,total,get,list} from 'cart-localstorage'

const ProductDetailPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispath=useDispatch();
  const name = localStorage.getItem("name")
  let userId = localStorage.getItem("id")
  const { addItem } = useCart();

  const { register, handleSubmit, formState: { errors } } = useForm()



  const [product, setproduct] = useState([]);
  useEffect(() => {
    const detail = async () => {
      try {
        const { data } = await ProductApi.get(id)
        setproduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    detail();
  }, [])
const data={
  id:product._id,
  name:product.name,
  price:product.price
}
const Addcart=()=>{
  add(data)
  history.push('/cart')
}



//   const [comment ,setcomment]=useState([])

//   useEffect(() => {
//    const listcomment=async()=>{
// const {data}=await CommentApi.getAll();
// setcomment(data)
//    }
//     listcomment();
//   }, [])

//  const onaddComment=async(item)=>{
// const {data}=await CommentApi.add(item)
// setcomment([
//   ...comment,
//   data
// ])
//  }
  // const onSubmit =async () => {
  // const {data}=await CartApi.add(data);


  // }
 
 
  return (
    <div>
      {/* {handleSubmit(onSubmit({product}))} */}
      <div className=" row container" key={product._id} >
        <div className="row detail ">
          <div className="col-md-7 detail-image">

           <img src={"http://localhost:4000/api/products/photo/" + product._id} height="550px" width="430"></img>
          </div>
          <div className=" col-md-5  " >

            <h2>{product.name}</h2>
            <h4>Mô Tả:</h4>

            <div className="product-name">{product.description}</div>
            <h4>Giá Bán:</h4>
            <NavLink className="Link" to=""><span className="price">{product.price}$</span></NavLink>
            <br />
            <button className="btn btn-danger btn-cart" id="btn-cart" onClick={() =>Addcart()}  > Mua Ngay</button>
          </div>
        </div>
    
   

      </div>
      
<div>
  <br/>
<div class="fb-comments" data-href="http://localhost:3000/" data-width="" data-numposts="5"></div>
</div>
    </div>
    

  )
}

export default ProductDetailPage
