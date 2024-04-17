// Menu.js
import React, { useState } from 'react';

const Menu = ({ dishes }) => {
  const [category, setCategory] = useState('all');

  const uniqueCategories = ['all', ...new Set(dishes.map(dish => dish.category))];

  const filteredDishes = category === 'all' ? dishes : dishes.filter(dish => dish.category === category);

  return (
    <div>
      {/* Category buttons */}
      <div>
        {uniqueCategories.map((cat, index) => (
          <button key={index} onClick={() => setCategory(cat)}>{cat}</button>
        ))}
      </div>
      
      {/* Display dishes */}
      <div>
        {filteredDishes.map(dish => (
          <div key={dish.id}>
            <h2>{dish.title}</h2>
            <p>Category: {dish.category}</p>
            <p>Price: ${dish.price}</p>
            <img src={dish.img} alt={dish.title} />
            <p>{dish.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
