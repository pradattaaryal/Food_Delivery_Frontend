import React from 'react';

const menuItems = [
  { name: 'Dragon Roll', price: 450 },
  { name: 'California Roll', price: 300 },
  { name: 'Salmon Roll', price: 250 },
  { name: 'Spicy Salmon Roll', price: 300 },
  { name: 'Tempura Roll', price: 350 },
  { name: 'Avocado Maki', price: 250 },
  { name: 'Spicy Tempura Roll', price: 400 },
  { name: 'Plain Sushi Roll', price: 200 },
];

const MenuTable = () => {
  return (
    <div className="flex-1 p-4 rounded-xl border-[1px] border-gray-200 bg-white shadow-lg">
      <table className="w-full text-left">
        <thead>
          <tr className=" text-green-600">
            <th className="p-4 text-left">Item Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4  text-center ">Action</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{item.name}</td>
              <td className="p-4">Rs. {item.price}</td>
              <td className="p-4 ml-8  text-center pl-8">
                <button className="text-blue-500 hover:underline mr-4">Edit</button>
                <button className="text-red-500 hover:underline">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 text-blue-500">+ Add Item</button>
    </div>
  );
};

export default MenuTable;
