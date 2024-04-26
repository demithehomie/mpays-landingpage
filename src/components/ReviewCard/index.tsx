import './index.css'

import React from 'react';



interface CardProps {
  image: string;
  smallImage: string;
  text: string;
  name: string;
  saying: string;
}

const ReviewCard: React.FC<CardProps> = ({ image, smallImage, text, name, saying }) => {




  return (
    <div className="review-cards">
      <div className="circle-image">
        <img src={image} alt="Main" />
      </div>
      <div className="content">
        <img src={smallImage} alt="Small" />
        <p>{text}</p>
        <h2>{name}</h2>
        <p className="saying">{saying}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
