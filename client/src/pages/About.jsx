import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6" >
              <span className="inline-block border-b-4 border-red-300 pb-2">About</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your neighborhood grocery store committed to quality, convenience, and community
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
        
            <div className="lg:col-span-2">
              <p className="text-center text-gray-600 mb-4 leading-relaxed">
             A&A Minimart is an online delivery store in Sorsogon City. We promise to provide 
              you the convenience of shopping and delivering your groceries straight 
              at your doorstep. We aim to make your grocery shopping fun and easy!
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that grocery shopping should be convenient, affordable, 
                and enjoyable. That's why we've created an easy-to-use platform 
                that brings the best of our store directly to your fingertips.
              </p>
            </div>
          
        </div>

        {/* Mission & Values */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">We source the freshest products and maintain the highest quality standards.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Focus</h3>
              <p className="text-gray-600 text-sm">Supporting local suppliers and giving back to our community.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Continuously improving our services with modern technology and solutions.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Convenience</h3>
              <p className="text-gray-600 text-sm">Making grocery shopping fast, easy, and accessible for everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;