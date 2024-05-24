import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const scientists = [
  {
    name: "Scientist 1",
    pc: "https://www.timeforkids.com/wp-content/uploads/2023/07/K1_230929_cover_hero.jpg?w=1024",
    specializations: ["Microbial Ecology", "Bacterial Motility"],
    scores: [85, 90],
  },
  {
    name: "Scientist 2",
    pc: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1140779660ResearchScientist.jpg=ws1280x960",
    specializations: ["Genome Sequencing", "Metabolism"],
    scores: [75, 88],
  },
  {
    name: "Scientist 3",
    pc: "https://m.economictimes.com/thumb/msid-76479133,width-1200,height-900,resizemode-4,imgsize-367836/top-scientist.jpg",
    specializations: ["Antimicrobial Resistance", "Process Development"],
    scores: [80, 95],
  },
  {
    name: "Scientist 4",
    pc: "https://college.mayo.edu/media/mccms/content-assets/academics/explore-health-care-careers/histology-technician-career-3383580-0088-hero-mobile.jpg",
    specializations: ["Metagenomics", "Bioproducts"],
    scores: [70, 85],
  },
  {
    name: "Scientist 5",
    pc: "https://img.medscape.com/thumbnail_library/dt_240116_african_scientist_doctor_laboratory_800x450.jpg",
    specializations: ["Microbial Ecology", "Bacterial Motility"],
    scores: [85, 90],
  },
  {
    name: "Scientist 6",
    pc: "https://sciencecouncil.org/web/wp-content/uploads/2016/01/technician-workforce.jpg",
    specializations: ["Genome Sequencing", "Metabolism"],
    scores: [75, 88],
  },
  {
    name: "Scientist 7",
    pc: "https://us.images.westend61.de/0001529340pw/handsome-male-scientist-examining-liquid-in-cylinder-while-working-in-laboratory-GIOF11537.jpg",
    specializations: ["Antimicrobial Resistance", "Process Development"],
    scores: [80, 95],
  },
  {
    name: "Scientist 8",
    pc: "https://as2.ftcdn.net/v2/jpg/05/49/95/73/1000_F_549957305_Nc6R0EM0kIeqtZdc4pzjS23Y4xSNU26i.jpg",
    specializations: ["Metagenomics", "Bioproducts"],
    scores: [70, 85],
  },
  {
    name: "Scientist 9",
    pc: "https://static.toiimg.com/thumb/msid-67374109,width-400,resizemode-4/67374109.jpg",
    specializations: ["Microbial Ecology", "Bacterial Motility"],
    scores: [85, 90],
  },
  {
    name: "Scientist 11",
    pc: "https://dst.gov.in/sites/default/files/Woman-scientist-credited-for-identifying-residues-in-FSHR-which-could-be-useful-in-designing-molecules-in-assisted-reproductive-technologies-receives-SERB-Women-Excellence-awar.jpg",
    specializations: ["Genome Sequencing", "Metabolism"],
    scores: [75, 88],
  },
  {
    name: "Scientist 12",
    pc: "https://media.istockphoto.com/id/1323369690/photo/brilliant-female-engineer-looking-around-in-wonder-at-the-aerospace-satellite-manufacturing.jpg?s=612x612&w=0&k=20&c=ccvXgHYyaeg2J4CImx-ZfS2w4IPgfKcHUaKkusPHi3E=",
    specializations: ["Antimicrobial Resistance", "Process Development"],
    scores: [80, 95],
  },
  {
    name: "Scientist 13",
    pc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE60uPFlWNnT82XGk5ZenS46HX87_ZKd3s6w&usqp=CAU",
    specializations: ["Metagenomics", "Bioproducts"],
    scores: [70, 85],
  },
  // Add other scientists with their specializations and scores
];

export default function Home() {
  const [numScientists, setNumScientists] = useState(1);
  const [inputNumScientists, setInputNumScientists] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedScientist, setSelectedScientist] = useState(null);
  const [hoveredScientist, setHoveredScientist] = useState(null);

  const handleSearch = () => {
    setNumScientists(inputNumScientists);
    setShowResults(true);
  };

  const getGridColsClass = () => {
    if (numScientists === 1) return "grid-cols-1";
    if (numScientists === 2) return "grid-cols-2";
    if (numScientists === 3) return "grid-cols-3";
    if (numScientists === 4) return "grid-cols-4";
    if (numScientists === 5 || numScientists === 6) return "grid-cols-5";
    if (numScientists >= 7) return "grid-cols-5";
    return "grid-cols-5";
  };

  const handleCardClick = (scientist) => {
    setSelectedScientist(scientist);
    setHoveredScientist(null);
  };

  const handleCloseModal = () => {
    setSelectedScientist(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-slate-500">
      <form className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-left px-20 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="button"
          className="text-purple-600 hover:text-purple-800"
          onClick={handleSearch}
        >
          <FaSearch size={20} />
        </button>
      </form>

      <div className="flex items-center mb-4">
        <label className="mr-2 mt-5 text-white">Number of Scientists:</label>
        <input
          type="number"
          value={inputNumScientists}
          onChange={(e) =>
            setInputNumScientists(Math.max(0, Math.min(20, e.target.value)))
          }
          className="w-16 p-1 mt-5 text-center border border-gray-300 rounded-lg"
          min="0"
          max="20"
        />
      </div>

      <button
        type="button"
        onClick={handleSearch}
        className="mt-8 w-20 flex justify-center py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-opacity-50"
      >
        Generate
      </button>

      {showResults && (
        <div className={`grid gap-6 ${getGridColsClass()}`}>
          {scientists.slice(0, numScientists).map((scientist, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg bg-white cursor-pointer transition-all duration-300 ${
                hoveredScientist === scientist
                  ? "transform scale-105 z-10"
                  : "transform scale-95 opacity-50"
              }`}
              onClick={() => handleCardClick(scientist)}
              onMouseEnter={() => setHoveredScientist(scientist)}
              onMouseLeave={() => setHoveredScientist(null)}
            >
              <img
                src={scientist.pc}
                alt={scientist.name}
                className="w-24 h-24 rounded-full mb-2"
              />
              <p className="text-gray-800 font-bold">{scientist.name}</p>
            </div>
          ))}
        </div>
      )}

      {selectedScientist && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedScientist.name}</h2>
            <img
              src={selectedScientist.pc}
              alt={selectedScientist.name}
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h4 className="text-lg font-semibold mb-2">Specializations</h4>
            <ul className="list-disc list-inside">
              {selectedScientist.specializations.map((spec, i) => (
                <li key={i} className="text-gray-600">
                  {spec} - {selectedScientist.scores[i]}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-opacity-50"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
