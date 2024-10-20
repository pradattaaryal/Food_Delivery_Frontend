import React from 'react';
import eye from '../../assets/Action/eye.png';
import icon from '../../assets/Action/icon.png';
import trash from '../../assets/Action/trash.png';
 

function EndUsers() {

  const employees = [
    { id: '152694', name: 'Sandeep Lamichhane', contact: '9865412091', address: 'Hetauda-1', email: 'nousavisen@gmail.com' },
    { id: '941620', name: 'Rohit Paudel', contact: '9865412054', address: 'Hetauda-2', email: 'wannabechad@gmail.com' },
    { id: '162175', name: 'Sompal Kami', contact: '9865412102', address: 'Hetauda-3', email: 'theog10@gmail.com' },
    { id: '541245', name: 'Kushal Bhurtel', contact: '9865411201', address: 'Hetauda-4', email: 'overratedbhurtel@gmail.com' },
    { id: '161320', name: 'Dipendra Airee', contact: '9865416520', address: 'Hetauda-5', email: 'noteventop50@gmail.com' },
    { id: '941680', name: 'Kushal Malla', contact: '9865412049', address: 'Hetauda-6', email: 'mongolialevele@gmail.com' },
    { id: '941632', name: 'Karan KC', contact: '9865412061', address: 'Hetauda-7', email: 'didheplaywc@gmail.com' },
    { id: '613051', name: 'Paras Khadka', contact: '9865412492', address: 'Hetauda-8', email: 'theonlysaneparas@gmail.com' },
    { id: '613052', name: 'Shakti Gauchan', contact: '9865414951', address: 'Hetauda-9', email: 'rajeshpayparai@gmail.com' },
    
  ];

  return (
    <div className="rounded-lg shadow-2xl bg-white  ">
      {/* Header Section */}
      <div className="flex justify-between items-center align-middle p-3 mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-red-500">End-Users</h2>
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
        </div>
      </div>

      {/* Employees Table */}
      <table className="min-w-full bg-white text-left">
        <thead className="bg-[#E0E2E7]">
          <tr>
            <th className="py-4 pl-4">Customer Name</th>
            <th className="py-4">Contact</th>
            <th className="py-4">Address</th>
            <th className="py-4">Email</th>
            <th className="py-4 pl-12">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="py-10">
              <td className="py-4 border-b-[1px] pl-4">
                <div className="font-medium">{employee.name}</div>
              </td>
              <td className="py-4 border-b-[1px]">{employee.contact}</td>
              <td className="py-4 border-b-[1px]">{employee.address}</td>
              <td className="py-4 border-b-[1px]">{employee.email}</td>
              <td className="py-4 border-b-[1px]">
                <div className="flex justify-center gap-4">
                  {/* Action icons */}
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

      {/* Pagination (Example) */}
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

export default EndUsers;
