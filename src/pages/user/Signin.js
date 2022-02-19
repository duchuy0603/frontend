import React, { useState } from 'react'
import WebsiteLayout from '../../layouts/website'
import { API } from '../../config'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { authenticate, signin } from '../../auth'
import { Link } from 'react-router-dom'
import UserApi from '../../api/UserApi'
import Headermem from '../../components/Headermem'
import { useDispatch } from 'react-redux'
import { savetoken } from '../../redux/store/AuthSlide'
import { Trans } from 'react-i18next'
const Signin = () => {
    let navigate = useNavigate();
    const role = localStorage.getItem('role')
    // let navigate=useNavigate ()
    const dispath = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);
    const signin = (user) => {
        return fetch(`${API}/signin`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(respone => respone.json())
            .catch(error => console.log(error))
    }
    // const signin=async(user)=>{

    // await UserApi.signin(user)

    // }




    const onSubmit = (data, e) => {
        setloading(true);
        signin(data)
            .then(dataUser => {
                console.log(dataUser);
                if (dataUser.error) {
                    seterror(dataUser.error);
                    setloading(false);
                } else {
                      dispath(savetoken(dataUser))
                   
                    // authenticate(dataUser, () => {
                    //     console.log('huy',role);
                        if (dataUser.user.role===1) {
                       
                                setTimeout(() => {
                                    navigate("/admin/search")
                                },1000);
                           
                        }
                        else if (dataUser.user.role===0) {
                            navigate('/')
                        }
                    // })
                }
            })

    }
    const ShowError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>

            {error}
        </div>

    }
    const ShowLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...loading</h2>
        </div>
    }
    const SigninForm = () => {

        return (
            <>
                <Headermem />

                <form onSubmit={handleSubmit(onSubmit)} className="dk ">
                    <h1 className="px-6" ><Trans>Login</Trans></h1>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email" >Email</label>
                        <input type="text" className="form-control"
                            name="" id="email"
                            aria-describedby="helpId" placeholder=""
                            {...register('email')}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password" >password</label>
                        <input type="password" className="form-control"
                            name="" id="password"
                            aria-describedby="helpId" placeholder=""
                            {...register('password')}
                        />

                    </div>

                    <button className="btn btn-primary">Signin</button>
                    <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>

                    <br />
                    <span>Bạn chưa có tài khoản  <Link to="/user">Đăng kí</Link></span>

                </form>
            </>

        )
    }
    return (
        <div>
            {ShowError()}
            {ShowLoading()}
            {SigninForm()}


        </div>
    )
}

export default Signin;
