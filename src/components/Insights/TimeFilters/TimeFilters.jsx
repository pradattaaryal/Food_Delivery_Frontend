import React, { useState } from 'react';

const TimeFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All Time');
  const filters = ['All Time', '12 Months', '30 Days', '7 Days', '24 Hour'];

  return (
    <div className="flex border bg-white rounded-lg p-1 overflow-hidden w-max mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 focus:outline-none rounded-lg transition-colors duration-1000 ${
            activeFilter === filter
              ? 'bg-green-100 text-green-700'
              : 'text-gray-600'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TimeFilters;
