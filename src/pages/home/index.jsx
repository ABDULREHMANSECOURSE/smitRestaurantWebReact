import React from 'react'
import ProductCard from '../../components/productCard'

const Home = () => {
  const productsData = [
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75"},
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75"},
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75"},
    { price: 49, name: "Aukat Bahar Nihari", image:"https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75"},
  ]
  return (
    <>
      <span>
        {productsData.map((item, index) => {
          return <ProductCard image={item.image} price={item.price} name={item.name}/>
        })}
      </span>
    </>
  )
}

export default Home