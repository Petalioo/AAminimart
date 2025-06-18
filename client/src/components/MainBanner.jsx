import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
    
const MainBanner = () => {
  return (
    <div className='relative w-full'>
        <img src={assets.delivery_banner} alt="banner" className='w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] hidden sm:block object-cover' />
        <img src={assets.delivery_banner} alt="banner" className='w-full h-[280px] sm:hidden object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-8 py-6 sm:py-8'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6'>
                   Consumer Goods Trading<br className='hidden sm:block'/>
                   <span className='sm:hidden'> </span>Wholesale and Retail
                 </h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed'>
                    Order any time and any day, get them delivered within 60 minutes in Sorsogon City.
                </p>
                
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-medium'>
                    <Link 
                        to={"/products"} 
                        className='group flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 transition rounded-lg text-white cursor-pointer w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm sm:text-base md:text-lg font-semibold'
                        style={{backgroundColor: '#ff5757'}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4040'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ff5757'}
                    >
                        Shop now
                        <img 
                            className='transition group-hover:translate-x-1 w-4 sm:w-5 h-4 sm:h-5' 
                            src={assets.white_arrow_icon} 
                            alt="arrow" 
                        />
                    </Link>

                    <Link 
                        to={"/products"} 
                        className='group flex sm:hidden md:flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 cursor-pointer text-white hover:text-gray-200 transition border-2 border-white rounded-lg w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-gray-800'
                    >
                        Explore deals
                        <img 
                            className='transition group-hover:translate-x-1 w-4 sm:w-5 h-4 sm:h-5' 
                            src={assets.white_arrow_icon} 
                            alt="arrow" 
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBanner