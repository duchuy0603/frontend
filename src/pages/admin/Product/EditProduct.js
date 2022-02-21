import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import ProductApi from '../../../api/ProductApi'
import CategoryApi from '../../../api/CategoryApi'
function EditProduct() {
    let { id } = useParams();
    let history = useNavigate();

    const [product, setproduct] = useState([])
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
    }, [product])
    const onEdit = async (id, userId, product) => {
        const { data } = await ProductApi.update(id, userId, product);

        setproduct(data);
    }
    const { 0: products } = product.filter(x => x._id === id);

    const [listcate, setlistcate] = useState([]);
    useEffect(() => {
        const listcate = async () => {
            const { data } = await CategoryApi.getAll();
            setlistcate(data);

        }
        listcate();
      
    }, [])
    
    useEffect(() => {
     function setEdit(){
        setValue("name", products?.name); 
        setValue("price", products?.price); 
        setValue("photo", products?.photo);  
        setValue("description", products?.description); 
        setValue("quantity", products?.quantity);  
        setValue("status", products?.status);
        setValue("categoryId", products?.categoryId); 
        setValue("shipping", products?.shipping); 
     
      }
      setEdit();
    },[])

   
    let userId = localStorage.getItem('id')

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const add = new FormData();
        add.append("name", data.name)
        add.append("price", data.price);
        add.append("photo", data.photo[0]);
        add.append("description", data.description);
        add.append("quantity", data.quantity);
        add.append("status", data.status);
        add.append("categoryId", data.categoryId);
        add.append("shipping", true);

        onEdit(id, userId, add);


        history('/admin/search')

    }
//      const setEdit = () => {
//      setValue("name", products?.name); 
//      setValue("price", products?.price); 
//      setValue("photo", products?.photo); 
//      setValue("description", products?.description); 
//      setValue("quantity", products?.quantity); 
//      setValue("status", products?.status);
//      setValue("categoryId", products?.categoryId); 
//      setValue("shipping", products?.shipping); 
//  }

    return (
        <div>
            <h2>EditProduct</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} id="form" >
                <label>Name</label>
                <input
                    type="text"

                  
                    id="product-name"

                    {...register('name', { required: true, pattern: /^[.*\S+.*]/ })}
                    className={`form-control ${errors.name ? "border border-danger" : ""}`}
                //   value={products.name}
                />
                {errors.name && <span className="text-warning">bạn chưa nhập tên hoặc nhập chưa đúng định dạng</span>}
                <br />
                <label>Price</label>

                <input
                    type="number"
                  
                    className="form-control"

                    {...register('price', { required: true, min: 1, max: 999999999999999999 })}

                    className={`form-control ${errors.price ? "border border-danger" : ""}`}
                    id="product-price"
                />
                {errors.price && <span className="text-warning">giá không hợp lệ</span>}
                <br />
                <label>image</label>
                <input
                    type="file"
                    className="form-control"

                    {...register('photo', { required: true })}

                    className={`form-control ${errors?.photo ? "border border-danger" : ""}`}
                    id="product-image"
                />

                {errors.photo && <span className="text-warning">chưa có ảnh</span>}
                <br />
                <label>description</label>
                <textarea

                    className="form-control"
               
                    {...register('description', { required: true })}

                    className={`form-control ${errors.description ? "border border-danger" : ""}`}
                    id="product-description"
                />
                {errors.description && <span className="text-warning"></span>}
                <br />
                <label>quantity</label>
                <input
                    type="number"
                    className="form-control"
                 
                    {...register('quantity', { required: true, min: 1, max: 99999999 })}

                    className={`form-control ${errors.quantity ? "border border-danger" : ""}`}
                    id="product-quantity"

                />
                {errors.quantity && <span className="text-warning">số lượng không hợp lệ</span>}
                <br />
                <label>Category</label>
                <select className="form-control"
                    // placeholder={products?.categoryId}
                    id="product-category"
                    {...register('categoryId', { required: true })}>
                    {/* <option value={products?.id}>{products.name}</option> */}
                    {listcate.map((x, index) => (

                        <option key={index} value={x._id}>{x.name}</option>
                    ))}
                </select>

                <label>status</label>
                <select className="form-control" name="status"

                    id="product-status"

                    // placeholder=
                    {...register('status', { required: true })} >
                    <option value={products?.status}>{products?.status}</option>
                    <option value="hết hàng">Còn hàng</option>
                    <option value="hết hàng">Hết hàng</option>
                </select>
                {/* <label>categoryId</label>
              <select className="form-control" name="status"    {...register('categoryId',{required:true})} id="">
                  <option  value="còn hàng">Còn hàng</option>
                  <option value="hết hàng">Hết hàng</option>
                </select> */}
                <br />

                <button type="submit" className="btn btn-primary"  >Add</button>
                {/* <button type="submit" onClick={()=>setEdit()} className="btn btn-primary"  >dit</button> */}
            </form>
        </div>
    )
}

export default EditProduct;
