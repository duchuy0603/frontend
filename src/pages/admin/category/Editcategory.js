import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import CategoryApi from '../../../api/CategoryApi';
const Editcategory = () => {
    let history = useNavigate();
    let userId = localStorage.getItem("id")
    let { id } = useParams();
    const [listcate, setlistcate] = useState([]);
    useEffect(() => {
        const listcate = async () => {
            const { data } = await CategoryApi.getAll()
            setlistcate(data);
        }
        listcate();
    }, [listcate])
    const onEditCate = async (id, userId, cate) => {
        const { data } = await CategoryApi.update(id, userId, cate);

        setlistcate(data);

    }
    const { 0: categorys } = listcate.filter(x => x._id === id);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const add = new FormData();
        add.append('name', data.name);
        onEditCate(id, userId, add);

        history("/admin/listcate");


    }


    return (
        <div>
            <h2>Edit Category</h2>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="form-group">
                    <label for="">name</label>

                    <input type="text"
                        className={`form-control ${errors.name ? "boder border-danger" : ""}`}

                        defaultValue={categorys?.name}
                        {...register('name', { required: true, min: 0, max: 999999999999, pattern: /^[.*\S+.*]/ })}
                    />

                    {errors.name && <span className="text-warning">bạn chưa nhập tên</span>}
                    <br />
                    <button type="submit" className="btn btn-primary">edit</button>
                </div>
            </form>
        </div>
    )
}

export default Editcategory;
