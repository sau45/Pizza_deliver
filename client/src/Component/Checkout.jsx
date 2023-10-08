import React from 'react'
import StripeChecout from 'react-stripe-checkout';
import {orderdetail} from '../store/PlaceOrder';
import { useDispatch, useSelector } from 'react-redux';

export default function Checkout({subtotal}) {
  const currentUser=useSelector((state)=>state.currentuser.currentUser);
  const cartItems =useSelector((state)=>state.cart.cartitems)
  
  const dispatch=useDispatch();


    function tokenhandler(token){
      const order={
        token,
        subtotal,
        currentUser,
        cartItems
      }
      
     
        dispatch(orderdetail(order));

    }


  return (
    <div>
        <StripeChecout
        amount={subtotal*100}
        shippingAddress
        token={tokenhandler}
        stripeKey='pk_test_51NjnkASDXLqBIPDmcqhEdVTKdXbju8ZnKVfrvyFFwmsdPR7GD9qzH9BxtLx36oVID79nkiUhm5Jrg68QLxo1gB26004Su1AIGP'
        currency='INR'
        
        
        >

            <button className='btn'>Pay Now</button>
        </StripeChecout>
    </div>
  )
}
