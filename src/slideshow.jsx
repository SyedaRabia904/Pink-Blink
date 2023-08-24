import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file
import ProductsSection from './categories';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 1000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = () => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
         <div className="numbertext">1 / 3</div>
          <img src="https://as1.ftcdn.net/v2/jpg/01/89/48/92/1000_F_189489222_sk7gT5kyYY6quwNZPoriJCMSOMFsPrd8.jpg"  style={{width:"100%", height:"80vh"}} alt="Image"/>
          <div className="text">Women's Wear</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/makeup-supplies-amidst-shiny-glitter-royalty-free-image-1640037507.jpg"  style={{width:"100%", height:"80vh"}} alt="Image" />
          <div className="text">Make Up</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="public/skincare.avif" style={{width:"100%", height:"80vh"}}  alt="Image" />
          <div className="text">Skin Care</div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <ProductsSection/>
    </div>
    
  );
}

export default Slideshow;