import React, { useState } from "react";

const Dropdown = ({ options, onselect }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option

  // Dropdown options
  // const options = ["Tv", "Option 2", "Option 3", "Option 4"];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown
    onselect(option)
  };

  return (
    <div className="relative w-64">
      <button
        onClick={toggleDropdown}
        className=" px-6 w-32 py-1 mt-2 text-left text-white bg-transparent border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedOption || (
          <div className="flex items-start justify-between">
            <h2 >Filter</h2>
            <i className="ri-arrow-down-s-fill ml-10"></i>
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 text-zinc-300 w-44 mt-2 bg-zinc-700 rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-600"
            >
              {option.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
