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
import moreWow from '../../public/Lootie/More-Wow.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

const ImageWithSlider = (data) => {
    const [allSlides, setAllSlides] = useState(data.items.length);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    // Debounce function
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    useEffect(() => {
        // Debounced version of your GSAP setup
        const setupGSAP = debounce(() => {
            gsap.registerPlugin(ScrollTrigger);
            // Create a gsap.matchMedia() instance
            const mm = gsap.matchMedia();

            // Add media query rules
            mm.add("(min-width: 769px)", () => {
                let getRatio = (el) =>
                    window.innerHeight / (window.innerHeight + el.offsetHeight);

                gsap.utils.toArray("section").forEach((section, i) => {
                    const content = section.querySelector(".imageSlider.scrollParallax .fixedContent");
                    if (content) {
                        gsap.fromTo(
                            content,
                            {
                                y: () => (i ? -window.innerHeight * getRatio(content) : 0),
                            },
                            {
                                y: () => window.innerHeight * (1 - getRatio(content)),
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

                // Return a cleanup function
                return () => {
                    // Kill all ScrollTriggers created by this instance
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                };
            });
        }, 300); // 300ms debounce delay

        // Run the setup function initially and on route change
        setupGSAP();

        // Listen for route changes
        router.events.on("routeChangeComplete", setupGSAP);

        // Cleanup listener on unmount
        return () => {
            router.events.off("routeChangeComplete", setupGSAP);
        };
    }, [router.events]); // Dependency array

    useEffect(() => {
        var slides = document.querySelectorAll('.imageSlider .item').length;
        setAllSlides(slides);
    }, []);

    const [animationState, setAnimationState] = useState(() => {
        return data.items ? data.items.map(() => ({
            isStopped: false,
            isPaused: true,
        })) : [];
    });

    const HandleMouseEnter = (index) => {
        const newAnimationState = [...animationState];
        newAnimationState[index].isStopped = false;
        newAnimationState[index].isPaused = false;
        setAnimationState(newAnimationState);
    };

    const HandleMouseLeave = (index) => {
        const newAnimationState = [...animationState];
        newAnimationState[index].isStopped = true;
        newAnimationState[index].isPaused = true;
        setAnimationState(newAnimationState);
    };

    const settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow allSlides={allSlides} />,
        afterChange: (index) => {
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
            breakpoint: 1500,
            settings: {
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                speed: 500,
            },
        },
        {
            breakpoint: 768,
            settings: 'unslick',
        },
    ];
    Object.assign(settings, { responsive: responsiveSettings });

    const renderLottieAnimation = (name, index) => {
        switch (name) {
            case 'circleLottie':
                return (
                    <div className="absolute w-[160%] h-[160%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                            isPaused={animationState[index].isPaused}
                            className="lottie"
                        />
                    </div>
                );
            case 'boldLottie':
                return (
                    <div className="absolute w-[160%] h-[160%] top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 laptop-landscape:h-[180%] laptop-landscape:top-[30%]">
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
                            isPaused={animationState[index].isPaused}
                            className="lottie"
                        />
                    </div>
                );
            case 'underlineLottie':
                return (
                    <div className="absolute w-[110%] h-[62%] -bottom-[26%] left-[-1.5rem]">
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
                            isPaused={animationState[index].isPaused}
                            className="lottie"
                        />
                    </div>
                );
            case 'moreWowLottie':
                return (
                    <div className="absolute w-[150%] h-[175%] left-[-5%] -translate-y-1/2">
                        <Lottie
                            options={{
                                loop: false,
                                autoplay: false,
                                animationData: moreWow,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                            isStopped={animationState[index].isStopped}
                            isPaused={animationState[index].isPaused}
                            className="lottie"
                        />
                    </div>
                );
            case 'largeCircleLottie':
                return (
                    <div className="absolute w-[150%] h-[175%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                            isPaused={animationState[index].isPaused}
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
            if (secondSlideElement) {
                secondSlideElement.classList.remove('removeHover');
            }
        }, 2000);
    };

    return (
        <section className={`imageSlider will-change-transform h-[calc(100%-180px)] ${data.classes} ${data?.padding.join(' ')}`} id={data.id}>
            {typeof data.items === 'object' &&
                <div className='wrapper fixedContent '>
                    <Slider {...settings}>
                        {data?.items.map((item, i) => {
                            return (
                                <div className={`slideItem item blade-height relative animation-container-${i}`} key={i} data-index={i}
                                    onMouseEnter={() => {
                                        removeclasshandler();
                                        HandleMouseEnter(i);
                                    }}
                                    onMouseLeave={() => HandleMouseLeave(i)}
                                >
                                    <Link href={item?.link?.linkUrl} className={`redirect !z-[8]`} target={item?.link?.target ? "_blank" : "_self"}>
                                        {item?.link?.linkText}
                                    </Link>
                                    <div className='blade-height overflow-hidden'>
                                        {item.imageVideo ?
                                            <video
                                                poster={item?.videoPoster ? item?.videoPoster?.mediaItemUrl : null}
                                                className="video-bg overlay w-full h-full object-cover blade-height"
                                                autoPlay
                                                loop
                                                muted
                                            >
                                                <source src={item?.videoUrl} type="video/mp4" />
                                            </video>
                                            :
                                            (item?.image && item?.image?.mediaItemUrl) &&
                                            <Image
                                                src={item?.image?.mediaItemUrl}
                                                width={800}
                                                height={1090}
                                                className="w-full h-full object-cover"
                                                alt={item?.image?.altText}
                                                fetchPriority="high"
                                            />
                                        }
                                    </div>
                                    <div className="imageSlider__text z-[5] absolute left-0 xl-up:bottom-[15rem] bottom-[7rem]">
                                        {item?.logo &&
                                            <div className="logo h-[4rem] max-w-[19.5rem] w-full mt-[2rem] md-up:mt-[3rem] mb-[1.5rem] sm:max-w-[10rem]">
                                                <Image src={item?.logo?.mediaItemUrl} width={1800} height={1090} className="w-full h-full sm:max-w-[15.4rem] object-contain object-left" alt={item?.logo?.altText} fetchPriority="high" />
                                            </div>
                                        }
                                        <div className={`relative`}>
                                            {item?.animationTitle == 'none' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">{item?.preTitle} {item?.title} {item?.postTitle}</h3> : ''}
                                            {item?.animationTitle == 'pre' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]"><span className="relative inline-block">{renderLottieAnimation(item?.lottieAnimation, i)}{item?.preTitle}</span> {item?.title} {item?.postTitle}</h3> : ''}
                                            {item?.animationTitle == 'default' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">{item?.preTitle} <span className="relative inline-block">{renderLottieAnimation(item?.lottieAnimation, i)}{item?.title}</span> {item?.postTitle}</h3> : ''}
                                            {item?.animationTitle == 'post' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">{item?.preTitle} {item?.title} <span className=" inline-block">{renderLottieAnimation(item?.lottieAnimation, i)}{item?.postTitle}</span></h3> : ''}

                                        </div>
                                        <Link href={item?.link?.linkUrl} className={item?.link?.class + ' mt-[3rem] md:mt-[2rem] text-white'} target={item.link.target ? "_blank" : "_self"}>
                                            {item?.link?.linkText}
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
            className={`btn__left group absolute top-0 left-0 sm:hidden h-full lg-up:w-[10%] lg:w-[100px] xl-up:w-24 laptop:w-[70px] tablet:w-[12rem] md:w-[2rem] md:left-[-1.5rem] z-10 lg:hidden ${currentSlide === 0 ? 'hidden' : ''}`}
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
            className={`btn__right group absolute top-0 right-0 sm:hidden h-full lg-up:w-[10%] lg:w-[100px] z-10 lg:hidden ${currentSlide === (allSlides - 2) ? ' lg-up:hidden' : ''} `}
            onClick={currentSlide !== allSlides - 1 ? handleClick : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></button>
    );
};


export default ImageWithSlider;