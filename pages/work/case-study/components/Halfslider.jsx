import Slider from 'react-slick';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageTextCarousel = ({ imageSrc, alt }) => {
    return (
        <div className="card relative mx-[1.5rem] laptop:mx-[2.5rem]">
            <div className="img-wrap w-[100%] overflow-hidden h-[94rem] laptop:h-[70rem] lg:h-auto">
                <Image
                    src={imageSrc}
                    className="w-full h-full object-cover laptop:object-contain"
                    width={1920}
                    height={1920}
                    alt={alt}
                />
            </div>
        </div>
    );
};


const Halfslider = ({content}) => {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        nextArrow: (
            <CustomNextArrow currentSlide={currentSlide} totalSlides={totalSlides} />
        ),
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
        <section className="halfslider pt-[60px] bg-black" id="resources">
            <div className="wrapper flex items-center justify-between lg:flex-wrap">
                <div className="colImagSlider w-[100%] lg:w-full lg:mt-0 ">
                    <Slider ref={sliderRef} {...settings}>
                        {slides?.map((slide, index) => (
                            <div key={index}>
                                <ImageTextCarousel {...slide} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

const CustomPrevArrow = ({ onClick, currentSlide }) => (
    <button
        aria-label="first link"
        data-cursor-expand="true"
        data-cursor-icon="arrow-left"
        className={`btn__left group absolute top-0 left-0 h-full w-5 md-up:w-[27rem]  xl-up:w-24 laptop:w-12 tablet:w-[70px] md:w-[3.2rem] md:left-[-1.5rem] z-10 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        onClick={currentSlide !== 0 ? onClick : undefined}
    ></button>
);

const CustomNextArrow = ({ onClick, currentSlide, totalSlides }) => (
    <button
        aria-label="first link"
        data-cursor-expand="true"
        data-cursor-icon="arrow-right"
        className={`btn__right group absolute top-0 right-0 h-full w-5 md-up:w-[27rem] xl-up:w-24 laptop:w-12 tablet:w-[70px] md:w-[3.2rem] md:right-[-1.5rem] z-10 ${currentSlide === totalSlides - 1.16
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100'
            }`}
        onClick={currentSlide !== totalSlides ? onClick : undefined}
    ></button>
);


export default Halfslider;
