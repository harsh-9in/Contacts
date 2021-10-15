import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom';
import { register } from '../../context/actions/register';
import RegisterUI from '../../layouts/Register';
import useForm from './useForm';

const RegisterContainer = () => {
    useEffect(()=>{
        register();
    },[]);
    return (
        <RegisterUI form={useForm()} />
        // <div>
        //     <h1>Register</h1>
        //     <Link to="login">Login Here</Link>

        // </div>
    );
};

export default RegisterContainer;
