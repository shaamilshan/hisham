import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard'; 
import shaamilshan from '../assets/shaamilshan.jpeg'
import shamil from '../assets/shamil.jpeg'
import mubaris from '../assets/mubaris.jpeg'
import mammad from '../assets/mammad.jpeg'
import alshed from '../assets/alshed.jpeg'

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div id="testimonial" className='p-8 mb-12' style={{ backgroundColor: '#F5FCFF' }}>
      <h1 className='mt-4 text-center mb-16 text-4xl font-bold'>What Clients Say</h1>
      <div className="w-11/12 md:w-3/5 mx-auto">
        <Slider {...settings}>
          <div>
            <TestimonialCard 
              imgSrc={shaamilshan}
              name="Shaamilshan"
              quote="I can't thank Hisham enough for saving my phone! After dropping it and completely shattering the screen, I was sure I’d have to buy a new one. But Hisham replaced the screen in no time, and it looks and works like brand new. Highly recommend their services!"

            />
          </div>
          <div>
            <TestimonialCard 
              imgSrc={mubaris}
              name="Mubaris"
              quote="When my phone suddenly stopped connecting to the network, I was worried I'd lose all my contacts and important data. Hisham diagnosed the issue quickly and fixed the No Service problem on my iPhone 13. Their expertise and professionalism are top-notch!"
              />
          </div>
          <div>
            <TestimonialCard 
              imgSrc={mammad}
              name="Afnan"
              quote="I was really impressed with how Hisham handled the data recovery on my Android device. I had a lot of sensitive information that I thought was lost forever, but they managed to retrieve everything. The whole process was smooth, and I felt confident that my privacy was respected."
            />
          </div>
          <div>
            <TestimonialCard 
              imgSrc={shamil}
              name="Shamil"
              quote="I thought I’d lost all my photos and important documents after my Nothing Phone 1 had a system failure. Thankfully, Hisham was able to recover everything. Their data recovery service is a lifesaver!"
            />
          </div>
          <div>
            <TestimonialCard 
              imgSrc={alshed}
              name="Alshed"
              quote="I had a broken back glass on my iPhone 11 Pro, and Hisham did an amazing job replacing it. The repair was done quickly, and the phone looks as good as new. The customer service was also excellent—friendly, and they kept me informed throughout the process."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
