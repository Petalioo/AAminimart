import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
const ProductCard = ({product}) => {
    const [count, setCount] = React.useState(0);

    const {currency,addToCart,updateCartItem,removeFromCart,cartItems, navigate} = useAppContext();

    return product && (
        <div onClick={() => {
            navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
            scrollTo(0, 0);
          }}
        className="border border-gray-500/20 rounded-md px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-white w-full max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[240px] mx-auto">
            <div className="group cursor-pointer flex items-center justify-center px-1 sm:px-2 mb-2">
                <img className="group-hover:scale-105 transition w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] h-auto object-contain" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-xs sm:text-sm">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider mb-1">{product.category}</p>
                <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg truncate w-full mb-2">{product.name}</p>
                <div className="flex items-center gap-0.5 mb-2">
                    {Array(5).fill('').map((_, i) => (
                          <img key={i} className='w-2.5 sm:w-3 md:w-3.5' src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" style={{filter: i < 4 ? 'hue-rotate(-120deg) saturate(3) brightness(1.5)' : 'none'}} />
                    ))}
                    <p className="text-xs sm:text-sm ml-1">(4)</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-1 mt-2">
                    <div className="w-full sm:w-auto">
                        <p className="text-sm sm:text-base md:text-xl font-medium text-red-400">
                            {currency}{product.offerPrice}
                        </p>
                        <p className="text-gray-500/60 text-xs sm:text-sm line-through">
                            {currency}{product.price}
                        </p>
                    </div>
                    <div onClick={(e) => {e.stopPropagation();}} className="text-red-500 w-full sm:w-auto">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-red-50 border border-red-200 w-full sm:w-[70px] md:w-[80px] h-[32px] sm:h-[34px] rounded text-red-600 font-medium cursor-pointer hover:bg-red-100 transition-colors text-xs sm:text-sm" 
                            onClick={() => addToCart(product._id)} >
                                <img src={assets.cart1} alt="cart1" className="w-3 sm:w-4 h-3 sm:h-4" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-[70px] md:w-20 h-[32px] sm:h-[34px] bg-red-50 border border-red-200 rounded select-none">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-sm sm:text-md px-1 sm:px-2 h-full text-red-600 hover:bg-red-100 transition-colors rounded-l flex-1 sm:flex-none" >
                                    -
                                </button>
                                <span className="w-4 sm:w-5 text-center text-red-600 font-medium text-xs sm:text-sm">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer text-sm sm:text-md px-1 sm:px-2 h-full text-red-600 hover:bg-red-100 transition-colors rounded-r flex-1 sm:flex-none" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;