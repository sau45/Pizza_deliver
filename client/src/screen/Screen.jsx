import React, { useEffect } from 'react'
// import pizzas from '../pizzasdata'
import Pizza from '../Component/pizza/Pizza'
import { addData, updateStatus } from '../store/PizzaSlicer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Loading from '../Component/Loading'
import Error from '../Component/Error'



export default function Screen() {
    const dispatch=useDispatch();
    let value = useSelector((state)=>state.pizza.status);
    const pizzas = useSelector((state)=>state.pizza.data);
   

     useEffect(()=>{
        async function fetchData(){
        dispatch(updateStatus("loading"));
      
        const data = await axios.get("http://localhost:4000/api/pizzas/getallpizzas");
        if(!data){
            dispatch(updateStatus("error"));
        }else{
            dispatch(addData(data.data));
            dispatch(updateStatus("fullfilled"));
        }
        

     }  
      fetchData();
    },[])
    
  return (
   <>
   <div className="row justify-content-center">

    {
        value==="loading" ? (<Loading/>): value==="error"? (<Error error={"Something went wrong"}/>):<>
          {
        pizzas.map((item,i)=>{
            return (
                <div className="col-md-3 m-3" key={item._id}>
                <div  >
                    <Pizza  Pizza={item}/>
                </div>

            </div>

            )
           
            
        })
    }
        
        </>
        
    }
  
   </div>
   </>
  )
}
