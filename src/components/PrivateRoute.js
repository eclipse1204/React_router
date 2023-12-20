import React, { Children } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function PrivateRoute(props) {
    const navigate=useNavigate();
    let isLoggedIn=props.isLoggedIn;
    if(isLoggedIn==true)
    {
        console.log("LOGGED IN");
        return props.children;
    }
    else
    { 
        console.log("NOT LOGGED IN");
        return <Navigate to="/login"></Navigate>
    }
}

export default PrivateRoute