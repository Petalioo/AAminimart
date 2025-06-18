import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const {user, setUser, setShowUserLogin, navigate, searchQuery, setSearchQuery, getCartCount} = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate('/');
  }
    useEffect(() => {
      if(searchQuery.length > 0){
        navigate('/products');
      }
    }, [searchQuery])

  return (
    <>
      {/* Banner - Above navbar */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-1.5 sm:py-2 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="inline-block w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse border border-white shadow-sm"></span>
              <span className="font-medium">We're Open!</span>
            </div>
            <div className="hidden sm:block text-gray-100">|</div>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center">
              <span className="font-medium text-xs sm:text-sm">Hours: 5AM - 8PM Daily</span>
              <span className="hidden sm:inline text-gray-100">•</span>
              <span className="text-yellow-200 text-xs sm:text-sm">⚡ Fast delivery within 60 minutes in Sorsogon City!</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between px-3 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-3 sm:py-4 border-b border-gray-300 bg-white relative transition-all">

   
    <NavLink to='/' onClick={() =>{setOpen(false)}}>
        <img className="h-8 sm:h-10 md:h-12" src={assets.minimlogo} alt="logo" />
    </NavLink>

    {/* Desktop Menu */}
    <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base">
        <NavLink to='/' className="hover:text-red-500 transition-colors">Home</NavLink>
        <NavLink to='/products' className="hover:text-red-500 transition-colors">Products</NavLink>
        <NavLink to='/contact' className="hover:text-red-500 transition-colors">Contact</NavLink>
        <NavLink to='/about' className="hover:text-red-500 transition-colors">About</NavLink>
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 py-1.5 rounded-full min-w-[200px]">
            <input onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
            <img src={assets.search_icon} alt="search" className='w-5 h-5'/>
        </div>

        <div onClick={() =>{navigate('/cart')}} className="relative cursor-pointer p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <img src={assets.cart1} alt="cart" className='w-5 sm:w-6 opacity-100'/>
            <button className="absolute -top-1 -right-1 text-xs text-white bg-red-500 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium">{getCartCount()}</button>
        </div>

        {!user ? ( 
        <button onClick={() =>{setShowUserLogin(true)}} className="cursor-pointer px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 transition text-white rounded-full text-xs sm:text-sm md:text-base font-medium" style={{backgroundColor: '#ff5757'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4040'} onMouseLeave={(e) => e.target.style.backgroundColor = '#ff5757'}>
            Login
        </button>)
        :(
          <div className='relative group'> 
            <img src={assets.profile_icon}  className='w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer'/>
            <ul className='hidden group-hover:block absolute top-10 sm:top-12 right-0 w-36 sm:w-40 bg-white shadow-lg border rounded-md p-2 z-50'>
              <li onClick={() =>{navigate('/profile')}} className='p-1.5 hover:bg-gray-100 cursor-pointer rounded text-sm'>My Profile</li>
              <li onClick={() =>{navigate('/orders')}} className='p-1.5 hover:bg-gray-100 cursor-pointer rounded text-sm'>My Orders</li>
              <li onClick={logout} className='p-1.5 hover:bg-gray-100 cursor-pointer rounded text-sm'>Logout</li>
            </ul>
          </div>
        )
        }
    </div>

    {/* Mobile Search, Cart & Menu */}
    <div className="flex sm:hidden items-center gap-2 xs:gap-3">
        {/* Mobile Search Button */}
        <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
        >
            <img src={assets.search_icon} alt="search" className='w-4 h-4 xs:w-5 xs:h-5'/>
        </button>
        
        {/* Mobile Cart */}
        <div onClick={() =>{navigate('/cart')}} className="relative cursor-pointer p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <img src={assets.cart1} alt="cart" className='w-4 h-4 xs:w-5 xs:h-5 opacity-100'/>
            <button className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 text-xs text-white bg-red-500 w-3.5 h-3.5 xs:w-4 xs:h-4 rounded-full flex items-center justify-center text-[9px] xs:text-[10px] font-medium">{getCartCount()}</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <img src={assets.menu_icon} alt="menu" className="w-5 h-5 xs:w-6 xs:h-6"/>
        </button>
    </div>

    {/* Mobile Menu */}
    {open && (
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] sm:top-[70px] left-0 w-full bg-white shadow-lg border-t py-4 flex-col items-start gap-3 px-4 sm:px-6 text-sm sm:text-base md:hidden z-40`}>
        <NavLink to='/' onClick={() => setOpen(false)} className="py-2 w-full hover:text-red-500 transition-colors border-b border-gray-100">Home</NavLink>
        <NavLink to='/products' onClick={() => setOpen(false)} className="py-2 w-full hover:text-red-500 transition-colors border-b border-gray-100">Products</NavLink>
        <NavLink to='/contact' onClick={() => setOpen(false)} className="py-2 w-full hover:text-red-500 transition-colors border-b border-gray-100">Contact</NavLink>
        <NavLink to='/about' onClick={() => setOpen(false)} className="py-2 w-full hover:text-red-500 transition-colors border-b border-gray-100">About</NavLink>
       
        
       {user && 
        <NavLink to='/orders' onClick={() => setOpen(false)} className="py-2 w-full hover:text-red-500 transition-colors border-b border-gray-100">My Orders</NavLink>
        }

       { !user ? (   
       <button onClick={() =>{setOpen(false); setShowUserLogin(true)}} 
        className="cursor-pointer px-6 py-2.5 mt-3 w-full transition text-white rounded-full text-sm font-medium" style={{backgroundColor: '#ff5757'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4040'} onMouseLeave={(e) => e.target.style.backgroundColor = '#ff5757'}>
            Login
        </button>) : (
           <button onClick={logout} className="cursor-pointer px-6 py-2.5 mt-3 w-full transition text-white rounded-full text-sm font-medium" style={{backgroundColor: '#ff5757'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4040'} onMouseLeave={(e) => e.target.style.backgroundColor = '#ff5757'}>
           Logout
       </button>
        )}
    </div>)}

</nav>

      {/* Responsive Search Input - Appears when search button is clicked */}
      {showSearch && (
        <div className="sm:hidden bg-white border-b border-gray-200 px-3 xs:px-4 py-3 shadow-sm animate-slideDown">
          <div className="flex items-center gap-2 xs:gap-3 border border-gray-300 px-3 xs:px-4 py-2 xs:py-2.5 rounded-full bg-gray-50 focus-within:bg-white focus-within:border-red-300 transition-all">
            <img src={assets.search_icon} alt="search" className='w-4 h-4 xs:w-5 xs:h-5 text-gray-400'/>
            <input 
              className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm xs:text-base" 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button 
              onClick={() => setShowSearch(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar