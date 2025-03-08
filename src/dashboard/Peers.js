import React from "react";

const Peers = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Recommended Connections</h3>
      
      <div className="flex items-center gap-4 border-b p-3">
        <img 
          src="https://via.placeholder.com/50" 
          alt="Profile" 
          className="rounded-full w-12 h-12 object-cover border-2 border-gray-300"
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-700">Sarah Chen</p>
          <p className="text-sm text-gray-500">Machine Learning, Python</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Connect
        </button>
      </div>

    </div>
  );
};

export default Peers;
