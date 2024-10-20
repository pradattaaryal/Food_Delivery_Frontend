import React from 'react';
 import image from './image.png'
const Header = () => {
  return (
    <header className="bg-white p-4 flex items-center justify-between shadow">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt="Logo"
          className=" h-[100px] w-[100px]"
        />
        <div>
          <h1 className="text-2xl font-semibold">Falcha Eatery</h1>
          <p>Lamsure, Hetauda</p>
          <p>☎️ 057-521045</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-8  py-4 rounded-xl">Edit</button>
    </header>
  );
};

export default Header;
