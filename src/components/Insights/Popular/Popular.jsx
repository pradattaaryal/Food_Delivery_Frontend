import React from 'react';
import r from '../../../assets/Dishes/r.png';
import g from '../../../assets/Dishes/g.png';
import t from '../../../assets/Dishes/t.png';
const Popular = () => {
  const dishes = [
    {
      name: 'Fish Burger',
      price: 250,
      restaurant: 'Solti Restaurant',
      orders: 50,
      imageUrl:r
    },
    {
      name: 'Meat Lover’s Pizza',
      price: 550,
      restaurant: 'Pepe Pizza',
      orders: 30,
      imageUrl: g
    },
    {
      name: 'Ichiran Ramen',
      price: 350,
      restaurant: 'Ichiran Restaurant',
      orders: 25,
      imageUrl:t
    },
  ];

  return (
    <div className="w-full mx-auto  bg-white p-6 shadow-xl rounded-lg ">
      <h2 className="text-2xl  font-bold mb-4">Popular Dishes</h2>
      <div className="flex justify-evenly w-full ">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center space-y-3"
            style={{ width: '272px', height: '362px' }}
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-32 h-32 object-cover rounded-full"
            />
            <div className="text-center">
              <p className="text-yellow-500 text-2xl  mb-1">
                {'★★★★★'}
              </p>
              <div className='w-full flex flex-col items-start'>
              <p className="font-semibold">{dish.name}</p>
              <p className="text-red-500 text-xl font-bold">Rs {dish.price}</p>
              <p className="text-gray-500">{dish.restaurant}</p></div>
              <div className="bg-red-500 text-white rounded-xl px-3 py-1 mt-2">
                {dish.orders} orders
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
