import React from 'react';
import  { useState} from 'react'
import './Gallaries.css';
import GallariesHome from '../../components/GallariesHome/GallariesHome';
import Header from '../../components/header/Header';
import galleryImages from './Pics';

const Gallaries = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  // open modal
  const handleOpenModal = (index) =>{
    setSlideNumber(index);
    setOpenModal(true);
  }
  // close modal
   const handleCloseModal = () => {
    setOpenModal(false);
  };

  // previous image
  const prevSlide = () => {
   slideNumber === 0 ? setSlideNumber(galleryImages.length -1) : setSlideNumber(slideNumber -1 )
  }
  // next image 
  const nextSlide = () => {
    setSlideNumber(slideNumber + 1 === galleryImages.length ? 0 : slideNumber + 1);
  };
  
  return (
    <>
      <div className="Gallariesback">
        
        <Header />
        <GallariesHome />
      </div>
       {
        openModal && 
        <div className="sliderWrap">
          <i className='uil uil-times-circle btnClose' onClick={handleCloseModal}></i>
          <i className='uil uil-step-backward btnPrev' onClick={prevSlide}></i>
          <i class="uil uil-skip-forward-alt  btnNext" onClick={nextSlide}></i>
         
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
       }
      <div className='gallaries_section container grid'>
        <div className="wrapper">
        {galleryImages.map((image, index) => (
            <div className="card single" key={index} onClick={() => handleOpenModal(index)}>
              <img className="pics" src={image.img} alt={image.alt} />
            </div>
          ))}
        
        </div>
      </div>
    </>
  );
};

export default Gallaries;
