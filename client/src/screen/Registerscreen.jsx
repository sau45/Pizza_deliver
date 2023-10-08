
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addUserinDb } from '../store/UserSlicer';


export default function Registerscreen() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const dispatch = useDispatch();
    // const {} = useSelector((state)=>state.user.userdata);
    const register =()=>{
        if(password!==confirmPassword){
            alert("Pasword is not matching");
        }else{
           const user={
            name,
            email,
            password
           }
          dispatch(addUserinDb(user));
          dispatch(addUser(user));
           setName("");
           setEmail("");
           setPassword("");
           setConfirmPassword("");
        }
    }
  return (
    <div>
      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded" style={{textAlign:"left"}}>
            <h2 className='text-center m-2' style={{fontSize:"30px"}}>Register</h2>
            <div>
                <input required type="text"  placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control m-1 ' />
                <input required type="text"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control m-1' />
                <input required type="text"  placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control m-1' />
                <input required type="text" placeholder='confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='form-control m-1' />
                <button onClick={register} className='btn mt-2 mb-2' >REGISTER</button>
                <br/>
                <a href="/login" style={{color:"black"}}>Click here to login</a>
            </div>
        </div>
      </div>
    </div>
  )
}
