import React, { useState } from 'react'
import './style.scss'
import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartSlicer';


export default function Pizza({Pizza}) {
    const [quantity,setQuantity]=useState(1);
    const [varient,setVarient]=useState("small");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
   

    function handleAddToCart(){
          if(localStorage.getItem("currentUser")){
            const additem = {Pizza,quantity,varient};
            dispatch(addToCart(additem));
          }
          else{
            alert("Please login first");
          }
    
    }

  return (
    <div className='pizza shadow p-3 mb-5 bg-body-tertiary rounded'>

        <div onClick={handleShow}>
        <h1 style={{cursor:"pointer"}}>{Pizza.name}</h1>
        <img src={Pizza.image} className ="img-fluid" style={{height:"200px",width:"200px", cursor:"pointer"}}alt="" />


        </div>
       
        <div className="flex-container">

            <div className="w-100 m-1">
            <p>Varients</p>
            <select className='form-control' value={varient} onChange={(e)=>{setVarient(e.target.value)}} >{
            Pizza.varients.map((varient,i)=>{
                return <option key={i} value={varient}>{varient}</option>
            })}</select>

            </div>
           


      < div className="w-100  m-1">
            <p>Quantity</p>
            <select className="form-control"value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>{[...Array(10).keys()].map((x,i)=>{
                return <option key={i} value={i+1}>{i+1}</option>
            })}</select>
        </div>
        </div>

        <div className="flex-container">
            <div className='m-1 w-100 '>
                <h1 className='mt-1'>Price :{Pizza.prices[0][varient]*quantity}Rs/-</h1>

            </div>
            <div className='m-1 w-100 '>
                <button onClick={handleAddToCart} className='btn'>ADD TO CART</button>
            </div>
        </div>



        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img className="img-fluid" src={Pizza.image} style={{height:"400px" }} /></Modal.Body>
        <p className='text-cente r'>{Pizza.description}</p>
        <Modal.Footer>
         <button onClick={handleClose}className='btn' style={{color:"white", backgroundColor:"red"}}>close</button>
        </Modal.Footer>
      </Modal>
        

      
    </div>
  )
}
