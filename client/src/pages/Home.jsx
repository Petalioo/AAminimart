import React from 'react'
import MainBanner from '../components/MainBanner.jsx'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import Services from '../components/Services'
import StoreLocation from '../components/StoreLocation'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Services />
      <Categories />
      <BestSeller />
      <StoreLocation />
    </div>
  )
}

export default Home