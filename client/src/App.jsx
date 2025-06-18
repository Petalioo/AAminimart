import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext.jsx'
import Login from './components/Login.jsx'
import AllProducts from './pages/AllProducts.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import CartProduct from './pages/CartProduct.jsx'
import AddAddress from './pages/AddAddress.jsx'
import MyOrders from './pages/MyOrders.jsx'
import SellerLogin from './components/Seller/SellerLogin.jsx'
import SellerLayout from './pages/seller/SellerLayout.jsx'
import AddProduct from './pages/seller/AddProduct.jsx'
import ProductList from './pages/seller/ProductList.jsx'
import Orders from './pages/seller/Orders.jsx'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
   const {showUserLogin, isSeller} = useAppContext(); //products is used to check if the user is a seller
  return (
    <div className="text-default min-h-screen bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div className={`flex-grow ${isSellerPath ? "" : "px-2 sm:px-4 md:px-6 lg:px-16 xl:px-24 2xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<CartProduct />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/orders' element={<MyOrders />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />} >
          <Route index element={isSeller ? <AddProduct /> : null} />
          <Route path='products-list' element={<ProductList />} />
          <Route path='orders' element={<Orders />} />
        </Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;