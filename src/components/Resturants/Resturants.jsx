import React from 'react';
import eye from '../../assets/Action/eye.png';
import icon from '../../assets/Action/icon.png';
import trash from '../../assets/Action/trash.png';
import Img from './Img.png'
function Restaurants() {
  const restaurants = [
    {
      id: '1',
      name: 'Vaishnav Sweets',
      contact: '9865412091',
      address: 'Hetauda-1',
      openingHours: '10AM-11PM',
      joined: '29 Dec 2022',
    },
    {
      id: '2',
      name: 'Anmol Sweets',
      contact: '9865412054',
      address: 'Hetauda-2',
      openingHours: '10AM-10PM',
      joined: '24 Dec 2022',
    },
    {
      id: '3',
      name: 'Daju Bhai Sweets',
      contact: '9865412102',
      address: 'Hetauda-3',
      openingHours: '11AM-11PM',
      joined: '12 Dec 2022',
    },
    {
      id: '4',
      name: 'Hotel Bashukala',
      contact: '9865411201',
      address: 'Hetauda-4',
      openingHours: '5PM-11PM',
      joined: '21 Oct 2022',
    },
    {
      id: '5',
      name: 'Jheer Hetauda',
      contact: '9865416520',
      address: 'Hetauda-5',
      openingHours: '12PM-10PM',
      joined: '21 Oct 2022',
    },
    {
      id: '6',
      name: 'Sutra Lounge',
      contact: '9865412049',
      address: 'Hetauda-6',
      openingHours: '10AM-11PM',
      joined: '21 Sep 2022',
    },
    {
      id: '7',
      name: 'Sesame',
      contact: '9865412061',
      address: 'Hetauda-7',
      openingHours: '2PM-9PM',
      joined: '19 Sep 2022',
    },
    {
      id: '8',
      name: 'Bhungro Thakali',
      contact: '9865412492',
      address: 'Hetauda-8',
      openingHours: '1PM-11PM',
      joined: '19 Sep 2022',
    },
    {
      id: '9',
      name: 'Grace Cafe',
      contact: '9865414951',
      address: 'Hetauda-9',
      openingHours: '9AM-10PM',
      joined: '19 Sep 2022',
    },
     
  ];

  return (
    <div className="rounded-lg shadow-2xl bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 mb-4">
        <h2 className="text-2xl font-semibold text-red-500">End-Users</h2>
        <div className='flex gap-2'>
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md">
          + Add New
        </button></div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white text-left">
        <thead className="bg-[#E0E2E7]">
          <tr>
            <th className="py-4 px-4">Restaurant Name</th>
            <th className="py-4">Contact</th>
            <th className="py-4">Address</th>
            <th className="py-4">Opening Hours</th>
            <th className="py-4">Joined</th>
            <th className="py-4 pl-12">Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id} className="hover:bg-gray-100">
              <td className="py-4 flex items-center gap-2 border-b pl-4">
                <img src={Img} alt="" />
                <div className="font-medium">{restaurant.name}</div>
              </td>
              <td className="py-4 border-b">{restaurant.contact}</td>
              <td className="py-4 border-b">{restaurant.address}</td>
              <td className="py-4 border-b">{restaurant.openingHours}</td>
              <td className="py-4 border-b">{restaurant.joined}</td>
              <td className="py-4 border-b">
                <div className="flex justify-center gap-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <img src={eye} alt="view" className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <img src={icon} alt="edit" className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <img src={trash} alt="delete" className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 px-4 pb-4">
        <span className="text-sm text-gray-500">Showing 1-10 from 100</span>
        <div className="flex gap-2">
          <button className="bg-purple-700 text-white py-1 px-3 rounded">1</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded">2</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded">3</button>
          <button className="bg-purple-700 text-white py-1 px-3 rounded">+</button>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
