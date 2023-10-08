import React, { useEffect, useState } from 'react'
import { loginUser } from '../store/LoginSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Loginscreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const check = useSelector((state) => state.currentuser);




  useEffect(() => {
    if (check.currentUser) {
      navigate("/"); // Replace with the appropriate path

    }
  }, [check.currentUser]);
 
    


  const login = () => {

    const user = {
      email,
      password
    }
    

    dispatch(loginUser(user));

    setEmail("");
    setPassword("");
   
    if (!check.currentUser) {
      alert('Authentication failed. You are not a valid user.');
    }
   
   
    
  }



  return (
    <div>
      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded " style={{ textAlign: "left" }}>
          <h2 className='text-center m-2' style={{ fontSize: "30px" }}>LOGIN</h2>
          <div>

            <input required type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control m-1' />
            <input required type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control m-1' />

            <button onClick={login} className='btn mt-2 mb-2' >LOGIN</button>
            <br />
            <a className='mt-5' style={{ color: "black" }} href="/register">Click here to register</a>
          </div>
        </div>
      </div>
    </div>
  )
}
