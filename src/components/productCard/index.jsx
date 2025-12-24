import React from 'react'

const PProductCard = ({ name, price, image }) => {
  return (
    <>
      <span className='pProduct'>
        <span className='pProductImage'>
          <img src={image} alt="" />
        </span>
        <span className='pProductDetail'>
          <h2 className='pProductName'>{name}</h2>
          <span className='pProductPrice'>from Rs. {price}</span>
        </span>
      </span>
    </>
  )
}

export default PProductCard