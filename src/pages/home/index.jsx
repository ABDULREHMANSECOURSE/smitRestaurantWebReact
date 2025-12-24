import React from 'react'
import ProductCard from '../../components/productCard'
import SectionBtn from '../../components/sectionBtn'

const Home = () => {
  const PProductsData = [
    { price: 600, name: "Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75" },
    { price: 1000, name: "Nalli Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443215-Nali%20Nihari%20-min.png%3Fq%3D10&w=384&q=75" },
    { price: 1050, name: "Maghaz Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443261-magaz%20Nihari-min.png%3Fq%3D10&w=384&q=75" },
    { price: 1450, name: "Special Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443304-Special%20Nihari-min.png%3Fq%3D10&w=384&q=75" },
  ]
  const sectionBtnText = [
    { text: "Nihari", link: "nihari" },
    { text: "Haleem", link: "Haleem" },
    { text: "Biryani / Pulao", link: "biryaniPulao" },
    { text: "Tandoor", link: "tandoor" },
    { text: "Sweet Dishes", link: "sweetDishes" },
    { text: "Soft Drink", link: "softDrink" },
    { text: "Tin Pack", link: "tinPack" }
  ]
  return (
    <>
      <span className='categoryNav'>
        {sectionBtnText.map((iten, index) => {
          return <SectionBtn text={iten.text} />
        })}
      </span>
      <span className='pProducts'>
        {PProductsData.map((item, index) => [
          <ProductCard name={item.name} price={item.price} image={item.image} />
        ])}
      </span>
    </>
  )
}

export default Home