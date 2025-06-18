import React from 'react'
import { categoriesData } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
    const {navigate} = useAppContext ()

  return (
    <div className='mt-8 sm:mt-12 md:mt-16 px-2 sm:px-4 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center w-max mx-auto mb-8 sm:mb-10 md:mb-12'>
          <p className='text-xl sm:text-2xl md:text-3xl font-medium text-center'>{categoriesData.title}</p>
          <div className='w-20 h-0.5 bg-red-500 rounded-full mt-2'></div>
        </div>
        
        {categoriesData.sections.map((section) => (
          <div key={section.id} className='mb-8 sm:mb-10 md:mb-12'>
            {/* Section Title */}
            <div className='mb-4 sm:mb-6'>
              <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2'>
                {section.title}
              </h3>
            </div>
            
            {/* Section Items Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-items-center'>
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className='group cursor-pointer py-3 sm:py-4 px-2 sm:px-3 gap-2 sm:gap-3 rounded-lg flex flex-col justify-center items-center w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] transition-all duration-300 bg-white border-2 border-gray-200'
                  onClick={() => {
                    navigate(`/products/${item.path.toLowerCase()}`)
                    scrollTo(0,0)           
                  }}
                >
                  {/* Image container - responsive sizing */}
                  <div className='w-16 sm:w-20 md:w-24 h-14 sm:h-16 md:h-20 mb-2 bg-transparent flex items-center justify-center overflow-hidden rounded-lg'>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.text}
                        className='group-hover:scale-110 transition-transform duration-300 max-w-full max-h-full object-contain'
                      />
                    ) : (
                      <div className='w-full h-full bg-gray-100 rounded-lg flex items-center justify-center'>
                        <svg className='w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <p className='text-[10px] sm:text-xs md:text-sm font-semibold text-center leading-tight mb-1 text-gray-800 px-1 group-hover:text-red-600 transition-colors'>{item.text}</p>
                  <p className='text-[9px] sm:text-[10px] md:text-xs text-gray-600 text-center leading-tight opacity-75 px-1'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* View All Products Button */}
        <div className='text-center mt-12 sm:mt-16 mb-6 sm:mb-8'>
          <button 
            onClick={() => {
              navigate('/products')
              scrollTo(0,0)
            }}
            className='inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white bg-red-500 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:scale-105 transform'
          >
            View All Products
            <svg className='w-4 sm:w-5 h-4 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories 