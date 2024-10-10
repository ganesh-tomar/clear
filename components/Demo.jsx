import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'react-lottie';
import Slider from 'react-slick';
import styles from '../components/styles/colTwoSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from '../public/Lootie/Quote-Marks-Black-Marker-Icon.json';

const QuoteCarousel = ({ slide, currentSlide, fullWidthSlides, fontColor }) => {
    // console.log(fullWidthSlides);
    const [animationState, setAnimationState] = useState({
        isStopped: true,
        isPaused: false,
    });

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Play the animation only when it comes into view
                    if (animationState.isStopped) {
                        setAnimationState({ isStopped: false, isPaused: false });
                    }
                } else {
                    // Stop the animation when it leaves the view
                    if (!animationState.isStopped) {
                        setAnimationState({ isStopped: true, isPaused: false });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Adjust this threshold as needed
        });

        setTimeout(() => {
            const animationContainerRef = document.querySelector('.quotelottieBox');
            if (animationContainerRef) {
                observer.observe(animationContainerRef);
            }

            return () => {
                if (observer && animationContainerRef) {
                    observer.unobserve(animationContainerRef);
                }
            };
        }, 1500);


    }, [animationState.isStopped]);

    return (
        <div className="colTwoSlider__item">
            <div className="colTwoSlider__item--inner">
                <div className={`colTwoSlider__left lg:overflow-hidden w-full ${fullWidthSlides.includes(currentSlide) ? 'fullWidth' : 'mb-[7rem]'}`}>
                    {slide.type === 'image' && slide.image && (
                        <Image
                            src={slide.image.mediaItemUrl}
                            alt={slide.image.altText}
                            width={608}
                            height={523}
                            className="w-[101%] h-full max-w-[58rem]"
                        />
                    )}
                    {slide.type === 'text-with-prefix' && (
                        <div className={`${styles.cross_icon} counter relative inline-block sm:mb-[1rem]`}>
                            <h2 className="large inline font-light sm:!text-[90px] xxs:!text-[80px] text-white count">
                                {slide.textWithPrefix.prefix}
                            </h2>
                            <h2 className="large font-light inline sm:!text-[90px] xxs:!text-[80px] text-white count">
                                {slide.textWithPrefix.number}
                            </h2>
                            <h2 className="large inline font-light sm:!text-[90px] xxs:!text-[80px] text-white h1">
                                {slide.textWithPrefix.denotation}
                            </h2>
                        </div>
                    )}
                    {slide.textWithPrefix.subHeading && (
                        <h4 className="mb-[0.3rem] leading-[1.5] font-medium">
                            {slide.textWithPrefix.subHeading}
                        </h4>
                    )}
                    {slide.textWithPrefix.description && (
                        <p className="max-w-[40rem] leading-[1.5] font-normal">
                            {slide.textWithPrefix.description}
                        </p>
                    )}
                </div>
                <div className={`colTwoSlider__right relative ${styles.sliderRight} pt-[8rem]`}>

                    <div className={`${styles.quotationMarkBox} quotelottieBox`}>
                        {fontColor == 'text-black' ? (
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: false, // Controlled via state
                                    animationData: quote,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                                isStopped={animationState.isStopped}
                                isPaused={animationState.isPaused}
                            />
                        ) : (
                            <span
                                className={`${styles?.quotationMark} quotationMarkSpan`}
                            >
                            </span>
                        )}
                        {/* <span className={`${styles.quotationMark} quotationMarkSpan`}></span> */}
                    </div>
                    {slide.body && (
                        <div className="lead" dangerouslySetInnerHTML={{ __html: slide.body }}></div>
                    )}
                    {slide.authorName && (
                        <>
                            <span className="inline-block text-[1.6rem] laptop:text-[16px] font-bold xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem]">
                                {slide.authorName}
                            </span>
                            &nbsp;
                            <span className={`inline-block text-[1.6rem] laptop:text-[16px] designation xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem] sm:!mt-[10px]`}>
                                {slide.designation}
                            </span>
                        </>
                    )}
                    {slide.logo && slide.logo.mediaItemUrl && (
                        <div className="colTwoSlider__logo mt-[1.7rem] max-w-[17.4rem] max-h-[3.3rem]">
                            <Image
                                src={slide.logo.mediaItemUrl}
                                alt={slide.logo.altText}
                                width={174}
                                height={26}
                                className='object-left object-contain max-w-[17.4rem] max-h-[3.3rem]'
                                loading='eager'
                            />
                        </div>
                    )}
                    {slide.link.linkText && (
                        <div className="mt-[3rem] relative z-20 header-btnwrap white block w-full h-auto bg-transparent">
                            <Link href={slide.link.linkUrl} className={`${slide.link.class}`}>
                                {slide.link.linkText}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ColTwoWithSlider = (props) => {
    const data = props.data;
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = data.items.length; // Update to directly get length
    const sliderRef = useRef(null);
    const [fullWidthSlides, setFullWidthSlides] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data.items)) {
            const fullWidthIndices = data.items.reduce((acc, slide, index) => {
                if (slide.type === 'full-width-text') {
                    acc.push(index);
                }
                return acc;
            }, []);
            setFullWidthSlides(fullWidthIndices);
            // console.log(fullWidthIndices);

        }
    }, [data]);

    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(currentSlide);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentSlide]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(currentSlide);
        }
    }, [currentSlide]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true, // Enable autoplay if desired
        autoplaySpeed: 5000, // Speed of autoplay
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false,
        swipe: true,
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide on change
    };


    return (
        <section className={`testimonialSlider colTwoSlider grid__parallax dark ${data.backgroundColor} ${data.textColor} ${data?.classes || ''} ${data?.padding.join(' ')}`} id={data.id}>
            {/* {console.log(data.textColor)} */}

            <div className="container">
                <div className="wrapper">
                    <Slider ref={sliderRef} {...settings}>
                        {data.items.map((slide, index) => (
                            <div key={index}>
                                <QuoteCarousel slide={slide} currentSlide={currentSlide} fullWidthSlides={fullWidthSlides} fontColor={data.textColor} />
                            </div>
                        ))}
                    </Slider>
                    {totalSlides > 1 && (
                        <div className="progress-bar block mt-[3rem] md-up:mt-[5rem] relative w-full">
                            <span
                                aria-label="previous link"
                                className={`ColTwoSlider_prev_button text-[0] z-[20] absolute inline-block h-full top-0 left-0 ${currentSlide === 0 ? 'hidden' : ''}`}
                                style={{
                                    width: `${((currentSlide) / totalSlides) * 100}%`,
                                }}
                                onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
                            >
                                Previous
                            </span>
                            <span
                                aria-label="next link"
                                className={`ColTwoSlider_next_button text-[0] z-[5] absolute inline-block w-1/2 h-full top-0 right-0 ${currentSlide === totalSlides - 1 ? 'hidden' : ''}`}
                                style={{
                                    width: `${100 - (((currentSlide) / totalSlides) * 100)}%`,
                                }}
                                onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
                            >
                                Next
                            </span>
                            <span className={`${data.backgroundColor === 'bg-white' ? 'bg-black' : 'bg-white'} block w-full md-up:max-w-[105%] h-[1px] absolute left-0 top-1/2 -translate-y-1/2`} ></span>
                            <div
                                className="h-[1rem] md:h-[1.6rem] bg-pink transition-all duration-300 relative z-10"
                                style={{
                                    width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ColTwoWithSlider;
