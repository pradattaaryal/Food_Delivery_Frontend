import React from 'react';
import icon1 from '../Sidebar/Icons/grid.png';
import icon2 from '../Sidebar/Icons/cart 01.png';
import icon3 from '../Sidebar/Icons/user.png';
import icon4 from '../Sidebar/Icons/users 01.png';
import icon5 from '../Sidebar/Icons/store.png';
import icon6 from '../Sidebar/Icons/invoice.png';
import icon7 from '../Sidebar/Icons/hart-histogram.png';
import icon8 from '../Sidebar/Icons/setting.png'; 
import Icon from '../../assets/image/Icon.jpeg'
import { Link } from 'react-router-dom';
function Sidebar() {
   
  const items = [
    { word: 'Dashboard', icon: icon1 },
    { word: 'Order', icon: icon2 },
    { word: 'Employees', icon: icon3 },
    { word: 'End-User', icon: icon4 },
    { word: 'Resturants', icon: icon5 },
    { word: 'Menu', icon: icon6 },
    { word: 'Insights', icon: icon7 },
    { word: 'setting', icon: icon8 },
  ];

  return (
    <div className="h-[1000px]  w-[290px] ">

      <div className='  px-[25px] pt-[37px] w-[240px] h-[76.66px] mb-[53.34px]'>
        <img src={Icon} alt=""  />
      </div>
      <nav>
        <ul className=' p-8'>
          {items.map((item, index) => (
             <Link to={ `/${item.word.toLowerCase()}`}><li key={index} className="mb-2 flex items-center rounded-xl px-4 py-2 justify-start hover:bg-green-300 ">
              <img src={item.icon} alt={`${item.word} icon`} className="" />
             <a href="#" className="block py-2   "> {item.word} </a>
            </li> </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
