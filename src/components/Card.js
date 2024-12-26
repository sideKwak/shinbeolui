import React from 'react';

function Card({ image, title, description, onMoreClick }) {
  return (
    <div className="transform scale-75 rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-90">
      <img className="w-full h-48 object-contain" src={image} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-xs">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="text-orange-600 font-bold flex items-center"
          onClick={onMoreClick}
        >
          More <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}

export default Card;