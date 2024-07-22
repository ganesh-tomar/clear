import Image from "next/image";
import Link from "next/link";
import Lottie from 'react-lottie';
import Slider from 'react-slick';
import React, { useRef, useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import circleLottie from '../../public/Lootie/Clear_ViralNation_Marker_R1.json';
import underlineLottie from '../../public/Lootie/Clear_SplunkMarker_R1.json';
import boldLottie from '../../public/Lootie/Clear_SailPointMarker_R1.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

const ImageWithSlider = (data) => {
    const [allSlides, setAllSlides] = useState(data.items.length);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isWideScreen, setIsWideScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsWideScreen(window.innerWidth > 991);
            }
        };

        if (typeof window !== 'undefined') {
            setIsWideScreen(window.innerWidth > 991);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

        gsap.utils.toArray("section").forEach((section, i) => {
            const content = section.querySelector(".imageSlider .fixedContent");
            if (content) {
                gsap.fromTo(
                    content,
                    {
                        y: () =>
                            i ? -window.innerHeight * getRatio(content) : 0,
                    },
                    {
                        y: () =>
                            window.innerHeight * (1 - getRatio(content)),
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: () => (i ? "top bottom" : "top top"),
                            end: "bottom top",
                            scrub: true,
                            invalidateOnRefresh: true, // to make it responsive
                        },
                    }
                );
            }
        });
    });


    useEffect(() => {
        var slides = document.querySelectorAll('.imageSlider .item').length;
        setAllSlides(slides);
    }, []);

    useEffect(() => {
        var totalSlides = Math.ceil(allSlides);
    }, [allSlides]);

    const [animationState, setAnimationState] = useState(() => {
        return data.items ? data.items.map(() => ({
            isStopped: true,
            playedOnce: false,
        })) : [];
    });

    const observers = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -90% 0px',
            threshold: 0.1,
        };

        const handleIntersection = (entries) => {
            setAnimationState((prevState) => {
                const newState = [...prevState];
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index, 10);
                    if (isNaN(index) || !newState[index]) return; // Ensure index is valid and exists

                    if (entry.isIntersecting && !newState[index].playedOnce) {
                        newState[index] = {
                            isStopped: false,
                            playedOnce: true,
                        };
                    }
                });
                return newState;
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        data.items?.forEach((_, index) => {
            const element = document.querySelector(`.animation-container-${index}`);
            if (element) {
                observer.observe(element);
            }
        });

        observers.current.push(observer);

        return () => {
            observers.current.forEach((obs) => obs.disconnect());
            observers.current = [];
        };
    }, [data.items]);


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow allSlides={allSlides} />,
        afterChange: (index) => {
            console.log('Slide changed to:', index);
            setCurrentSlide(index);

            // Remove active class from all slides
            document.querySelectorAll('.slideItem').forEach(slide => {
                slide.classList.remove('active');
            });

            // Add active class to the current slide
            const currentSlideElement = document.querySelector(`.slideItem[data-index="${index}"]`);
            if (currentSlideElement) {
                currentSlideElement.classList.add('active');
            }
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
    let sectionPadding = '';
    data.padding.map(item => {
        sectionPadding += ' ' + item;
    });

    const renderLottieAnimation = (index) => {
        switch (index) {
            case 0:
                return (
                    <div className="absolute w-[30%] h-[90%] top-[-2rem] left-[-3rem]">
                        <Lottie
                            options={{
                                loop: false,
                                autoplay: false,
                                animationData: circleLottie,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                            isStopped={animationState[index].isStopped}
                            className="lottie"
                        />
                    </div>
                );
            case 1:
                return (
                    <div className="absolute w-[40%] h-[105%] bottom-[-16%] left-[-8rem]">
                        <Lottie
                            options={{
                                loop: false,
                                autoplay: false,
                                animationData: boldLottie,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                            isStopped={animationState[index].isStopped}
                            className="lottie"
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="absolute w-[53%] h-[62%] top-[2rem] left-[-2rem]">
                        <Lottie
                            options={{
                                loop: false,
                                autoplay: false,
                                animationData: underlineLottie,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                            isStopped={animationState[index].isStopped}
                            className="lottie"
                        />
                    </div>
                );
            case 3:
                return (
                    <div className="absolute w-[35%] h-[90%] top-[-2rem] left-[-3rem]">
                        <Lottie
                            options={{
                                loop: false,
                                autoplay: false,
                                animationData: circleLottie,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                            isStopped={animationState[index].isStopped}
                            className="lottie"
                        />
                    </div>
                );
            default:
                return null; // handle other cases or default behavior
        }
    };
    const removeclasshandler = () => {
        setTimeout(() => {
            const secondSlideElement = document.querySelector(`.slideItem[data-index="${1}"]`);
            console.log('enter');
            if (secondSlideElement) {
                secondSlideElement.classList.remove('removeHover');
            }
        }, 2000);
    };

    return (
        <section className={`imageSlider will-change-transform h-[calc(100%-180px)] ${data.classes} ${sectionPadding}`} id={data.id}>
            {typeof data.items === 'object' &&
                <div className='wrapper fixedContent'>
                    <Slider {...settings}>
                        {data.items.map((item, i) => {
                            return (
                                <div className={`slideItem item blade-height relative animation-container-${i}`} key={i} data-index={i} onMouseEnter={removeclasshandler}
                                >
                                    <div className='blade-height overflow-hidden'>
                                        {item.imageVideo ?
                                            <video
                                                poster={item.videoPoster ? item.videoPoster.mediaItemUrl : null}
                                                className="video-bg overlay w-full h-full object-cover blade-height"
                                                autoPlay
                                                loop
                                                muted
                                            >
                                                <source src={item.videoUrl} type="video/mp4" />
                                            </video>
                                            :
                                            (item.image && item.image.mediaItemUrl) &&
                                            <Image
                                                src={item.image.mediaItemUrl}
                                                width={800}
                                                height={1090}
                                                className="w-full h-full object-cover"
                                                alt={item.image.altText}
                                            />
                                        }
                                    </div>
                                    <div className="imageSlider__text z-[5] absolute left-0 xl-up:bottom-[15rem] bottom-[7rem]">
                                        {item.logo &&
                                            <div className="logo h-[4rem] max-w-[19.5rem] w-full mt-[2rem] md-up:mt-[3rem] mb-[1.5rem] sm:max-w-[10rem]">
                                                <Image src={item.logo.mediaItemUrl} width={800} height={1090} className="w-full h-full sm:max-w-[15.4rem] object-contain object-left" alt={item.logo.altText} />
                                            </div>
                                        }
                                        <div className={`relative`}>
                                            {item.animationTitle == 'none' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">{item.preTitle} {item.title} {item.postTitle}</h3> : ''}
                                            {item.animationTitle == 'pre' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]"><span>{renderLottieAnimation(i)}{item.preTitle}</span> {item.title} {item.postTitle}</h3> : ''}
                                            {item.animationTitle == 'default' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">{item.preTitle} <span>{renderLottieAnimation(i)}{item.title}</span> {item.postTitle}</h3> : ''}
                                            {item.animationTitle == 'post' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">{item.preTitle} {item.title} <span>{renderLottieAnimation(i)}{item.postTitle}</span></h3> : ''}

                                        </div>
                                        <Link href={item.link.linkUrl} className={item.link.class + ' mt-[3rem] md:mt-[2rem] text-white'} target={item.link.target ? "_blank" : "_self"}>
                                            {item.link.linkText}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </Slider>
                </div>
            }
        </section>
    )
}

const CustomPrevArrow = ({ onClick, currentSlide }) => {

    const handleMouseEnter = () => {
        document.querySelectorAll('.slideItem').forEach(slide => {
            slide.classList.remove('currentActive');
        });
        const nextSlideElement = document.querySelector(`.slideItem[data-index="${currentSlide}"]`);
        if (nextSlideElement) {
            nextSlideElement.classList.add('currentActive');
        }
    };

    const handleMouseLeave = () => {
        document.querySelectorAll('.slideItem').forEach(slide => {
            slide.classList.remove('currentActive');
        });
        const currentSlideElement = document.querySelector(`.slideItem[data-index="${currentSlide}"]`);
        if (currentSlideElement) {
            currentSlideElement.classList.remove('currentActive');
        }
    };

    const handleClick = () => {
        const currentSlideElement = document.querySelector(`.slideItem[data-index="${currentSlide}"]`);
        if (currentSlideElement) {
            currentSlideElement.classList.remove('currentActive');
        }

        const nextSlideElement = document.querySelector(`.slideItem[data-index="${currentSlide - 1}"]`);
        if (nextSlideElement) {
            nextSlideElement.classList.add('currentActive');
        }
        const secondSlideElement = document.querySelector(`.slideItem[data-index="${1}"]`);
        if (secondSlideElement) {
            secondSlideElement.classList.add('removeHover');
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            aria-label="first link"
            data-cursor-expand="true"
            data-cursor-icon="arrow-left"
            className={`btn__left group absolute top-0 left-[-20px] sm:hidden h-full w-5 xl-up:w-24 laptop:w-[70px] tablet:w-[12rem] md:w-[2rem] md:left-[-1.5rem] z-10 ${currentSlide === 0 ? 'hidden' : ''}`}
            onClick={currentSlide !== 0 ? handleClick : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></button>
    )
};

const CustomNextArrow = ({ onClick, currentSlide, allSlides }) => {
    const nextSlideIndex = (currentSlide + 1);
    const handleMouseEnter = () => {
        document.querySelectorAll('.slideItem').forEach(slide => {
            slide.classList.remove('hoveractive');
        });
        const nextSlideElement = document.querySelector(`.slideItem[data-index="${nextSlideIndex}"]`);
        if (nextSlideElement) {
            nextSlideElement.classList.add('hoveractive');
        }
    };

    const handleMouseLeave = () => {
        document.querySelectorAll('.slideItem').forEach(slide => {
            slide.classList.remove('hoveractive');
        });
    };

    const handleClick = () => {

        const currentSlideElement = document.querySelector(`.slideItem[data-index="${nextSlideIndex}"]`);
        if (currentSlideElement) {
            currentSlideElement.classList.remove('hoveractive');
        }

        const nextSlideElement = document.querySelector(`.slideItem[data-index="${nextSlideIndex + 1}"]`);
        if (nextSlideElement) {
            nextSlideElement.classList.add('hoveractive');
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            aria-label="first link"
            data-cursor-expand="true"
            data-cursor-icon="arrow-right"
            className={`btn__right group absolute top-0 right-0 sm:hidden h-full w-[10%] z-10 ${currentSlide === (allSlides - 2) ? 'hidden' : ''}`}
            onClick={currentSlide !== allSlides - 1 ? handleClick : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></button>
    );
};


export default ImageWithSlider;