import React from 'react';

function Settings() {
  return (
    <div className="p-8 bg-white h-screen rounded-lg shadow-lg">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-red-500 mb-6">Settings</h1>

      {/* Content Box */}
      <div className="space-y-4">
        {/* Access Control Section */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium">Access Control</h2>
          <p className="text-gray-500 text-sm">
            Manage data access and role policies between employees and admin.
          </p>
        </div>

        {/* User Control Section */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium">User Control</h2>
          <p className="text-gray-500 text-sm">
            Create and edit user login information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
