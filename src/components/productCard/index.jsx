import React from 'react'

const PProductCard = ({ name, price, image }) => {
  return (
    <>
      <span className='pProduct'>
        <img src={image} alt="" />
        <span className='pProductDetail'>
          <h2>{name}</h2>
          <h4>from Rs. {price}</h4>
        </span>
      </span>
    </>
  )
}

export default PProductCard