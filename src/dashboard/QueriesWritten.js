import React, { useState } from 'react';

const QueriesWritten = () => {
  // State to store the list of queries and the current query being typed
  const [queries, setQueries] = useState([]); 
  const [newQuery, setNewQuery] = useState('');

  // Function to handle adding a new query
  const handleAddQuery = (e) => {
    e.preventDefault(); // Prevent page reload
    if (newQuery.trim() !== '') {
      setQueries([...queries, newQuery]);
      setNewQuery(''); // Clear input after adding the query
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center">Queries Hub</h2>
        <p className="text-center text-gray-500 mb-6">Submit and track your queries in one place.</p>
        
        {/* Form for submitting new query */}
        <form onSubmit={handleAddQuery} className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={newQuery}
            onChange={(e) => setNewQuery(e.target.value)}
            placeholder="Write your query..."
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
          <button
            type="submit"
            className="w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Post Query
          </button>
        </form>

        {/* Display the list of queries */}
        <div className="mt-6 space-y-4">
          {queries.length > 0 ? (
            queries.map((query, index) => (
              <div
                key={index}
                className="query-item p-4 bg-white border-l-4 border-blue-600 shadow-md rounded-lg flex items-center gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
                  {index + 1}
                </div>
                <p className="text-gray-800 flex-1">{query}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">No queries posted yet. Start the discussion!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueriesWritten;
