import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from '../components/styles/tabSlider.module.css';

gsap.registerPlugin(ScrollTrigger);
const TabWithSlider = (data) => {
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPinkCover, setShowPinkCover] = useState(false);
    const [animating, setAnimating] = useState(false);
    const coverRef = useRef(null);
    const tabSliderRef = useRef(null);
    const [pinned, setPinned] = useState(false);



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
        const timer = setTimeout(() => {
            const tabWrapper = document.querySelector('section.tabSlider .wrapper');
            const tabSlider = document.querySelector('section.tabSlider');
            const headHeight = document.querySelector('header')?.offsetHeight;
            const screenHeight = window.innerHeight;
            const sectionHeight = screenHeight - (headHeight || 0);
            const appliedHeight = (sectionHeight + 200);
            if (tabSlider) {
                if (window.innerWidth > 991 && tabWrapper) {
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
        }, 1000);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, []);

    const [initialScrollHandled, setInitialScrollHandled] = useState(false);
    const scrollTriggerRef = useRef(null);

    useEffect(() => {
        const smoother = window.smoother; // Access the instance from the window object
        const headHeight = document.querySelector('header')?.offsetHeight || 0;
        const tabsDescription = document.querySelectorAll('.tabSlider .tabContent .descriptionWrapper');
        const scrollValue = 0.33 * window.innerHeight; // Define the scroll value (33% of the viewport height)

        if (!smoother) return;

        // Pin the tabSlider section
        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: ".tabSlider",
            pin: true,
            pinSpacing: true,
            start: `top ${headHeight}`,
            end: `bottom ${headHeight}`,
            markers: false,
            onEnter: () => {
                // Use gsap.to to handle the scroll animation
                gsap.to(window, {
                    scrollTo: { y: scrollValue + window.scrollY, autoKill: false },
                    duration: 1,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        setInitialScrollHandled(true); // Mark the initial scroll as handled
                        ScrollTrigger.refresh(); // Refresh ScrollTrigger to update positions
                        setActiveIndex((prevIndex) => (prevIndex + 1));
                    },
                });
            },
        });

        // Handle scroll event after pinning
        ScrollTrigger.create({
            trigger: ".tabSlider",
            start: "top top", // Adjust as needed
            end: "bottom top", // Adjust as needed
            markers: false,
            onUpdate: (self) => {
                if (initialScrollHandled && self.direction === 1) { // Check if initial scroll handled and scrolling down
                    smoother.scrollTo(scrollValue + window.scrollY, true); // Scroll to next 33% of screen height
                    setInitialScrollHandled(false); // Reset the scroll state
                    ScrollTrigger.refresh(); // Refresh ScrollTrigger to update positions
                }
            },
        });

        tabsDescription.forEach(element => {
            element.classList.add('animation-fadeInLeft');
        });

        return () => {
            scrollTriggerRef.current.kill();
        };
    }, [initialScrollHandled]);


    const tabClickHandler = (index) => {
        if (index === activeIndex) {
            return;
        }
        setShowPinkCover(true);

        const tl = gsap.timeline();

        tl.fromTo(coverRef.current,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, transformOrigin: "left", duration: 0.5, ease: "power2.in" })
            .to(coverRef.current,
                { scaleX: 0, transformOrigin: "right", duration: 0.5, ease: "power2.out" },
                "reveal");

        setTimeout(() => {
            setActiveIndex(index);
        }, 450);
    };

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            {isWideScreen ? (
                <section ref={tabSliderRef} className={`${style.tabSlider} tabSlider tabSliderFullWidth bg-gray no-padding top-0 left-0 z-[8] block ${data?.classes} ${data?.padding.join(' ')}`} id={data?.id}>
                    <div className="wrapper flex w-full">
                        <div className="tabListOuter relative z-10 flex flex-col justify-between w-1/2 lg-up:pb-[7.4rem] bg-gray containerPadding pt-[7.5%] xxl-up:pt-[118px]">
                            <div className="title mb-[3rem]">
                                <h3>{data.title}</h3>
                            </div>
                            <div className="tabList">
                                <ul className={`pl-0`}>
                                    {data.items.map((item, i) => {
                                        return (
                                            <li key={i} data-cursor-expand="true" className={`${style.tabLink} ${i === activeIndex ? style.active : ''} pt-[4rem] relative pb-[4.2rem] h4 border-b`}
                                                onClick={() => tabClickHandler(i)}>
                                                <span className={`${style.tabLinkDoodle} absolute left-0 top-0 font-normal font-permanent-marker`}>{item.subhead}</span>
                                                {item.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="tabContentOuter overflow-x-hidden relative w-1/2">
                            <div ref={coverRef} className={`${style.pinkCover} absolute`} style={{
                                visibility: showPinkCover ? 'visible' : 'hidden', // Show/hide based on state
                                opacity: showPinkCover ? 1 : 0 // Optional: Fade in/out instead of visibility
                            }}></div>
                            {data.items.map((item, i) => {
                                return (
                                    <div key={i} className={`tabContent ${style.tabContent} ${i === activeIndex ? style.activeContent : ''} absolute top-0 right-0 w-full h-full transition-transform duration-500 ease-linear lg-up:pl-[10.5rem] lg-up:pb-[3.4rem] containerPadding pt-[15%] xxl-up:pt-[118px]`}>
                                        {item.image && (item.image.mediaItemUrl) &&
                                            <div className="bg-img dark__overlay !z-[0]">
                                                <Image
                                                    src={item.image.mediaItemUrl}
                                                    width={800}
                                                    height={1090}
                                                    className="w-full h-full object-cover"
                                                    alt={item.image.altText}
                                                />
                                            </div>
                                        }
                                        <div className={`descriptionWrapper translate-x-[-80px] opacity-0 relative w-full h-full z-[1] text-white flex flex-col justify-between`}>
                                            <div className="description mb-[0.1rem]">
                                                <h5 className={`mb-[2rem]`}>{item.subtitle}</h5>
                                                <h5 className={`leading-[1.5] font-normal line-clamp-3`}>{item.bodyWithoutEditor}</h5>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: item.body }} />
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div>
                    </div>
                </section>
            ) : (
                <section className={`tabSlider bg-gray !min-h-[unset] ${data?.classes}`}>
                    <div className="container !min-h-[unset]">
                        <div className="intro">
                            <h3>{data.title}</h3>
                        </div>
                        <div className="accordionWrap">
                            {accordionItems.map((item, index) => (
                                <div data-cursor-expand="true" data-cursor-icon={activeIndex === index ? "iconMinus" : "iconPlus"} key={index} className={`accordion-item relative ${activeIndex === index ? "" : "border-b border-black"}`} onClick={() => toggleAccordion(index)}>
                                    <div
                                        className={`${style.accordionHeader} relative accordion-header ${activeIndex === index ? `${style.active} active` : ''} pt-[4rem] pb-[3.8rem] pr-[8rem] max-w-[123.9rem]`}
                                    >
                                        <h4 className='pointer-events-none'>{item.title}</h4>
                                    </div>
                                    <div
                                        className={`accordioncontent relative max-w-[123.9rem] overflow-y-clip overflow-visible transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-[250rem] open' : 'max-h-0'
                                            } ${style.accordioncontent}`}
                                    >
                                        {item.bgimage &&
                                            <div className="bg-img dark__overlay !z-[0] !w-[calc(100%+3.2rem)] !left-[-1.6rem]">
                                                <Image
                                                    src={item.bgimage}
                                                    width={800}
                                                    height={1090}
                                                    className="w-full h-full object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        }
                                        <div className="tabContent w-full relative overflow-hidden pt-[4.1rem] pl-[0.2rem] pb-[6rem]">
                                            <div className="description text-white relative">
                                                <h5 className={`mb-[1.5rem]`}>{item.subTitle}</h5>
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

export default TabWithSlider;