import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  img1_slider  from '../../assets/img/img1_slider.png'
import  img2_slider  from '../../assets/img/img2_slider.png'
import  img3_slider  from '../../assets/img/img3_slider.png'
import  interference  from '../../assets/gif/interference.gif'
import  logo1  from '../../assets/img/logo/logo1.png'
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
                        src={img1_slider}
                        alt="First slide"
                        className='slider-image d-block w-100 h-50'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img2_slider}
                        alt="Second slide"
                        className='slider-image d-block w-100 h-50'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img3_slider}
                        alt="Third slide"
                        className='slider-image d-block w-100 h-50'
                    />
                </Carousel.Item>
            </Carousel>
            {isHovered && (
                <div className="overlay-images">
                    <img
                        src={interference}
                        alt="Interference"
                        className='interference-image'
                    />
                    <img
                        src={logo1}
                        alt="Logo"
                        className='logo-image'
                    />
                </div>
            )}
        </div>
    );
};