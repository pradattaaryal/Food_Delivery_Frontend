import React from 'react';
import ff from './f.png'
import { Link } from 'react-router-dom';
const restaurants = [
  { id: 1, name: 'Anmol Sweets', location: 'TCN Road', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Daju Bhai Sweets', location: 'School Road', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Hotel Bashukala', location: 'School Road', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Jheer Hetauda', location: 'Huprachaur', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Sutra Lounge', location: 'Huprachaur', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Sesame', location: 'Sangam Chowk', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Bhungro Thakali', location: 'Huprachaur', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Grace Cafe', location: 'TCN Road', image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Falcha Eatery', location: 'Lamsure', image: 'https://via.placeholder.com/150' },
];

const Menu = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-red-600">Menu</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md">
          + Add New
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
        <Link to={ `/MenuDetail`}>  <div
            key={restaurant.id}
            className=" rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={ff} alt={restaurant.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <p className="text-gray-500">{restaurant.location}</p>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
