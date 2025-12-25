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

export const ProductCard = () => {
  return (
    <span className='productCard'>
      <img src="https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=640&q=75" alt="" />
      <div className='productCardDetail'>
        <h2>Nihari</h2>
        <span>from Rs. 600</span>
        <button>Add</button>
      </div>
    </span>
  )
}