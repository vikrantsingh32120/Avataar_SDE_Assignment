// Carousel.jsx
import React, { useState, useEffect } from 'react';
import './style.css';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);

  const cards = [
    { imgSrc: 'images/Rectangle 5.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 3.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 1.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 2.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 4.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 6.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 7.jpg', title: 'Product Name' },
    { imgSrc: 'images/Rectangle 8.jpg', title: 'Product Name' },
  ];

  const updateActiveItem = (index) => {
    setActiveItem(index);
  };

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === 'left'
        ? activeItem > 1
          ? activeItem - 1
          : cards.length
        : activeItem < cards.length
        ? activeItem + 1
        : 1;

    updateActiveItem(newIndex);
  };

  const getCardClassName = (index) => {
    const position = index - activeItem;
    const positions = [-2, -1, 0, 1, 2];
    const className = positions.includes(position)
      ? `card ${position === 0 ? 'active' : position > 0 ? 'right' : 'left'}`
      : `card far-${position > 0 ? 'right' : 'left'}`;

    return className;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleArrowClick('right');
    }, 4000);

    return () => clearInterval(intervalId);
  }, [activeItem]);

  return (
    <div className="container">
      {/* <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div> */}
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={getCardClassName(index + 1)}
            onClick={() => updateActiveItem(index + 1)}
            id={`card-${index + 1}`}
          >
            <img src={card.imgSrc} alt={`Card ${index + 1}`} />
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>

      <div className="carousel-nav">
        <button onClick={() => handleArrowClick('left')}>&lt;</button>
        {cards.map((_, index) => (
          <button
            key={index}
            className={activeItem === index + 1 ? 'active' : ''}
            onClick={() => updateActiveItem(index + 1)}
          ></button>
        ))}
        <button onClick={() => handleArrowClick('right')}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
