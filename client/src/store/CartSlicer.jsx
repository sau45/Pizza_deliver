import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartitems: localStorage.getItem("cartitems") ? JSON.parse(localStorage.getItem("cartitems")) : [],

};

export const  cartSlicer =createSlice ({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            
          
            const {Pizza, quantity, varient}=action.payload;
            const alreadyExist = state.cartitems.find((item)=>item._id===Pizza._id);
            if(alreadyExist){
                // var Quantity = Number(alreadyExist.quantity);
                // Quantity+=Number(quantity);
                // if(Quantity <=10) {
                //     alreadyExist.quantity=Quantity.toString();
                // }
                // else{
                //     alert("Maximum 10 item of one particular food could be booked")
                // }
                // alreadyExist.price = alreadyExist.prices[0][varient] * alreadyExist.quantity;
                alert("It is already in Cart")


            }
            else{
                state.cartitems.push({
                    name:Pizza.name,
                    _id:Pizza._id,
                    image:Pizza.image,
                    varient:varient,
                    quantity:Number(quantity),
                    prices:Pizza.prices,
                    price:Pizza.prices[0][varient]*quantity
    
                })

            }

          

            localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
          
           

        }
        ,
        incrementQuantity: (state, action) => {
            
                const {_id,varient}=action.payload;
                
            const item = state.cartitems.find(item => item._id === _id && item.varient===varient);
          

            if (item) {
                var Quantity = Number(item.quantity);
                if(Quantity>=10) alert("one product item should not be greater than 10 ")
                if(Quantity<10){
                    
                    item.quantity+=1;
                }
                item.price = item.prices[0][varient] * item.quantity;

                localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
            }
        }
        ,
        decrementQuantity:(state,action)=>{
            const {_id,varient}=action.payload;
                
            const item = state.cartitems.find(item => item._id === _id && item.varient===varient);
          

            if (item) {
                
                if(item.quantity>1){
                    item.quantity -= 1;
                }
                item.price = item.prices[0][varient] * item.quantity;

                localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
            }

        },
        deleteCart: (state, action) => {
          
            const { _id, varient } = action.payload;
            const remainingItems = state.cartitems.filter(item => item._id !== _id);
            //point to insight:- use function to call dispatch in component / don't call directly in element where it is clicked to delete
            state.cartitems = remainingItems;

            localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
        }
    }

})

export const {addToCart,incrementQuantity,decrementQuantity,deleteCart}=cartSlicer.actions;
export default cartSlicer.reducer;