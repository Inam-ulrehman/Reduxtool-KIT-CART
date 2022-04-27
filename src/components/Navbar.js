import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart)

  return (
    <>
      <Wrapper>
        <div>
          <h5 className='margin'>REDUX Tool Kit Cart</h5>
          <p className='margin'>Cart amount : {amount}</p>
        </div>
      </Wrapper>
      <Outlet />
    </>
  )
}
const Wrapper = styled.nav`
  background-color: var(--primary-1);
  padding: 1rem;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .margin {
    margin: 0;
  }
`

export default Navbar
