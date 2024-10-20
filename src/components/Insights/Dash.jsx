import React from 'react';
import Linechart from './Linechart/Linechart';
import Piechart from './Piechart/Piechart';
import Barchart from './Barchart/Barchart';
import a from '../../assets/Dash/a.png';
import b from '../../assets/Dash/b.png';
import c from '../../assets/Dash/c.png';
import d from '../../assets/Dash/d.png';
import f from '../../assets/Dash/f.png';
import Popular from './Popular/Popular';
import TimeFilters from './TimeFilters/TimeFilters';
 

const Dash = () => {
  const stats = [
    { title: 'Total Orders', value: '288', percentage: '20%', bgColor: 'bg-red-100', iconColor: 'text-red-500', image: a },
    { title: 'Total Delivered', value: '250', percentage: '0%', bgColor: 'bg-green-100', iconColor: 'text-green-500', image: b },
    { title: 'Total Cancelled', value: '38', percentage: '0%', bgColor: 'bg-orange-100', iconColor: 'text-orange-500', image: f },
    { title: 'Total Revenue', value: '$75,500', percentage: '10%', bgColor: 'bg-blue-100', iconColor: 'text-blue-500', image: d },
  ];

  return (
    <div className=" bg-[##E0E2E7] rounded-lg flex flex-col space-y-4">
      <h1 className="text-2xl font-semibold text-red-600">Order Detail</h1>

      {/* Add the TimeFilters component right here */}
    <TimeFilters/>

      <div className='flex'>
        {stats.map((stat, index) => (
          <div key={index} className={`w-[256px] h-[156x] p-6 mr-[35px] rounded-lg shadow-md bg-white`}>
            <div className="flex flex-col items-start">
              <div className={`text-4xl mb-2 ${stat.iconColor}`}>
                <img src={stat.image} alt="" />
              </div>
              <div className="w-4/5">
                <h4 className="text-lg text-[#667085]">{stat.title}</h4>
                <div className='w-full flex items-center justify-between'>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-[#667085] font-bold">+{stat.percentage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full bg-white rounded-lg shadow-2xl p-6'>
        <Linechart />
      </div>

      <div className='w-full flex flex-col md:flex-row space-x-4'>
        <div className='min-w-[55%] bg-white rounded-lg shadow-2xl p-4'>
          <Piechart />
        </div>
        <div className='w-full bg-white rounded-lg shadow-2xl p-4'>
          <Barchart />
        </div>
      </div>

      <div><Popular /></div>
    </div>
  );
};

export default Dash;
