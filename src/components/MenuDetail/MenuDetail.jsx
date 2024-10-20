import React from 'react';
import Header from './Parts/Header';
import Side from './Parts/Side';
import MenuTable from './Parts/MenuTable';
import Banner from './Banner.png';

const MenuDetail = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Banner Image */}
      <div className="h-48   w-full">
        <img className="w-full h-full object-cover" src={Banner} alt="Banner" />
      </div>

      {/* Header */}
      <Header />

      {/* Body Section */}
      <div className="flex flex-1 gap-4 p-6">
        {/* Sidebar */}
        <Side />

        {/* Menu Table */}
        <MenuTable />
      </div>
    </div>
  );
};

export default MenuDetail;
