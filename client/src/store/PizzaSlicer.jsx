import { createSlice } from '@reduxjs/toolkit'





const initialState={
  data:[],
  status:"idle"
}


export const PizzaSlicer = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addData:(state,action)=>{

      state.data.push(...action.payload);

    },
    updateStatus:(state,action)=>{
      state.status=action.payload;
    }
    
 
  },
  
})

// Action creators are generated for each case reducer function
export const { addData,updateStatus } = PizzaSlicer.actions

export default  PizzaSlicer.reducer;

