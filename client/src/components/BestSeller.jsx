import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();
    return (
        <div className='mt-8 sm:mt-12 md:mt-16'>
            <div className='flex flex-col items-center w-max mx-auto mb-6 sm:mb-8'>
                <p className='text-xl sm:text-2xl md:text-3xl font-medium text-center'>Best Sellers</p>
                <div className='w-20 h-0.5 bg-red-500 rounded-full mt-2'></div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-items-center'>
                {products.filter((product)=> product.inStock).slice(0,5).map((product, index)=>(
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default BestSeller