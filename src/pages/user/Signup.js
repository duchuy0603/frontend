import React, { useState } from 'react'
import WebsiteLayout from '../../layouts/website'
import { API } from '../../config'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Headermem from '../../components/Headermem'
import { Trans } from 'react-i18next'

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setsuccess] = useState(false);
    const signup = (user) => {
        return fetch(`${API}/signup`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            },
          
        })
            .then(respone => respone.json())
            .catch(error => console.log(error))
    }


    const onSubmit = (data, e) => {
        signup(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error)
                } else {
                    setError("")
                    setsuccess(true);
                }
            })

    }
    function showError() {
        return <div className="alert alert-danger " style={{ display: error ? "block" : "none" }}>
            {error}
        </div>

    }
    function showSuccess() {
        return <div className="alert alert-info " style={{ display: success ? "block" : "none" }}>
            Bạn đã tạo tài khoản thành công <Link to="/user/:id">Đăng nhập</Link>
        </div>

    }
    const SignUpForm = () => {

        return (

     <>
     <Headermem/>
     <form onSubmit={handleSubmit(onSubmit)} className="dk pd-5">
                <h1 className="px-6" ><Trans>Đăng Kí</Trans></h1>
                <div className="mb-3 ">
                    <label className="form-label" htmlFor="name" >Name</label>
                    <input type="text" className={`form-control ${errors.name ? "border border-danger" : ""}`}
                        name="" id="name"
                        aria-describedby="helpId" placeholder=""
                        {...register('name')}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email" >Email</label>
                    <input type="text" className={`form-control ${errors.email ? "border border-danger" : ""}`}
                        name="" id="email"
                        aria-describedby="helpId" placeholder=""
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password" >password</label>
                    <input type="password" className={`form-control ${errors.password ? "border border-danger" : ""}`}
                        name="" id="password"
                        aria-describedby="helpId" placeholder=""
                        {...register('password')}
                    />

                </div>

                <button className="btn btn-primary">Signup</button>
            </form>
     </>

        )
    }
    return (
        <div>
            {showError()}
            {showSuccess()}
            {SignUpForm()}


        </div>
    )
}


export default Signup
