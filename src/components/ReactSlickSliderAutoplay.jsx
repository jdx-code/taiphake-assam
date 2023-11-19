import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image01 from '/hero/hero-01.jpg';
import Image02 from '/hero/hero-02.jpg';
import Image03 from '/hero/hero-03.jpg';
import Image04 from '/hero/hero-04.jpg';

const slideContents = [
  {
    heading: "Welcome to the Tai Phake Community",
    subHeading: "Embark on a journey through the rich tapestry of Tai Phake heritage. Experience and immerse yourself in the traditions passed down through generations.",
    image: Image01
  },
  {
    heading: "Discover the Tai Phake Culture",
    subHeading: "Immerse yourself in the vibrant traditions of the Tai Phake community. Witness their unique rituals, colorful festivals, and the harmonious coexistence with nature.",
    image: Image02
  },
  {
    heading: "Journey to Namphake Village",
    subHeading: "Explore Namphake, the heart of the Tai Phake community. Visit the Namphake Buddhist Monastery, a spiritual center that echoes centuries of wisdom and peace.",
    image: Image03
  },
  {
    heading: "Preserving Tai Phake Heritage",
    subHeading: "Join us in the mission to preserve and pass on the unique Tai Phake heritage to future generations. Explore the richness that shape their way of life.",
    image: Image04
  }  
]

const ReactSlickSliderAutoPlay = () => {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000, // Transition speed between slides
      autoplaySpeed: 6000, // Total time each image is displayed (6 seconds for each image, plus transition time)
      cssEase: "linear",
      fade: true, // Enable the fade effect
      pauseOnHover: false, // Disable pause on hover
    };

    return (
      <div>
        <Slider {...settings}>

          {slideContents.map(content => (
            <div>
              <div className="slider-item">
                <img src={content.image} alt="Image 1" />
                <div className="slider-text pt-[300px] pr-[25px] pb-[220px] pl-[25px] sm:pt-[300px] sm:pr-[100px] sm:pb-[220px] sm:pl-[100px] md:pt-[300px] md:pr-[100px] md:pb-[220px] md:pl-[100px] lg:pt-[300px] lg:pr-[250px] lg:pb-[220px] lg:pl-[250px]">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">{content.heading}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    {content.subHeading}
                  </p>
                </div>
              </div>
            </div>
          ))}     

        </Slider>
      </div>
    );
  
}

export default ReactSlickSliderAutoPlay
