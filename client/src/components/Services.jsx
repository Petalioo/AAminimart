import React, { useState } from 'react'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      number: 1,
      title: "On-demand delivery for all your cravings, 5AM to 8PM daily",
      description: "Drinks, chips, desserts, party supplies - add to cart everything you need. We serve you daily from 5AM to 8PM in Sorsogon City. Delivered within 60 minutes."
    },
    {
      number: 2,
      title: "All set? Let's punch those out!",
      description: "Proceed to checkout. We offer Cash on Delivery (COD) only - pay when your order arrives at your doorstep in Sorsogon City."
    },
    {
      number: 3,
      title: "Sit back, wait for our knock",
      description: "Press \"order\" and we'll take care of the rest. See you in 60 minutes anywhere in Sorsogon City."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            What's the deal with <span className="text-red-500">A&A MiniMart?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for fast delivery in Sorsogon City
          </p>
        </div>

        {/* Desktop Steps Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-3xl md:text-4xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {step.number === 1 && (
                  <>
                    On-demand delivery for all your cravings,<br className="hidden sm:block"/>
                    <span className="text-red-500">5AM to 8PM daily</span>
                  </>
                )}
                {step.number === 2 && "All set? Let's punch those out!"}
                {step.number === 3 && "Sit back, wait for our knock"}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.number === 1 && (
                  <>
                    Drinks, chips, desserts, party supplies - <strong className="text-red-500">add to cart</strong> everything you need. 
                    We serve you daily from 5AM to 8PM in <strong>Sorsogon City</strong>. 
                    Delivered within <strong className="text-red-500">60 minutes</strong>.
                  </>
                )}
                {step.number === 2 && (
                  <>
                    Proceed to <strong className="text-red-500">checkout</strong>. 
                    We offer <strong>Cash on Delivery (COD)</strong> only - 
                    pay when your order arrives at your doorstep in Sorsogon City.
                  </>
                )}
                {step.number === 3 && (
                  <>
                    Press <strong className="text-red-500">"order"</strong> and we'll take care of the rest. 
                    See you in <strong className="text-red-500">60 minutes</strong> anywhere in Sorsogon City.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Visible on mobile only */}
        <div className="md:hidden relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center bg-white rounded-xl p-6 shadow-lg mx-2">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 min-h-[3rem]">
                                             {step.number === 1 && (
                         <>
                           On-demand delivery for all your cravings,{" "}
                           <span className="text-red-500">5AM to 8PM daily</span>
                         </>
                       )}
                      {step.number === 2 && "All set? Let's punch those out!"}
                      {step.number === 3 && "Sit back, wait for our knock"}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                                             {step.number === 1 && (
                         <>
                           Drinks, chips, desserts, party supplies - <strong className="text-red-500">add to cart</strong> everything you need. 
                           We serve you daily from 5AM to 8PM in <strong>Sorsogon City</strong>. 
                           Delivered within <strong className="text-red-500">60 minutes</strong>.
                         </>
                       )}
                      {step.number === 2 && (
                        <>
                          Proceed to <strong className="text-red-500">checkout</strong>. 
                          We offer <strong>Cash on Delivery (COD)</strong> only - 
                          pay when your order arrives at your doorstep in Sorsogon City.
                        </>
                      )}
                      {step.number === 3 && (
                        <>
                          Press <strong className="text-red-500">"order"</strong> and we'll take care of the rest. 
                          See you in <strong className="text-red-500">60 minutes</strong> anywhere in Sorsogon City.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services