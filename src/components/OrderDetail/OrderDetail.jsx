import React from 'react';

const OrderDetail = () => {
  return (
    <div className="bg-white h-screen rounded-lg p-6 shadow-2xl flex flex-col space-y-4">
      <h1 className="text-2xl font-semibold text-red-600">Order Detail</h1>

      <div className="flex rounded-lg justify-between space-x-4">
        <div className="basis-3/5 border-gray-400 border-[1px] p-6 rounded-lg shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p>Order No: <span className="text-blue-500 font-bold">6115203</span></p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-purple-600">Falcha Eatery</h2>
            </div>
            <div>
              <span className="bg-purple-200 text-purple-600 px-3 py-1 rounded-full">Processing</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-bold text-gray-500">Created At</p>
              <p>6-21-2024, 2:30PM</p>
            </div>
            <div>
              <p className="font-bold text-gray-500">Name</p>
              <p>Sandeep Lamichhane</p>
            </div>
            <div>
              <p className="font-bold text-gray-500">Contact No</p>
              <p>9865094162</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-500 font-bold">Delivery Address</h3>
            <div className="mt-2 space-y-2">
              <p>Name: <strong>Sandeep Lamichhane</strong></p>
              <p>Address: Basudev Marga, Hetauda-2, Makwanpur</p>
              <p>Contact: 9865094162</p>
              <button className="text-blue-500 underline">Edit</button>
            </div>
          </div>
        </div>

        <div className="basis-2/5 border-gray-400   border-[1px] bg-white p-4  rounded-lg shadow-md">
       <div> <h3 className="text-lg font-bold text-red-500">Order Tracking</h3></div>
          <div className="w-full h-full pb-6   flex items-center justify-center">
            <p className='bg-gray-400 h-full w-full rounded-lg flex items-center justify-center '>Google Map Here</p>
          </div>
        </div>
      </div>

      {/* Main Content with 30%, 30%, and remaining space layout */}
      <div className="grid grid-cols-[29%,28%,1fr] gap-6">
        {/* First Box */}
        <div className="bg-white p-6 border-[1px] border-gray-400 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Order</h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <p>Chicken Steam MoMo</p>
              <p>150</p>
            </div>
            <div className="flex justify-between">
              <p>Tempura Roll</p>
              <p>250</p>
            </div>

            <div className="border-t mt-2 pt-2">
              <div className="flex justify-between text-blue-600">
                <p>Sub-Total</p>
                <p>400</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Charge</p>
                <p>20</p>
              </div>
              <div className="flex justify-between font-bold text-red-600">
                <p>Total</p>
                <p>420</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div className="bg-white p-6 border-[1px] border-gray-400 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Payment</h3>
          <div className="mt-2">
            <p>Payment Method: <span className="font-bold">Cash on Delivery</span></p>
            <p>Payment Status: <span className="text-red-500 font-bold">Unpaid</span></p>
          </div>
        </div>

        {/* Third Box with remaining space */}
        <div className="bg-white p-6 border-[1px] border-gray-400 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Message to the Rider</h3>
          <textarea
            className="w-full p-2 border rounded-lg"
            placeholder="Message to the rider..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
