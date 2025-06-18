import React from 'react'
import { NavLink } from 'react-router-dom';
import { assets, footerSections } from '../assets/assets';

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-gray-300 w-full">
            {/* Main Footer Content */}
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
                        
                        {/* Brand Section */}
                        <div className="lg:w-1/3">
                            <img className="h-10 sm:h-18 mb-4 sm:mb-6" src={assets.mainminim} alt="A&A MiniMart" />
                            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
                                Your trusted neighborhood minimart in Sorsogon City. We deliver your everyday essentials 
                                within 60 minutes with our reliable Cash on Delivery service.
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="flex flex-col sm:flex-row justify-between w-full lg:w-2/3 gap-6 sm:gap-8 lg:gap-12">
                            {footerSections.map((section, index) => (
                                <div key={index} className="flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-5">{section.title}</h3>
                                    <ul className="text-sm sm:text-base space-y-2 sm:space-y-3">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                {link.external ? (
                                                    <a 
                                                        href={link.path} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                                                    >
                                                        {link.name}
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <NavLink 
                                                        to={link.path} 
                                                        className="hover:text-red-400 transition-colors duration-300"
                                                    >
                                                        {link.name}
                                                    </NavLink>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="text-center md:text-left">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Stay Updated!</h4>
                            <p className="text-sm sm:text-base text-gray-400">Get notified about new products and special offers</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300 w-full sm:w-64"
                            />
                            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="w-full border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm sm:text-base text-gray-400">
                        <p className="text-center sm:text-left">
                            © {new Date().getFullYear()} A&A MiniMart. All rights reserved. | Proudly serving Sorsogon City
                        </p>
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a href="/privacy" className="hover:text-red-400 transition-colors duration-300">Privacy Policy</a>
                            <a href="/terms" className="hover:text-red-400 transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer