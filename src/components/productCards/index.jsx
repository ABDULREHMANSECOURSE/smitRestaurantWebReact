import React from 'react'

export const PProductCard = ({ name, price, image }) => {
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
};

export const ProductCard = ({ image, name, price }) => {
  return (
    <span className='productCard'>
      <img src={image} alt="" />
      <div className='productCardDetail'>
        <h2>{name}</h2>
        <span>from Rs. {price}</span>
        <button>Add</button>
      </div>
    </span>
  )
}