import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { saveuserorder } from '../store/PlaceOrder';

export default function OrderScreen() {
    const currentUser=useSelector((state)=>state.currentuser.currentUser);
    const orders = useSelector((state)=>state.order.placeorder)

    const dispatch=useDispatch();
    useEffect( ()=>{
        async function fetchData(){
            const response = await axios.post("http://localhost:4000/api/orders/getuserorders",{userid:currentUser._id});
            dispatch(saveuserorder(response.data));

        }
        fetchData();

    })
  return (
    <div>
      <h2 style={{fontSize:"35px"}}>My Orders</h2>
      <div className="row">
        {
            orders && orders.map((item)=>{
                return <div className="col-md-8">
                        <div className="flex-container">
                            <div>
                                {item.orderItems.map((order)=>{
                                        return <div>
                                            <h1 style={{fontSize:"20px"}}>{order.name} [{order.varient}]*{order.quantity} = {order.price}</h1>
                                        </div>
                                })}
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>


                </div>
            })

        }
      </div>
    </div>
  )
}
