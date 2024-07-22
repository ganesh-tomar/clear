import Slider from 'react-slick';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageTextCarousel = ({ imageSrc }) => {
    return (
        
        <div className="slide-item relative w-[25%] h-[60.2rem] ">
             {/* <div className="slide-inner absolute bottom-0 w-full h-[60.2rem] overflow-hidden bg-[#272e3e]"> */}
             <div className="img-wrap w-[100%] overflow-hidden h-[94rem] laptop:h-[70rem] lg:h-[auto] !sm:h-[auto]">
                <Image
                    src={imageSrc}
                    className="w-full h-full object-cover laptop:object-contain"
                    width={10000}
                    height={10000}
                    alt="img"
                />
             </div>
             {/* </div> */}
  
          
         
        </div>
    );
};


const InfographicSlider = ({content}) => {
    const slides = content

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides?.length;
    const sliderRef = useRef(null);
    const [showDots, setShowDots] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowDots(window.innerWidth <= 768);
        };

        handleResize(); // Initial check on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (sliderRef?.current) {
            sliderRef?.current?.slickGoTo(currentSlide);
        }
    }, [currentSlide]);

    // Swipe handling logic - Define or import these variables and functions
    let xDown;
    const handleTouchStart = (e) => {
        xDown = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!xDown) {
            return;
        }

        const xUp = e.touches[0].clientX;
        const xDiff = xDown - xUp;

        if (xDiff > 0) {
            handleDotSwipe('left');
        } else {
            handleDotSwipe('right');
        }

        xDown = null;
    };

    const handleTouchEnd = () => {
        xDown = null;
    };

    const settings = {
        dots: false, // Remove slick dots
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    
        customPaging: function (i) {
            return (
                <button className="custom-dot" onClick={() => setCurrentSlide(i)} />
            );
        },
        afterChange: (index) => {
            setCurrentSlide(index);
        },
    };

    return (
        <section className="infographicslider bg-white overflow-hidden" id="resources">
            <div className="slider-wrapper relative max-w-[121rem] px-[2rem] h-[60.2rem] mx-auto">
                    <Slider ref={sliderRef} {...settings}>
                        {slides?.map((slide, index) => (
                            <div key={index}>
                                <ImageTextCarousel {...slide} />
                            </div>
                        ))}
                    </Slider>
                </div>
        </section>
    );
};


export default InfographicSlider;
