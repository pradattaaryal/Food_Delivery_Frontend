// DashboardLayout.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Remove Router, only keep Routes and Route
import Sidebar from '../../components/Sidebar/Sidebar';
import Orders from '../../components/OrdersTable/OrdersTable';
import AddEmployees from '../../components/AddEmplyees/AddEmplyees';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Employees from '../../components/Employees/Employees';
import Restaurants from '../../components/Resturants/Resturants';
import EndUsers from '../../components/EndUsers/EndUsers';
import AddRestaurant from '../../components/AddRestaurant/AddRestaurant';
import Dash from '../../components/Insights/Dash';
import Menu from '../../components/Menu/Menu';
import Settings from '../../components/Settingspage/Settings';
import MenuDetail from '../../components/MenuDetail/MenuDetail';
 

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="max-w-[290px]">
        <Sidebar />
      </div>
      <div className="w-full p-5 bg-gray-50">
        <Routes>
          <Route path="/orderdetail" element={<OrderDetail/>} />
          <Route path="/dashboard" element={<Dash/>} />
          <Route path="/insights" element={<Dash/>} />
          <Route path="/order" element={<Orders />} />
          <Route path="/employees" element={<Employees/>} />
          <Route path="/end-user" element={<EndUsers/>} />
          <Route path="/addemployees" element={<AddEmployees />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/resturants" element={<Restaurants/>} />
          <Route path="/MenuDetail" element={<MenuDetail/>} />
          <Route path="/Setting" element={<Settings/>} />
          
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
