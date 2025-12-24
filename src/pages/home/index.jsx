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
      <main>
        <span className='categoryNav'>
          {sectionBtnText.map((iten, index) => {
            return <SectionBtn text={iten.text} />
          })}
        </span>
        <span className='products'>
          <div className='searchBox'>
            <input type="text" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>
            </span>
          </div>
          <span className='pProducts'>
            {PProductsData.map((item, index) => [
              <ProductCard name={item.name} price={item.price} image={item.image} />
            ])}
          </span>
        </span>
      </main>
    </>
  )
}

export default Home