import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets, dummyOrders } from '../../assets/assets'

const Orders = () => {
  const {currency} = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
  setOrders(dummyOrders)
  
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  return (
    <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
    <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
            {orders.map((order, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start p-5 max-w-6xl rounded-md border border-gray-300 bg-white shadow-sm">
                    {/* Order Items Section */}
                    <div className="md:col-span-2 flex items-start gap-3">
                        <img className="w-12 h-12 object-cover flex-shrink-0" src={assets.box_icon} alt="boxIcon" />
                        <div className="flex flex-col gap-1">
                            {order.items.map((item, index) => (
                                <p key={index} className="font-medium text-sm">
                                    {item.product.name} <span className="text-red-500">x {item.quantity}</span>
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="text-sm text-gray-700">
                      <p className='font-medium text-gray-900 mb-1'>
                        {order.address.firstName} {order.address.lastName}
                      </p>
                      <p>{order.address.street}, {order.address.city}</p>
                      <p>{order.address.state}, {order.address.zipcode}</p>
                      <p>{order.address.country}</p>
                      <p className="mt-1 font-medium">{order.address.phone}</p>
                    </div>

                    {/* Amount Section */}
                    <div className="flex items-center justify-center md:justify-start">
                        <p className="font-bold text-lg text-green-600">
                            {currency}{order.amount}
                        </p>
                    </div>

                    {/* Payment Info Section */}
                    <div className="text-sm text-gray-600 space-y-1">
                        <p><span className="font-medium">Method:</span> {order.paymentType}</p>
                        <p><span className="font-medium">Date:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p><span className="font-medium">Payment:</span> 
                            <span className={`ml-1 px-2 py-1 rounded-full text-xs font-medium ${
                                order.isPaid 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                                {order.isPaid ? "Paid" : "Pending"}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Orders