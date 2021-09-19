import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { addCart } from '../../reduxcart/slide/Cartslide';
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
          <div className="col-md-8 detail-image">

            <NavLink className="Link" to={""}><img src={"http://localhost:4000/api/products/photo/" + product._id} height="550px" width="430"></img></NavLink>
          </div>
          <div className=" col-md-4  " >

            <h2>{product.name}</h2>
            <h4>Mô Tả:</h4>

            <div className="product-name">{product.description}</div>
            <h4>Giá Bán:</h4>
            <NavLink className="Link" to=""><span className="price">{product.price}$</span></NavLink>
            <br />
            <button className="btn btn-danger btn-cart" id="btn-cart" onClick={() =>(add(data))}  > Mua Ngay</button>
          </div>
        </div>
    
   

      </div>
      <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v12.0" nonce="RAODmfal"></script>
<di>
<div class="fb-comments" data-href="http://localhost:3000/" data-width="" data-numposts="5"></div>
</di>
    </div>
    

  )
}

export default ProductDetailPage
