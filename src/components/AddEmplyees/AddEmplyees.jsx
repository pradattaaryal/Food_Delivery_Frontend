import React from "react";

const AddEmplyees = () => {
  return (
    <div className="flex">
      {/* Sidebar should already be completed, so not repeating it here */}

      {/* Main Content */}
      <div className="flex-grow bg-gray-50  ">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-semibold text-blue-600 mb-6">Add Employee</h1>
          <form className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Employee ID */}
            <div>
              <label className="block text-gray-600">Employee ID</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-600">Gender</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-600">Address</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Contact No. */}
            <div>
              <label className="block text-gray-600">Contact No.</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Shift */}
            <div>
              <label className="block text-gray-600">Shift</label>
              <select
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              >
                <option>Day</option>
                <option>Night</option>
              </select>
            </div>

            {/* Designation */}
            <div>
              <label className="block text-gray-600">Designation</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-600">Role</label>
              <select
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              >
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>

            {/* Vehicle Type (Optional) */}
            <div>
              <label className="block text-gray-600">Vehicle Type (Optional)</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Vehicle Number (Optional) */}
            <div>
              <label className="block text-gray-600">Vehicle Number (Optional)</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="col-span-2 flex justify-end space-x-4">
              <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmplyees;
