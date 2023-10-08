import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    userdata:localStorage.getItem("userdata")? JSON.parse(localStorage.getItem("userdata")):null,
    loading:false,
    status:"idle"
}

export const addUserinDb = createAsyncThunk("post/adduser",async (user)=>{
    try{

        const response = await axios.post("http://localhost:4000/api/users/register",user);
        return response.data;
    }catch(error){
        return error;
    }

})

export const UserSlicer = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{

            state.userdata=action.payload;

        }
    }
    ,extraReducers:(builder)=>{
        builder.addCase(addUserinDb.fulfilled,(state,action)=>{
            state.loading=false;
            state.status= action.payload;
            localStorage.setItem("userdata",JSON.stringify(state.userdata))
        })
        builder.addCase(addUserinDb.rejected, (state,action)=>{
            
            state.status="Rejected"
        })
        builder.addCase(addUserinDb.pending,(state,action)=>{
            state.loading=true;
            state.status="Pending"
        })
      

    }

})
export const {addUser}= UserSlicer.actions

export default UserSlicer.reducer
