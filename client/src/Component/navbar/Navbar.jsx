import React from 'react'
import './style.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const cartItem =  useSelector((state)=>state.cart.cartitems)
  const currentState = useSelector((state)=>state.currentuser.currentUser)

  const logout =()=>{
    
    localStorage.removeItem("currentUser");
    
   
  }
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm p-2 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">SAURAVPIZZA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav ">
              {currentState ?  
            (<div class="dropdown">
            <a class="dropdown-toggle mt-2 text-dark text-decoration-none " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {currentState.name}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/order">Order</a></li>
              <li><a className="dropdown-item" onClick={logout} href="/login">Log Out</a></li>
           
            </ul>
          </div>):(  <li className="nav-item">
                <a className="nav-link active"  aria-current="page" href="/login">Login</a>
              </li>)
            
              }
              
              <li className="nav-item">
                <a className="nav-link" href="/cart">Cart { currentState?cartItem.length:0}</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
