import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    });

    const navigate=useNavigate();

    const [showPassword,setshowPassword]=useState(false);

    function changeHandler(event)
    {
        const {name,value}=event.target;
        setFormData((prev)=>{
            return {...prev,[name]:value}
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-1 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
            </label>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name='email' type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter Email id'/>
            <div className='relative mt-3 flex flex-col gap-y-1'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                </label>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name='password' type={showPassword? "text":"password"} required value={formData.password} onChange={changeHandler} placeholder='Enter Password'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                    setshowPassword(!showPassword);
                }}>{showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>
                <Link to="#"><p className='text-xs mt-1 w-full text-blue-100 flex justify-end'>Forgot Password</p></Link>
            </div>
            <button className='bg-yellow-50 mt-8 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>Sign In</button>
        </form>
    )
}

export default LoginForm;