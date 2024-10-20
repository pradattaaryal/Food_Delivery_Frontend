import React from 'react';
import filterimage from '../../assets/image/filter.png';
import { useNavigate } from 'react-router-dom';

function OrdersTable() {
  const navigate = useNavigate();  // Hook for navigation

  const orders = [
    { id: 6115203, restaurant: 'DajuBhai Sweets', total: 3520, payment: 'Paid', created: '5 mins ago', status: 'Processing' },
    { id: 151036, restaurant: 'Anmol Sweets', total: 4901, payment: 'Paid', created: '10 mins ago', status: 'Processing' },
    { id: 62161061, restaurant: 'Jheer Hetauda', total: 3405, payment: 'Paid', created: '1 hour ago', status: 'Delivered' },
    { id: 623620, restaurant: 'Jheer Hetauda', total: 3245, payment: 'Unpaid', created: '02:07 PM, 06-16-2024', status: 'Cancelled' },
    { id: 6115203, restaurant: 'DajuBhai Sweets', total: 3520, payment: 'Paid', created: '5 mins ago', status: 'Processing' },
    { id: 151036, restaurant: 'Anmol Sweets', total: 4901, payment: 'Paid', created: '10 mins ago', status: 'Processing' },
    { id: 62161061, restaurant: 'Jheer Hetauda', total: 3405, payment: 'Paid', created: '1 hour ago', status: 'Delivered' },
    { id: 623620, restaurant: 'Jheer Hetauda', total: 3245, payment: 'Unpaid', created: '02:07 PM, 06-16-2024', status: 'Cancelled' },
  ];

  const handleRowClick = (id) => {
    navigate(`/orderdetail`); 
  };

  return (
    <div className="rounded-lg shadow-2xl bg-white">
      <div className='flex justify-between items-center align-middle p-3'>
        <div>
          <h2 className="text-2xl font-semibold text-red-600">Orders</h2>
        </div>
        <div className="flex items-center gap-2">
          <form action="">
            <div className="relative flex items-center">
              <input
                id="Search"
                type="text"
                className="mt-1 block w-full px-3 py-2 pr-[80px] border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Search"
              /> 
            </div>
          </form>
          <button className="bg-white border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 text-gray-500 shadow-sm hover:bg-gray-100 focus:outline-none">
            <img src={filterimage} alt="Filter Icon" className="w-6 h-6"/>
            Filters
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white text-center">
        <thead className='bg-[#E0E2E7]'>
          <tr>
            <th className="py-4">Order ID</th>
            <th className="py-4">Restaurant</th>
            <th className="py-4">Total</th>
            <th className="py-4">Payment</th>
            <th className="py-4">Created</th>
            <th className="py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr 
              key={order.id} 
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => handleRowClick(order.id)} // Redirect on row click
            >
              <td className="py-4 border-b-[1px] text-blue-500 hover:underline">{order.id}</td>
              <td className="py-4 border-b-[1px]">{order.restaurant}</td>
              <td className="py-4 border-b-[1px]">{order.total}</td>
              <td className="py-4 border-b-[1px]">{order.payment}</td>
              <td className="py-4 border-b-[1px]">{order.created}</td>
              <td className="py-4 border-b-[1px] px-2">
                <div className={`py-2 rounded-full ${order.status === 'Processing' ? 'text-yellow-500 bg-yellow-300' : order.status === 'Delivered' ? 'text-green-500 bg-green-300' : 'text-red-500 bg-red-300'}`}>
                  {order.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
