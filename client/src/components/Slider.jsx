import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles.css';
import 'animate.css';

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); 

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div
            className='slider-container animate__animated animate__fadeIn'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered}
        >
            <Carousel 
            activeIndex={index} 
            onSelect={handleSelect}
            controls={false} 
                indicators={false}
                interval={5000} 
            
            >
                <Carousel.Item>
                    <img
                        src='../assets/img/img1_slider.png'
                        alt="First slide"
                        className='slider-image d-block w-100 h-50'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='../assets/img/img2_slider.png'
                        alt="Second slide"
                        className='slider-image d-block w-100 h-50'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='../assets/img/img3_slider.png'
                        alt="Third slide"
                        className='slider-image d-block w-100 h-50'
                    />
                </Carousel.Item>
            </Carousel>
            {isHovered && (
                <div className="overlay-images">
                    <img
                        src="../assets/gif/interference.gif"
                        alt="Interference"
                        className='interference-image'
                    />
                    <img
                        src="../assets/img/logo/logo1.png"
                        alt="Logo"
                        className='logo-image'
                    />
                </div>
            )}
        </div>
    );
};