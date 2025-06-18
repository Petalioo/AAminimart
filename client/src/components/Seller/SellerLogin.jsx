import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'

const SellerLogin = () => {
    const {isSeller, setSeller, navigate} = useAppContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setSeller(true)   
    }
    useEffect(() => {
        if(isSeller) {
            navigate('/seller')
        }
    }, [isSeller])
  return !isSeller && (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
          <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>
            <p className='text-2xl font-medium m-auto'><span className='text-primary'>Seller</span> Login</p>
            <div className="w-full ">
              <p>Email</p>
              <input 
              onChange={(e) => setEmail(e.target.value)} value={email}
                type="email" 
                placeholder="enter you email" 
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-200" 
                required
              />
            </div>
            <div className="w-full ">
              <p>Password</p>
              <input 
                type="password" 
                placeholder="enter your password"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-200" 
                onChange={(e) => setPassword(e.target.value)} value={password}
                required
              />
            </div>
                 <button 
              
                className='bg-red-300 hover:bg-red-400 text-center text-white px-4 py-2 rounded-md cursor-pointer'>
                 Login</button>
          </div>
        </form>
  )
}

export default SellerLogin