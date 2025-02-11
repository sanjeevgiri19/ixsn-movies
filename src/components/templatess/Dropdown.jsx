import React, { useState } from "react";

const Dropdown = ({ options, onselect, title  }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(null); 

  // const options = ["Tv", "movies", "............", "....."];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
    onselect(option)
  };

  return (
    <div className="relative w-64 mt-3">
      <button
        onClick={toggleDropdown}
        className="px-6 max-w-40 py-1 mt-2 text-left text-white bg-transparent border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedOption ? (
          selectedOption.replace(/_/g, " ").toUpperCase()
        ) : (
          <div className="flex items-start justify-between">
            <h2>
              {title}
              <i className="ri-arrow-down-s-fill ml-4"></i>
            </h2>
          </div>
        )}
      </button>

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
