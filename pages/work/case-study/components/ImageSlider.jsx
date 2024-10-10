import Image from "next/image"
import Link from "next/link"
import Slider from 'react-slick';
import React, { useRef, useState, useEffect } from 'react';

const ImageSlider = ({ content }) => {
    const sliderRef = useRef(null);
    const [allSlides, setAllSlides] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        var slides = document.querySelectorAll('.imageSlider .item').length;
        setAllSlides(slides);
    }, []);

    useEffect(() => {
        var totalSlides = Math.ceil(allSlides);
    }, [allSlides]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        afterChange: (index) => {
            console.log('Slide changed to:', index);
            setCurrentSlide(index);
        },
    };

    const responsiveSettings = [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 768,
            settings: 'unslick',
        },
    ];
    Object.assign(settings, { responsive: responsiveSettings });

    return (
        <section className='imageSlider case-study no-padding'>
            <div className='wrapper'>
                <Slider ref={sliderRef} {...settings}>
                    {
                        content?.map((item, index) => {
                            return (
                                <div className='item blade-height relative' key={index}>
                                    <div className='blade-height'>
                                        <Image src={item?.img} width={800} height={1090} className="w-full h-full object-cover" alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

const CustomPrevArrow = ({ onClick, currentSlide }) => (
    <button aria-label="first link"
        data-cursor-expand="true"
        data-cursor-icon="arrow-left"
        className={`btn__left group lg:hidden absolute top-0 left-0 h-full w-5 xl-up:w-24 laptop:w-12 tablet:w-[70px] z-10 ${currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        onClick={onClick}
    >
    </button>
);

const CustomNextArrow = ({ onClick, currentSlide, slideCount }) => (
    <button aria-label="first link"
    data-cursor-expand="true"
    data-cursor-icon="arrow-right"
        className={`btn__right group lg:hidden absolute top-0 right-0 h-full w-5 xl-up:w-24 laptop:w-12 tablet:w-[70px] z-10 ${currentSlide === slideCount - 2 ? "md-up:opacity-0 md-up:pointer-events-none" : "md-up:opacity-100"} ${currentSlide === slideCount - 1 ? "md:opacity-0 md:pointer-events-none" : "md:opacity-100"}`}
        onClick={onClick}
    >
    </button>
);

export default ImageSlider
