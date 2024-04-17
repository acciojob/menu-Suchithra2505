import Menu from './Menu';
import React from 'react';
const dishes = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: './images/item-1.jpeg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    // Add more dishes here
  ];
  
  function App() {
    return (
      <div className="App">
        <Menu dishes={dishes} />
      </div>
    );
  }
  
  export default App;