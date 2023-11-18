import React from "react";
import { useState } from "react";

const CategoryFilter = ({ categories, onCategoryChange }) => {

  const [activeCategory, setActiveCategory] = useState(null)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="mb-8 w-full flex flex-wrap justify-center">
      {categories.map((category) => (
        <button 
            key={category} 
            onClick={() => handleCategoryChange(category)}
            className={`m-2 px-2 py-2 border-2 rounded-md ${activeCategory === category ? "border-green-500" : "border-blue-200 hover:border-green-300"}`}
        > 
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;