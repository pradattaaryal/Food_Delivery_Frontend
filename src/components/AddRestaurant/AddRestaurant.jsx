import React from "react";

const AddRestaurant = () => {
  return (
    <div className="flex">
      
      <div className="flex-grow bg-gray-50  ">
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h1 className="text-2xl font-semibold text-blue-600 mb-6">Add Restaurant</h1>
          <form className="grid grid-cols-2 gap-6">
            
            {/* Logo Upload */}
            <div className="col-span-2 grid grid-cols-2   gap-4">
              <div className="border-2 border-dashed border-gray-300 p-12   text-center">
                <label className="block text-gray-600">Click to add a Logo</label>
                <input type="file" className="hidden" />
              </div>

              <div className="border-2 border-dashed border-gray-300 p-12 text-center">
                <label className="block text-gray-600">Click to add an Image</label>
                <input type="file" className="hidden" />
              </div>
            </div>

            {/* Restaurant Name */}
            <div className="col-span-2">
               
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                placeholder="Restaurant Name"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
            
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                placeholder="Address"
              />
            </div>

            {/* Contact Details */}
            <div className="col-span-2">
            
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                placeholder="Contact Details"
              />
            </div>

            {/* Restaurant Owner */}
            <div className="col-span-2">
             
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                  placeholder="Restaurant Owner"
              />
            </div>

            {/* Owner Contact Details */}
            <div className="col-span-2">
            
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                  placeholder="Owner Contact Details"
              />
            </div>

            
            <div>
            <select className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600" defaultValue="" >
            <option value="" disabled hidden>
            Opeaning Time
            </option>
            <option>10:00 PM</option>
            <option>11:00 PM</option>
          
            </select>
            </div>

            <div>
            <select
            className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
            defaultValue=""
            >
            <option value="" disabled hidden>
            Closing Time
            </option>
            <option>10:00 PM</option>
            <option>11:00 PM</option>
          
            </select>
            </div>


            
            <div className="col-span-2 flex justify-end space-x-4">
              <button className="px-4 py-4 border rounded-md text-gray-600 hover:bg-gray-100">
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

export default AddRestaurant;
