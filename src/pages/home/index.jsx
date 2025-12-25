import React from 'react'
import { PProductCard, ProductCard } from '../../components/productCards'
import SectionBtn from '../../components/sectionBtn'

const Home = () => {
  const PopularProductsData = [
    { price: 600, name: "Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=384&q=75" },
    { price: 1000, name: "Nalli Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443215-Nali%20Nihari%20-min.png%3Fq%3D10&w=384&q=75" },
    { price: 1050, name: "Maghaz Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443261-magaz%20Nihari-min.png%3Fq%3D10&w=384&q=75" },
    { price: 1450, name: "Special Nihari", image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443304-Special%20Nihari-min.png%3Fq%3D10&w=384&q=75" },
  ]

  const sectionBtnData = [
    { text: "Nihari", link: "#nihari" },
    { text: "Haleem", link: "#haleem" },
    { text: "Biryani / Pulao", link: "#biryaniPulao" },
    { text: "Tandoor", link: "#tandoor" },
    { text: "Sweet Dishes", link: "#sweetDishes" },
    { text: "Soft Drink", link: "#softDrink" },
    { text: "Tin Pack", link: "#tinPack" }
  ]
  const productData = [
    {
      id: "nihari",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710165-_0008_NIHARI.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        {
          image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440665-_0008_7a.jpg%3Fq%3D10&w=640&q=75", name: "Nihari", price: "600"
        },
        {
          image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443215-Nali%20Nihari%20-min.png%3Fq%3D10&w=640&q=75", name: "Nalli Nihari", price: "1000"
        },
        {
          image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443261-magaz%20Nihari-min.png%3Fq%3D10&w=640&q=75", name: "Maghaz Nihari", price: "1050"
        },
        {
          image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443304-Special%20Nihari-min.png%3Fq%3D10&w=640&q=75", name: "Special Nihari", price: "1450"
        }
      ]
    },
    {
      id: "haleem",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710160-_0007_HALEEM.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        {
          image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711017-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Chiken", price: "200"
        },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443348-Beef%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Beef", price: "200" }
      ]
    },
    {
      id: "biryaniPulao",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710155-_0006_biryani%2520and%2520piulao.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440739-_0002_Javed%20New%20Design%204a.jpg%3Fq%3D10&w=640&q=75", name: "Chicken Biryani", price: "320" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711039-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Chicken Pulao", price: "320" }
      ]
    },
    {
      id: "tandoor",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710135-_0003_Tandoor.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697811007-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Dhoot Wali Roti", price: "50" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697440833-_0000_Javed%20New%20Design%206a.jpg%3Fq%3D10&w=640&q=75", name: "Roti", price: "30" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711159-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Sheermal", price: "100" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711130-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Taftan", price: "100" }
      ]
    },
    {
      id: "sweetDishes",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710131-_0002_Sweet%2520Dishes.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711122-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Single Rabri", price: "200" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711115-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Kheer", price: "100" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697711107-Javed%20Nihari.png%3Fq%3D10&w=640&q=75", name: "Kheer", price: "180" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443463-Rabri.png%3Fq%3D10&w=640&q=75", name: "Rabri", price: "700" }
      ]
    },
    {
      id: "softDrink",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710127-_0001_Soft%2520Drink.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        { image: "https://qarshihealthshop.com/cdn/shop/products/JS_3083961a-49c0-412e-81f5-eb33740fda78.png?v=1629455809", name: "Jam-e-Shirin", price: "476" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1708499051-ssss.webp%3Fq%3D10&w=640&q=75", name: "Mineral Water", price: "60" }
      ]
    },
    {
      id: "tinPack",
      topBaner: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710122-_0000_tin%2520pack.jpg%3Fq%3D10&w=1920&q=75",
      products: [
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443501-_0006_9a.jpg%3Fq%3D10&w=640&q=75", name: "Nihari Can", price: "1600" },
        { image: "https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697443501-_0006_9a.jpg%3Fq%3D10&w=640&q=75", name: "Beef Haleem Can", price: "1400" }
      ]
    }
  ]

  return (
    <>
      <main>
        <span className='categoryNav'>
          {sectionBtnData.map((iten, index) => {
            return <SectionBtn text={iten.text} link={iten.link} />
          })}
        </span>
        <div className='productsSection'>
          <div className='searchBox'>
            <input type="text" placeholder='Search for Nihari' />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>
            </span>
          </div>
          <div className='popularItems'>
            <h2>Popular Items</h2>
            <p>Most ordered right now</p>
          </div>
          <span className='pProducts'>
            {PopularProductsData.map((item, index) => [
              <PProductCard name={item.name} price={item.price} image={item.image} />
            ])}
          </span>
          <div className='productsMenu'>
            {productData.map((item, index) => {
              return (
                <section id={item.id} className='productMenuSection'>
                  <img src={item.topBaner} alt="" />
                  <div className='products'>
                    {item.products.map((product, index) => {
                      return (
                        <ProductCard image={product.image} name={product.name} price={product.price} />
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home