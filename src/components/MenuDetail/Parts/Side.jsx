import React from 'react';

const Side = () => {
  const categories = [
    'Sushi (Japanese)',
    'MOMO',
    'American Delights',
    'Noodles and Hakka Noodles',
    'Pizza',
    'Fried Rice',
    'Continental Dishes',
    'Burgers',
    'Roti, Naan, and Curry',
  ];

  return (
    <aside className="  border-gray-200 border-[1px] w-1/4   rounded-2xl bg-white">
      <ul className="space-y-2 mt-4">
        {categories.map((category) => (
          <li key={category} className="text-lg *: font-semibold hover:bg-green-500 py-2 rounded">
          <div className='pl-6'>  {category}</div>
          </li>
        ))}
      </ul>
      <button className="mt-4 pl-6 text-blue-500">+ Add Category</button>
    </aside>
  );
};

export default Side;
