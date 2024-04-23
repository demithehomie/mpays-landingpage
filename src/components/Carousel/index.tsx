// File index.tsx for Carousel 
import React, { useState } from 'react';
import './index.css'

export interface CarouselItem {
  text: string;
  imageSrc: string;
}

export const Carousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
    <div className='card'>


    <div className='container'>
      {currentIndex > 0 && (
        <button className='chevron-buttons' onClick={handlePrev}>{'<'}</button>
      )}
      <div className='card-content'>
        <p>{items[currentIndex].text}</p>
        <img src={items[currentIndex].imageSrc} className='images' alt="carousel-item" />
      </div>
      {currentIndex < items.length - 1 && (
        <button className='chevron-buttons' onClick={handleNext}>{'>'}</button>
      )}
    </div>
    </div>
    </>
  );
};

// Exemplo de uso:
// const App: React.FC = () => {
//   const carouselItems: CarouselItem[] = [
//     { text: 'Primeiro item', imageSrc: 'primeira-imagem.jpg' },
//     { text: 'Segundo item', imageSrc: 'segunda-imagem.jpg' },
//     { text: 'Terceiro item', imageSrc: 'terceira-imagem.jpg' },
//   ];

//   return (
//     <div>
//       <h1>Carousel</h1>
//       <Carousel items={carouselItems} />
//     </div>
//   );
// };

// export default App;
