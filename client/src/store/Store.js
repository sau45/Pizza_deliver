import { configureStore } from '@reduxjs/toolkit'
import PizzaSlicer from './PizzaSlicer'
import cartSlicer from './CartSlicer'
import UserSlicer from './UserSlicer'
import LoginSlicer from './LoginSlicer'
import  PlaceOrderSlicer  from './PlaceOrder'


export const store = configureStore({
  reducer: {
    pizza:PizzaSlicer,
    cart:cartSlicer,
    user:UserSlicer,
    currentuser:LoginSlicer,
    order:PlaceOrderSlicer
    
  },
})

