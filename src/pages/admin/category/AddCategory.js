import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import CategoryApi from '../../../api/CategoryApi'



function AddCategory() {
    let userId = localStorage.getItem("id")

    let history = useHistory();
    const [listcate, setlistcate] = useState([]);
    useEffect(() => {
        const listcate = async () => {
            const { data } = await CategoryApi.getAll()
            setlistcate(data);
        }
        listcate();
    }, [listcate])
    const onAddCate = async (cate, userId) => {
        const { data } = await CategoryApi.add(cate, userId);
        setlistcate([
            ...listcate,
            data
        ])
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const addcate = new FormData();
        addcate.append("name", data.name);
        onAddCate(addcate, userId);
        //   const action=add(addcate,userId)
        //         dispatch(action);
        history.push('/admin/listcate')

    }

    return (
        <div>
            <h2>Add category</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} id="form" >
                <label>Name</label>
                <input
                    type="text"
                    id="category-name"
                    {...register('name', { required: true, pattern: /^[.*\S+.*]/ })}
                    className={`form-control ${errors.name ? "border border-danger" : ""}`}

                />
             {errors.name && <span className="text-warning">bạn chưa nhập tên hoặc nhập chưa đúng định dạng</span>}
                <br />
                <button type="submit" className="btn btn-primary"  >Add</button>
            </form>
        </div>
    )
}

export default AddCategory;
