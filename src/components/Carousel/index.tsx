// File index.tsx for Carousel 
import React, { useState } from 'react';
import { ChevronBackOutline } from 'react-ionicons'
import './index.css'
import { ChevronForwardOutline } from 'react-ionicons';

export interface CarouselItem {
    title: string;
    cta: string;
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
    <div className='cards-extra-space'>

    
     {currentIndex > 0 && (
        // <button className='chevron-buttons-left' >{'<'}</button>
        <ChevronBackOutline
        color={'#00000'} 
        title={"ChevronBack"}
        height="30px"
        width="30px"
        onClick={handlePrev}
        />
      )}
    <div className='card'>

   
    <div className='container'>
     
      <div className='card-content'>
        <div className='card-content-text'>
        <label className='title'>{items[currentIndex].title}</label>
        <br /><br />
        <label className='text'>{items[currentIndex].text}</label>
        <br /><br />
        <label className='cta'>{items[currentIndex].cta}</label>
        </div>
       
        <img src={items[currentIndex].imageSrc} className='images' alt="carousel-item" />
      </div>
      
    </div>
    </div>

    {currentIndex < items.length - 1 && (
        
        <ChevronForwardOutline
        color={'#00000'} 
        title={"ChevronBack"}
        height="30px"
        width="30px"
       // style={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}
        onClick={handleNext}
        />
      )}
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
