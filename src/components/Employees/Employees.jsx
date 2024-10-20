import React from 'react';
import eye from '../../assets/Action/eye.png';
import icon from '../../assets/Action/icon.png';
import trash from '../../assets/Action/trash.png';
import { Link } from 'react-router-dom';

function Employees() {

  const employees = [
    { id: '152694', name: 'Sandeep Lamichhane', designation: 'Rider', shift: 'Day', gender: 'Male', joined: '29 Dec 2022' },
    { id: '941620', name: 'Rohit Paudel', designation: 'Rider', shift: 'Day', gender: 'Male', joined: '24 Dec 2022' },
    { id: '162175', name: 'Sompal Kami', designation: 'Rider', shift: 'Night', gender: 'Male', joined: '12 Dec 2022' },
    { id: '541245', name: 'Kushal Bhurtel', designation: 'Manager', shift: 'Day', gender: 'Male', joined: '21 Oct 2022' },
    { id: '161320', name: 'Dipendra Airee', designation: 'Order Handler', shift: 'Day', gender: 'Male', joined: '21 Oct 2022' },
    { id: '941680', name: 'Kushal Malla', designation: 'Order Handler', shift: 'Day', gender: 'Male', joined: '21 Oct 2022' },
    { id: '941632', name: 'Karan KC', designation: 'Rider', shift: 'Night', gender: 'Male', joined: '19 Sep 2022' },
  
  ];

  return (
    <div className="rounded-lg shadow-2xl bg-white  ">
      {/* Header Section */}
      <div className="flex justify-between p-3 items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-red-500">All Employees</h2>
        </div>
        <div className="flex items-center gap-2">
          <form action="">
            <div className="relative flex items-center">
              <input
                id="Search"
                type="text"
                className="mt-1 block w-full px-3 py-2 pr-[80px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Search"
              />
            </div>
          </form>
          <Link to={`/addemployees`}><button className="bg-purple-700 ml-4 rounded-lg w-36 py-2 text-white">+ Add New</button></Link>

        </div>
      </div>

      {/* Employees Table */}
      <table className="min-w-full bg-white text-left">
        <thead className="bg-[#E0E2E7]">
          <tr>
            <th className="py-4 pl-4">Employee Name</th>
            <th className="py-4">Designation</th>
            <th className="py-4">Shift</th>
            <th className="py-4">Gender</th>
            <th className="py-4">Joined</th>
            <th className="py-4 pl-24">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-4 border-b-[1px] pl-4">
                <div className="font-medium">
                  {employee.name}
                  <div className="text-sm text-gray-500">ID: {employee.id}</div>
                </div>
              </td>
              <td className="py-4 border-b-[1px] text-blue-600 hover:underline cursor-pointer">
                {employee.designation}
              </td>
              <td className="py-4 border-b-[1px]">{employee.shift}</td>
              <td className="py-4 border-b-[1px]">{employee.gender}</td>
              <td className="py-4 border-b-[1px]">{employee.joined}</td>
              <td className="py-4 border-b-[1px]">
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

export default Employees;
