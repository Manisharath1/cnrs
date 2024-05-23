import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const scientists = [
    { name: 'Scientist 1', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 2', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 3', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 4', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 5', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 6', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 7', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 8', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 9', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 10', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 11', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 12', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 13', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 14', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 15', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 16', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 17', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 18', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 19', pc: 'https://via.placeholder.com/150' },
    { name: 'Scientist 20', pc: 'https://via.placeholder.com/150' },
    
]
export default function Home() {

const [numScientists, setNumScientists] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

const handleSearch = () => {
    setShowResults(true);
};

const getGridColsClass = () => {
    if (numScientists === 1) return 'grid-cols-1';
    if (numScientists === 2) return 'grid-cols-2';
    if (numScientists === 3) return 'grid-cols-3';
    if (numScientists === 4) return 'grid-cols-4';
    if (numScientists === 5 || numScientists === 6) return 'grid-cols-5';
    if (numScientists >= 7) return 'grid-cols-5';
    return 'grid-cols-5';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-slate-500">
      <form className="bg-white p-6  rounded-lg  shadow-lg flex items-center space-x-5">
        <input  
          type="text" 
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-left px-20 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button type="search" className="text-purple-600 hover:text-purple-800">
          <FaSearch size={20} />
        </button>
      </form>

      <div className="flex items-center mb-4">
        <label className="mr-2 mt-5 text-white">Number of Scientists:</label>
        <input 
          type="number" 
          value={numScientists} 
          onChange={(e) => setNumScientists(Math.max(0, Math.min(20, e.target.value)))}
          className="w-16 p-1 mt-5 text-center border border-gray-300 rounded-lg"
          min="0" max="20"
        />
      </div>

     <button 
        type="button" 
        onClick={handleSearch}
        className="mt-8 w-20 flex justify-center py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-opacity-50">
        Generate
      </button> 

      {showResults && (
        <div className={`grid gap-6 ${getGridColsClass()}`}>
          {scientists.slice(0, numScientists).map((scientist, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={scientist.pc} alt={scientist.name} className="w-24 h-24 mt-10 rounded-full mb-2" />
              <p className="text-white">{scientist.name}</p>
            </div>
          ))}
        </div>
      )}
    
    </div>
  );
}
