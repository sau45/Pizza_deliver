import React from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, deleteCart, incrementQuantity } from '../store/CartSlicer';
import Checkout from '../Component/Checkout';


export default function CartScreen() {
    const cartitem = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch();
    const handleRemoveCart=(item)=>{
        dispatch(deleteCart(item));
    }
    const subtotal = cartitem.reduce((add,item)=>  add+item.price ,0
    )

    return (
        <div>
            <div className="row">
                <div className="col-md-6 " style={{marginLeft:"150px"}}>
                    <h1 style={{ margin:"30px",font: "40px" }}>My Cart</h1>
                    {
                        cartitem.map((item) => {
                           
                            return (
                                <div className="d-flex m-1">
                                    <div className='text-left m-1 w-100 '>
                                        <h1 style={{fontSize:"20px"}}>{item.name}[{item.varient}]</h1>
                                        <h1 style={{fontSize:"20px"}} >Price : {item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                                        <h1 style={{display:"inline" ,fontSize:"20px"}}>Quantity: </h1>
                                        <i className="fa fa-plus" onClick={()=>{dispatch(incrementQuantity(item))}} style={{cursor:"pointer" ,color:"green" , margin:"8px"}} aria-hidden="true"></i>
                                        <b>{item.quantity}</b>
                                        <i className="fa fa-minus" onClick={()=>{dispatch(decrementQuantity(item))}} style={{cursor:"pointer" ,color:"red" ,margin:"8px"}} aria-hidden="true"></i>
                                       
                                    </div>

                                    <div className='m-1 , w-100' >
                                    <img src={item.image} style={{height:"80px",width:"80px"}} />
                                    </div>
                                    <div className='m-1 , w-100' >
                                    <i className="fa fa-trash" onClick={()=>handleRemoveCart(item)} style={{cursor:"pointer",color:"red" ,margin:"8px"}} aria-hidden="true"></i>
                                    </div>
                                    <hr/>
                                </div>)
                        })
                    }


                </div>
                <div className="col-md-4" style={{textAlign:"right"}}>
                    <h2 style={{fontSize:"40px"}}> SubTotal : {subtotal}/Rs</h2>
                     <Checkout subtotal={subtotal}/>
                </div>
            </div>
        </div>
    )
}
