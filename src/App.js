import React from 'react';
import './App.css';
import DynamicMenu from './components/DynamicMenu/DynamicMenu';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';





function App() {
  const menuItems = [
    { id: 1, label: 'HOME' },
    { id: 2, label: 'ELECTRONICS' },
    { id: 3, label: 'BOOKS' },
    { id: 4, label: 'Audio Harmony' },
    { id: 5, label: 'Cinematic Experience' },
    { id: 6, label: 'Fashion Hub' },
    { id: 7, label: 'Gaming Galaxy' },
    { id: 8, label: 'Home Oasis' },
    { id: 9, label: 'Wanderlust' },
    { id: 10, label: 'Nature Treasures' },
    { id: 11, label: 'Unique Finds' }
  
  ];
  

  return (
    <div className="App">
      <header className="App-header">
        <DynamicMenu items={menuItems} />
        <FeaturedProducts />
      </header>
      
     
    </div>
  );
}

export default App;
