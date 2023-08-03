import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import '../styles.css'
import 'animate.css'

export const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='slider-container animate__animated animate__fadeIn'>
            <Carousel.Item>
                <img src='../assets/img/img1_slider.png' alt="First slide" className='slider-image d-block w-100 h-50' />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img src='../assets/img/img2_slider.png' alt="Second slide" className='slider-image d-block w-100 h-50' />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img src='../assets/img/img3_slider.png' alt="Third slide" className='slider-image d-block w-100 h-50' />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

