import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import ProductApi from '../../../api/ProductApi';
import CategoryApi from '../../../api/CategoryApi';
import { Selector } from 'reselect';
import{Form,Input,Button,selecte} from 'reactstrap'
import Select from 'react-select'
function AddProduct() {
    let history = useHistory();
    let userId = localStorage.getItem("id");
    const name=document.querySelector("#product-name")
    const [listcate, setlistcate] = useState([]);
    useEffect(() => {
        const listcate = async () => {
            const { data } = await CategoryApi.getAll();
            setlistcate(data);
        }
        listcate();
    }, [])

    const [product, setproduct] = useState([]);
    useEffect(() => {
        const listpro = async () => {
            const { data } = await ProductApi.getAll()
            setproduct(data);
        }
        listpro();
    }, [product])
    const onAdd = async (data, userId) => {
        try {
            const { data: products } = await ProductApi.add(data, userId);


            setproduct([
                ...product,
                products
            ])
        } catch (error) {
            console.log(error);

        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
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
        onAdd(add, userId);
        history.push('/admin/search')
    }
    return (
        <div>
            <h2>Thêm sản Phẩm</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} id="form" >
                <label>Name</label>
                <input
                    type="text"
                    id="product-name"
                  {...register('name', ({ required: true , pattern: /^[.*\S+.*]/ }))}
                    className={`form-control ${errors.name ? "border border-danger" : ""}`}

                />

                {errors.name && <span className="text-warning">chưa nhập tên</span>}
                <br />
                <label>Price</label>

                <input
                    type="number"
                    className="form-control"
                    {...register('price', { required: true, min: 1, max: 999999999999 })}

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

                    className={`form-control ${errors.photo ? "border border-danger" : ""}`}
                    id="product-image"
                />
                {errors.photo && <span className="text-warning">chưa có ảnh</span>}
                <br />
                <label>description</label>
                <textarea

                    className="form-control"
                    {...register('description', { required: true })}

                    id="product-description"
                />

                <br />
                <label>quantity</label>
                <input
                    type="number"
                    className="form-control"
                    {...register('quantity', { required: true, min: 0 })}

                    className={`form-control ${errors.quantity ? "border border-danger" : ""}`}
                    id="product-quantity"

                />
                {errors.quantity && <span className="text-warning">bạn chưa nhập số lượng</span>}
                <br />
                <label>Category</label>
                <select className="form-control"
                    id="product-category"
                    {...register('categoryId', { required: true })}>
                    {listcate.map((x, index) => (
                        <option key={index} value={x._id}>{x.name}</option>
                    ))}


                </select>


                <label>status</label>
                <select className="form-control" name="status"
                    id="product-status"
                    {...register('status', { required: true })} >
                    <option value="còn hàng">Còn hàng</option>
                    <option value="hết hàng">Hết hàng</option>
                </select>


                <br />






                <button type="submit" className="btn btn-primary"  >Add</button>
            </form>
        </div>
    )
}

export default AddProduct;
