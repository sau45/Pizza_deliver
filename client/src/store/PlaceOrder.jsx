import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    placeorder:localStorage.getItem("placeorder")? JSON.parse(localStorage.getItem("placeorder")):null,
    loading:false,
    status:"idle"
}


export const orderdetail = createAsyncThunk("post/adduser",async (order)=>{
    
    try{

        const response = await axios.post("http://localhost:4000/api/orders/placeorders",order);
        return response.data;
    }catch(error){
        return error;
    }

})

export const PlaceOrderSlicer = createSlice({
    name:"order",
    initialState,
    reducers:{
        saveuserorder:(state,action)=>{

            state.placeorder=action.payload;
            localStorage.setItem("placeorder",JSON.stringify(state.placeorder))

        }
    }
    ,extraReducers:(builder)=>{
        builder.addCase(orderdetail.fulfilled,(state,action)=>{
            state.loading=false;
            state.status= action.payload;
          
        })
        builder.addCase(orderdetail.rejected, (state,action)=>{
            
            state.status="Rejected"
        })
        builder.addCase(orderdetail.pending,(state,action)=>{
            state.loading=true;
            state.status="Pending"
        })
      

    }

})
export const {saveuserorder}= PlaceOrderSlicer.actions

export default PlaceOrderSlicer.reducer
