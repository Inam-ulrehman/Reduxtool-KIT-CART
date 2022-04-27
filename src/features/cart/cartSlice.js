import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 500,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeAllItems: (state) => {
      state.cartItems = []
    },
    removeOneItem: (state, action) => {
      const itemID = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
    },
    increaseAmount: (state, action) => {
      const itemID = action.payload

      const newItem = state.cartItems.find((item) => item.id === itemID)
      newItem.amount = newItem.amount + 1
    },
    decreaseAmount: (state, action) => {
      const itemID = action.payload

      const newItem = state.cartItems.find((item) => item.id === itemID)
      newItem.amount = newItem.amount - 1
    },
    totalCart: (state) => {
      let amount = 0
      let total = 0

      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.price * amount
      })
      state.amount = amount
      state.total = total.toFixed(2)
    },
    addAllItems: (state) => {
      state.cartItems = cartItems
    },
  },
})

export const {
  removeAllItems,
  removeOneItem,
  increaseAmount,
  decreaseAmount,
  totalCart,
  addAllItems,
} = cartSlice.actions
export default cartSlice.reducer
