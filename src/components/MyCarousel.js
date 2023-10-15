import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage from './CarouselImage';




function MyCarousel() {
  return (
    <Carousel fade className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/image1.jpg'
          alt="First slide"
        // style={{ width: "1200px", height: "400px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/image3.webp'
          alt="second slide"
          style={{ width: "1200px", height: "400px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/img6.png'
          alt="third slide"
        // style={{ width: "1200px", height: "400px" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;