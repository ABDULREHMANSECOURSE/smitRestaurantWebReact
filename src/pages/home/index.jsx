import React from 'react'
import ProductCard from '../../components/productCard'

const Home = () => {
  const PProductsData = [
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75"},
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443215-Nali%20Nihari%20-min.png%3Fq%3D10&w=384&q=75"},
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443261-magaz%20Nihari-min.png%3Fq%3D10&w=384&q=75"},
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443304-Special%20Nihari-min.png%3Fq%3D10&w=384&q=75"},
  ]
  return (
    <>
      <span className='pProducts'>
        {PProductsData.map((item, index) => {
          return <ProductCard image={item.image} price={item.price} name={item.name}/>
        })}
      </span>
    </>
  )
}

export default Home