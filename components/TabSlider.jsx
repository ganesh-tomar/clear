import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from '../components/styles/tabSlider.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TabSlider = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);


    const accordionItems = [
        {
            title: 'Strategic Branding & Positioning',
            subTitle: 'Solidify Your Foundation',
            desc: 'Our strategic branding & positioning services set the stage for success.',
            bgimage: '/snowmangray.png',
            links: [
                {
                    label: "Brand Strategy",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Brand Messaging",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Visual Identity",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Data & Metrics Analysis",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "User Research",
                    url: "#",
                    className: "tertiary-btn"
                }
            ]
        },
        {
            title: 'Digital Experiences & Creative',
            subTitle: 'Solidify Your Foundation',
            desc: 'Our strategic branding & positioning services set the stage for success.',
            bgimage: '/snowmangray.png',
            links: [
                {
                    label: "Web Experiences",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "UX/UI Design",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Creative & Content Services",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Motion Graphics & Videos",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Campaigns & Marketing",
                    url: "#",
                    className: "tertiary-btn"
                }
            ]
        },
        {
            title: 'Technology Infrastructure & Support',
            subTitle: 'Solidify Your Foundation',
            desc: 'Our strategic branding & positioning services set the stage for success.',
            bgimage: '/snowmangray.png',
            links: [
                {
                    label: "Brand Strategy",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Brand Messaging",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Visual Identity",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "Data & Metrics Analysis",
                    url: "#",
                    className: "tertiary-btn"
                },
                {
                    label: "User Research",
                    url: "#",
                    className: "tertiary-btn"
                }
            ]
        },
    ];

    useEffect(() => {

        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 991);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const delay = 500; // Adjust the delay time as needed

        const timer = setTimeout(() => {
            const handleResize = () => {
                // setIsWideScreen(window.innerWidth > 991);
                const tabWrapper = document.querySelector('section.tabSlider .wrapper');
                const tabSlider = document.querySelector('section.tabSlider');
                const headHeight = document.querySelector('header')?.offsetHeight;
                const screenHeight = window.innerHeight;
                const sectionHeight = screenHeight - (headHeight || 0);
                const appliedHeight = sectionHeight * 3
                if (tabSlider) {
                    if (window.innerWidth > 991) {
                        tabWrapper.style.minHeight = `${sectionHeight}px`;
                        tabWrapper.style.top = `${headHeight}px`;
                        tabSlider.style.minHeight = `${appliedHeight}px`;
                    } else {
                        if (tabWrapper) {
                            tabWrapper.removeAttribute('style');
                            tabSlider.removeAttribute('style');
                        }
                    }
                }
            };

            function handleTabClick(event) {
                if (window.innerWidth > 991) {
                    const clickedTab = event.target;
                    const tabs = document.querySelectorAll('.tabSliderFullWidth .tabList ul li');
                    const tabContents = document.querySelectorAll('.tabSliderFullWidth .tabContent');

                    tabs.forEach(tab => {
                        if (tab === clickedTab) {
                            tab.classList.add(`${style.active}`);
                        } else {
                            tab.classList.remove(`${style.active}`);
                        }
                    });

                    const tabIndex = Array.from(tabs).indexOf(clickedTab);
                    tabContents.forEach((tabContent, index) => {
                        if (index === tabIndex) {
                            tabContent.classList.add(`${style.activeContent}`);
                            const prevTabContent = tabContent.previousElementSibling;
                            const priorTabContent = prevTabContent ? prevTabContent.previousElementSibling : null;
                            if (prevTabContent) prevTabContent.classList.add(`${style.prevContent}`);
                            if (priorTabContent) priorTabContent.classList.add(`${style.priorContent}`);
                        } else {
                            tabContent.classList.remove(`${style.activeContent}`);
                            const prevTabContent = tabContent.previousElementSibling;
                            const priorTabContent = prevTabContent ? prevTabContent.previousElementSibling : null;
                            if (prevTabContent) prevTabContent.classList.remove(`${style.prevContent}`);
                            if (priorTabContent) priorTabContent.classList.remove(`${style.priorContent}`);
                        }
                    });
                }
            }

            function handleScroll() {
                const tabSlider = document.querySelector('section.tabSlider');
                if (tabSlider) {
                    if (window.innerWidth > 991) {
                        const screenHeight = window.innerHeight;
                        const headHeight = document.querySelector('header')?.offsetHeight;
                        const tabSliderTop = tabSlider.getBoundingClientRect().top;
                        const reqScreenHeight = screenHeight - (headHeight || 0)
                        const scrollPosition = window.scrollY;
                        const distanceFromTop = parseInt(tabSliderTop - (headHeight || 0));
                        const checkPoint1 = distanceFromTop;
                        const checkPoint2 = checkPoint1 + reqScreenHeight;
                        const checkPoint3 = checkPoint2 + reqScreenHeight;

                        const tabs = document.querySelectorAll('.tabList ul li');

                        if (tabSliderTop <= headHeight) {
                            tabs[0].click();
                        }
                        if (tabSliderTop <= headHeight - reqScreenHeight / 2) {
                            tabs[1].click();
                        }
                        if (tabSliderTop <= headHeight - reqScreenHeight - reqScreenHeight / 2) {
                            tabs[2].click();
                        }
                    }
                }
            }
            if (isWideScreen) {

                window.addEventListener("resize", handleResize);
                handleResize();

                const tabs = document.querySelectorAll('.tabSlider .tabList ul li');
                tabs.forEach(tab => {
                    tab.addEventListener('click', handleTabClick);
                });

                window.addEventListener('scroll', handleScroll);
                window.addEventListener('resize', handleScroll);
                handleScroll();

                return () => {
                    window.removeEventListener("resize", handleResize);
                    tabs.forEach(tab => {
                        tab.removeEventListener('click', handleTabClick);
                    });
                    window.removeEventListener('resize', handleScroll);
                    window.removeEventListener('scroll', handleScroll);
                };
            }

        }, delay);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, [isWideScreen]);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            {isWideScreen ? (
                <section className={`${style.tabSlider} tabSlider tabSliderFullWidth bg-gray no-padding top-0 left-0 z-[8] block`}>
                    <div className="wrapper flex w-full sticky">
                        <div className="tabListOuter relative z-10 flex flex-col justify-between w-1/2 lg-up:pb-[7.4rem] bg-gray containerPadding pt-[7.5%] xxl-up:pt-[118px]">
                            <div className="title mb-[3rem]">
                                <h3>Our services.</h3>
                            </div>
                            <div className="tabList">
                                <ul className={`pl-0`}>
                                    <li data-cursor-expand className={`${style.tabLink} ${style.active} pt-[4rem] pb-[4.2rem] h4  border-b`}>Strategic Branding & Positioning</li>
                                    <li data-cursor-expand className={`${style.tabLink} pt-[4rem] h4 pb-[4.2rem]  border-b`}>Digital Experiences & Creative</li>
                                    <li data-cursor-expand className={`${style.tabLink} pt-[4rem] pb-[4.2rem] h4  border-b`}>Technology Infrastructure & Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabContentOuter overflow-x-hidden relative w-1/2">
                            <div className={`tabContent ${style.activeContent} absolute top-0 right-0 w-full h-full translate-x-[100%] transition-transform duration-500 ease-linear lg-up:pl-[10.5rem] lg-up:pb-[3.4rem] containerPadding pt-[15%] xxl-up:pt-[118px]`}>
                                <div className="bg-img dark__overlay !z-[0]">
                                    <Image
                                        src={'/tab_content_a.png'}
                                        width={800}
                                        height={1090}
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className='relative w-full h-full z-[1] text-white flex flex-col justify-between'>
                                    <div className="description mb-[0.1rem]">
                                        <h4 className={`mb-[2rem] font-normal`}>Solidify Your Foundation 1</h4>
                                        <h5 className={`leading-[1.5] font-normal`}>Our strategic branding & positioning services set the stage for success.</h5>
                                    </div>
                                    <ul className={`${style.listWrap} pl-0`}>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Brand Strategy</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Brand Messaging</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Visual Identity</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Data & Metrics Analysis</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>User Research</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`tabContent absolute top-0 right-0 w-full h-full translate-x-[100%] transition-transform duration-500 ease-linear lg-up:pl-[10.5rem] lg-up:pb-[3.4rem] containerPadding pt-[15%] xxl-up:pt-[118px]`}>
                                <div className="bg-img dark__overlay !z-[0]">
                                    <Image
                                        src={'/tab_content_a.png'}
                                        width={800}
                                        height={1090}
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className='relative w-full h-full z-[1] text-white flex flex-col justify-between'>
                                    <div className="description mb-[0.1rem]">
                                        <h4 className={`mb-[2rem] font-normal`}>Solidify Your Foundation 2</h4>
                                        <h5 className={`leading-[1.5] font-normal`}>Our strategic branding & positioning services set the stage for success.</h5>
                                    </div>
                                    <ul className={`${style.listWrap} pl-0`}>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Web Experiences</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>UX/UI Design</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Creative & Content Services</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Motion Graphics & Videos</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Campaigns & Marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`tabContent absolute top-0 right-0 w-full h-full translate-x-[100%] transition-transform duration-500 ease-linear lg-up:pl-[10.5rem] lg-up:pb-[3.4rem] containerPadding pt-[15%] xxl-up:pt-[118px]`}>
                                <div className="bg-img dark__overlay !z-[0]">
                                    <Image
                                        src={'/tab_content_a.png'}
                                        width={800}
                                        height={1090}
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className='relative w-full h-full z-[1] text-white flex flex-col justify-between'>
                                    <div className="description mb-[0.1rem]">
                                        <h4 className={`mb-[2rem] font-normal`}>Solidify Your Foundation 3</h4>
                                        <h5 className={`leading-[1.5] font-normal`}>Our strategic branding & positioning services set the stage for success.</h5>
                                    </div>
                                    <ul className={`${style.listWrap} pl-0`}>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Brand Strategy</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Brand Messaging</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Visual Identity</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>Data & Metrics Analysis</a></li>
                                        <li className={`${style.contentLink}`}><a href="#" className='tertiary-btn'>User Research</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="tabSlider bg-gray !min-h-[unset]">
                    <div className="container !min-h-[unset]">
                        <div className="intro">
                            <h3>Our services.</h3>
                        </div>
                        <div className="accordionWrap">
                            {accordionItems.map((item, index) => (
                                <div data-cursor-expand data-cursor-icon={activeIndex === index ? "iconMinus" : "iconPlus"} key={index} className={`accordion-item !cursor-pointer relative ${activeIndex === index ? "" : "border-b border-black"}`} onClick={() => toggleAccordion(index)}>
                                    <div
                                        className={`${style.accordionHeader} relative accordion-header ${activeIndex === index ? `${style.active} active` : ''} cursor-pointer pt-[4rem] pb-[3.8rem] pr-[8rem] max-w-[123.9rem]`}
                                    >
                                        <h4 className='pointer-events-none !cursor-pointer'>{item.title}</h4>
                                    </div>
                                    <div
                                        className={`accordioncontent relative max-w-[123.9rem] overflow-y-clip overflow-visible transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-[250rem] open' : 'max-h-0'
                                            } ${style.accordioncontent}`}
                                    >
                                        <div className="bg-img dark__overlay !z-[0] !w-[calc(100%+3.2rem)] !left-[-1.6rem]">
                                            <Image
                                                src={item.bgimage}
                                                width={800}
                                                height={1090}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </div>
                                        <div className="tabContent w-full relative overflow-hidden pt-[4.1rem] pl-[0.2rem] pb-[6rem]">
                                            <div className="description text-white relative">
                                                <h4 className={`mb-[1.5rem] font-normal`}>{item.subTitle}</h4>
                                                <p className={`text-[20px]`}>{item.desc}</p>
                                            </div>
                                            <ul className={`pl-0`}>
                                                {item.links.map((link, index) => (
                                                    <li key={index} className={`${style.accordionLink} pt-[3rem] pb-[2.9rem]`}><a href="#" className='tertiary-btn !text-[2rem]'> {link.label}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default TabSlider;