import './App.css';

import { useState, useEffect} from "react";
import Routers from "./Routers"
import Header from './components/Header';
import ProductApi from "./api/ProductApi"
import CategoryApi from './api/CategoryApi';
import UserApi from './api/UserApi';
import { uuidv4 as v4 } from "uuid"
import ListCate from './pages/product/ListCate';
import { useParams } from 'react-router-dom';


function App() {

  // const [todos, setTodos] = useState([]);
  // console.log(todos);
  // const {id}=useParams
  // useEffect(() => {
  //   console.log("sau");
  //   // didmount
  // const listtodo = async () => {
  
  //   try {
  //     // const { data: products } = await ProductApi.getAll();
  //     const {data:product}=await ProductApi.getAll();
    
  //     setTodos(product);
  
  //   } catch (error) {
  //     console.log(error)
  //   };
  // }
  // listtodo();
  // return ()=>{
  //   console.log("truoc");
  //   setTodos(null);
   
    
  //   };
  //    // didupdate
  // }, [])

//   const onHandleAdd = async (product,userId) => {
//     try {

//       const { data } = await ProductApi.add(product,userId);
//       setTodos([
//         ...todos,
//         data
//       ])
//     } catch (error) {
//       console.log(error);
//     }
//   }
    
//   const onHandleEdit = async (id,userId ,product) => {
//     try {
//       await ProductApi.update(id,userId, product);
//       const { data: products } = await ProductApi.getAll();
//       setTodos(products);
   

//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const onHandleRemove = async (id,userId) => {
//     try {
//       const { data } = await ProductApi.remove(id,userId);
//       console.log(data);
//       const newTodos = todos.filter(item => item._id !== id);
//       setTodos(newTodos)
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   // const onChangecate= async()=>{
//   //            const {data:products}=await ProductApi.getAll();
//   //            const newProduct=products.filter(product=>product.categoryId===id)
//   //            setTodos(newProduct)

//   // }
  ///category

//   const onHandleAddcate = async (category, userId) => {
//     try {
//       await CategoryApi.add(category, userId);
//       setcate([
//         ...cate,
//         category
//       ])
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const onHandleRemovecate = async (id,userId) => {
//     try {
//        await CategoryApi.remove(id,userId);
//       const newcategory = cate.filter(x => x._id != id)
//       setcate(newcategory);
//     } catch (error) {
//       console.log(error)
//     }
//   }
//  const onHandleEditCate=async(id,userId,category)=>{
// try {
//   await CategoryApi.update(id,userId,category);
//   const {data:categorys}=CategoryApi.getAll();
//   setcate(categorys);

// } catch (error) {
//   console.log(error)
// }
//  }
//  const [user,setuser]=useState([]);
//  useEffect(()=>{
// const listuser=async()=>{
// try {
//   const {data:user}=await UserApi.getAll();
// setuser(user);
// } catch (error) {
//   console.log(error);
// }
// }
// listuser();
//  },[])

  return (
    <div className="container">
      <Routers 
 

        />
    </div>
  );
}

export default App;
