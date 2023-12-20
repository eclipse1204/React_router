import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';

function SignupForm({setIsLoggedIn}) {

    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const navigate=useNavigate();

    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password!==formData.confirmPassword)
        {
            toast.error("Passwords don't match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }

    const [showPassword,setshowPassword]=useState(false);
    const [accountType,setaccountType]=useState("student");

    function changeHandler(event)
    {
        const {name,value}=event.target;
        setFormData((prev)=>{
            return {...prev,[name]:value}
        })
    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType==="student"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{
                    setaccountType("student");
                }}>Student</button>
                <button className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{
                    setaccountType("instructor");
                }}>Instructor</button>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col gap-3'>
                <div className='flex gap-4'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                        </label>
                        <input required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="text" name='firstName' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName} />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                        </label>
                        <input required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="text" name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName} />
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                    </label>
                    <input required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="email" name='email' onChange={changeHandler} placeholder='Enter Email Address' value={formData.email} />
                </div>
                <div className='flex gap-4'>
                    <div className='relative flex flex-col gap-1 w-full'>
                        <label>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                        </label>
                        <input required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword? "text":"password"} name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password} />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                            setshowPassword(!showPassword);
                            }}>{showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                        </span>
                    </div>
                    <div className='relative flex flex-col gap-1 w-full'>
                        <label>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                        </label>
                        <input required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword? "text":"password"} name='confirmPassword' onChange={changeHandler} placeholder='Confirm Password' value={formData.confirmPassword} />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                            setshowPassword(!showPassword);
                            }}>{showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                        </span>
                    </div>
                </div>
                <button className='bg-yellow-50 mt-8 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;