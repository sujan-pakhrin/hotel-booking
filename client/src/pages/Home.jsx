import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Header from '../components/Header'
import PropertyList from '../components/PropertyList'
import FeaturedProperties from '../components/FeaturedProperties'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='mt-[50px] flex flex-col items-center gap-[30px]'>
        <Featured />
        <h1 className='w-[1024px] text-[20px] font-bold '>Browse by property type</h1>
        <PropertyList />
        <h1 className='w-[1024px] text-[20px] font-bold '>Home guest love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home