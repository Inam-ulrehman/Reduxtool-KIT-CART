import React from 'react'
import Cart from './Cart'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllItems, addAllItems } from '../features/cart/cartSlice'
const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((state) => state.cart)
  if (amount < 1) {
    return (
      <div className='title'>
        <h2>Your cart is empty </h2>
        <button className='btn' onClick={() => dispatch(addAllItems())}>
          please go back to shopping
        </button>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='cart-container'>
        <div className='title'>
          <h2>cart Items</h2>
        </div>
        <div className='items'>
          <div>
            {cartItems.map((item) => {
              return <Cart key={item.id} {...item} />
            })}
          </div>
          <div className='btn-container'>
            <button className='btn' onClick={() => dispatch(removeAllItems())}>
              Remove all
            </button>
          </div>
          <hr />
          <div className='footer'>
            <h5>Total price</h5>
            <p>Total : {total} $ </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 600px;
  margin: auto;
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }
  .btn-container {
    padding: 1rem;
    text-align: center;
  }
`

export default CartContainer
