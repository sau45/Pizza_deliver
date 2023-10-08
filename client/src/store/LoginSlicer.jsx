import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



export const loginUser = createAsyncThunk("post/login",async(user)=>{
    try{
        
        const response = await axios.post("http://localhost:4000/api/users/login",user);
        return response.data;
    }catch(error){
        console.log(error);
    }

})
const initialState ={
    currentUser:localStorage.getItem("currentUser")? JSON.parse(localStorage.getItem("currentUser")):null,
    
}

export const LoginSlicer =createSlice({
    name:"currentuser",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            if(action.payload){

                state.currentUser=action.payload;
                state.status="fullfilled"
               
            }else{
                state.currentUser=action.payload;
                state.status="Not fullfilled"

            }
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser));
            // window.location.href='/'

        })
        builder.addCase(loginUser.rejected, (state,action)=>{
            
            
            state.status="Rejected"
        })
        builder.addCase(loginUser.pending,(state,action)=>{
            state.loading=true;
            state.status="Pending"
        })
    }

})
export const {}=LoginSlicer.actions
export default LoginSlicer.reducer