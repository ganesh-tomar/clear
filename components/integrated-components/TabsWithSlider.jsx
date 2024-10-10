import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';
import style from '../../components/styles/tabSlider.module.css';
gsap.registerPlugin(ScrollTrigger);
const TabWithSlider = (data) => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [showPinkCover, setShowPinkCover] = useState(false);
    const [activeIndex, setActiveIndex] = useState('');
    const coverRef = useRef(null);

    // const accordionItems = [
    //     {
    //         title: 'Strategic Branding & Positioning',
    //         subTitle: 'Solidify Your Foundation',
    //         desc: 'Our strategic branding & positioning services set the stage for success.',
    //         bgimage: '/snowmangray.png',
    //         links: [
    //             {
    //                 label: "Brand Strategy",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Brand Messaging",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Visual Identity",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Data & Metrics Analysis",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "User Research",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             }
    //         ]
    //     },
    //     {
    //         title: 'Digital Experiences & Creative',
    //         subTitle: 'Solidify Your Foundation',
    //         desc: 'Our strategic branding & positioning services set the stage for success.',
    //         bgimage: '/snowmangray.png',
    //         links: [
    //             {
    //                 label: "Web Experiences",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "UX/UI Design",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Creative & Content Services",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Motion Graphics & Videos",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Campaigns & Marketing",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             }
    //         ]
    //     },
    //     {
    //         title: 'Technology Infrastructure & Support',
    //         subTitle: 'Solidify Your Foundation',
    //         desc: 'Our strategic branding & positioning services set the stage for success.',
    //         bgimage: '/snowmangray.png',
    //         links: [
    //             {
    //                 label: "Brand Strategy",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Brand Messaging",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Visual Identity",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "Data & Metrics Analysis",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             },
    //             {
    //                 label: "User Research",
    //                 url: "#",
    //                 className: "tertiary-btn"
    //             }
    //         ]
    //     },
    // ];

    useEffect(() => {
        const handleResize = () => {
            setTimeout(() => {
                setIsWideScreen(window.innerWidth > 991);
            }, 1000);
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
                    // tabSlider.style.minHeight = `${appliedHeight}px`;
                } else {
                    if (tabWrapper) {
                        tabWrapper.removeAttribute('style');
                        tabSlider.removeAttribute('style');
                    }
                }
            }
            if (!isHomePage) {
                const tabsDescription = document.querySelectorAll('.tabSlider .tabContent .descriptionWrapper');
                tabsDescription.forEach(element => {
                    element.classList.add('animation-fadeInLeft');
                });
            }
            setActiveIndex(0)
        }, 1500);


        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', handleScroll);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    useGSAP(() => {
        let getRatio = (el) =>
            window.innerHeight / (window.innerHeight + el.offsetHeight);
        gsap.utils.toArray(`.tabSlider .tabContent.${style.activeContent} .bg-img`).forEach((content) => {
            const section = content.closest("section");

            if (section) {
                gsap.fromTo(
                    content,
                    {
                        y: () => (section ? -window.innerHeight * getRatio(content) : 0),
                    },
                    {
                        y: () => window.innerHeight * (1 - getRatio(content)),
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: () => (section ? "top bottom" : "top top"),
                            end: "bottom top",
                            scrub: true,
                            invalidateOnRefresh: true, // to make it responsive
                        },
                    }
                );
            }
        });
    }, [activeIndex]);

    // useGSAP(() => {
    //     const timer = setTimeout(() => {
    //         if (isHomePage && window.innerWidth > 991) {
    //             const headHeight = document.querySelector('header')?.offsetHeight || 0;
    //             const tabsDescription = document.querySelectorAll('.tabSlider .tabContent .descriptionWrapper');
    //             let allowScroll = true; // sometimes we want to ignore scroll-related stuff, like when an Observer-based section is transitioning.
    //             let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
    //             let currentIndex = 0;
    //             let swipePanels = gsap.utils.toArray(".swipe-section .panel");
    //             // set z-index levels for the swipe panels

    //             gsap.set(swipePanels, { zIndex: i => swipePanels.length - i })

    //             // create an observer and disable it to start
    //             let intentObserver = ScrollTrigger.observe({
    //                 type: "wheel,touch,pointer,scroll",
    //                 onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
    //                 onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
    //                 tolerance: 100,
    //                 preventDefault: true,
    //                 onEnable(self) {
    //                     allowScroll = false;
    //                     scrollTimeout.restart(true);
    //                     // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
    //                     let savedScroll = self.scrollY();
    //                     self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
    //                     document.addEventListener("scroll", self._restoreScroll, { passive: false });
    //                 },
    //                 onDisable: self => document.removeEventListener("scroll", self._restoreScroll)
    //             });
    //             intentObserver.disable();

    //             // handle the panel swipe animations
    //             function gotoPanel(index, isScrollingDown) {
    //                 // return to normal scroll if we're at the end or back up to the start
    //                 if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
    //                     intentObserver.disable(); // resume native scroll
    //                     return;
    //                 }
    //                 allowScroll = false;
    //                 scrollTimeout.restart(true);

    //                 let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];

    //                 gsap.to(target, {
    //                     yPercent: isScrollingDown ? -100 : 0,
    //                     duration: 0.75
    //                 });
    //                 animateCover()
    //                 currentIndex = index;
    //                 setActiveIndex(currentIndex)
    //             }
    //             tabsDescription.forEach(element => {
    //                 element.classList.add('animation-fadeInLeft');
    //             });

    //             // pin swipe section and initiate observer
    //             ScrollTrigger.create({
    //                 trigger: ".swipe-section",
    //                 pin: true,
    //                 start: `top ${headHeight}`,
    //                 end: "+=200", // just needs to be enough to not risk vibration where a user's fast-scroll shoots way past the end
    //                 onEnter: (self) => {
    //                     if (intentObserver.isEnabled) { return } // in case the native scroll jumped past the end and then we force it back to where it should be.
    //                     self.scroll(self.start + 1); // jump to just one pixel past the start of this section so we can hold there.
    //                     intentObserver.enable(); // STOP native scrolling
    //                 },
    //                 onEnterBack: (self) => {
    //                     if (intentObserver.isEnabled) { return } // in case the native scroll jumped backward past the start and then we force it back to where it should be.
    //                     self.scroll(self.end - 1); // jump to one pixel before the end of this section so we can hold there.
    //                     intentObserver.enable(); // STOP native scrolling
    //                 }
    //             });
    //         }
    //     }, 1500);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // })

    const handleScroll = () => {
        const tabSlider = document.querySelector('section.tabSlider');
        if (tabSlider && window.innerWidth > 991) {
            const screenHeight = window.innerHeight;
            const headHeight = document.querySelector('header')?.offsetHeight || 0;
            const tabSliderTop = tabSlider.getBoundingClientRect().top + window.scrollY; // Absolute top position of tabSlider
            const tabTop = tabSlider.getBoundingClientRect().top;
            const reqScreenHeight = (screenHeight - headHeight) / 2;
            const scrollPosition = window.scrollY + headHeight;
            const checkPoint1 = tabSliderTop;
            const checkPoint2 = checkPoint1 + reqScreenHeight - 100;
            const checkPoint3 = checkPoint2 + reqScreenHeight - 100;
            const tabs = document.querySelectorAll('.tabList ul li');
            const tabsDesciption = document.querySelectorAll('.tabSlider .tabContent .descriptionWrapper');
            if (tabTop < (screenHeight / 3)) {
                tabsDesciption.forEach(element => {
                    element.classList.add('animation-fadeInLeft')
                });
            }
        }
    };

    const animateCover = () => {
        setShowPinkCover(true);

        const tl = gsap.timeline();

        tl.fromTo(coverRef.current,
            { scaleX: 0, x: "0%", transformOrigin: "left" }, // Start from the left
            {
                scaleX: 1.2, // Scale to slightly larger than full width
                x: "0%", // Keep the x position at 0 during scaling
                duration: 0.5, // Duration of the first part of the animation
                ease: "power1.out" // Smooth ease function
            }
        ).to(coverRef.current,
            {
                scaleX: 0, // Maintain the scale
                x: "100%", // Move to the right
                duration: 0.5, // Duration of the second part of the animation
                ease: "power1.in", // Smooth ease function
                onComplete: () => setShowPinkCover(false) // Hide the cover after animation (optional)
            },
            "-=0.2.5" // Slight overlap with the previous animation for smooth transition
        );
    }

    const tabClickHandler = (index) => {
        if (index === activeIndex) {
            return;
        }

        animateCover()

        setTimeout(() => {
            setActiveIndex(index);
        }, 270);
    };
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            {isWideScreen ? (
                <section className={`${style.tabSlider} tabSlider tabSliderFullWidth bg-gray no-padding top-0 left-0 z-[8] block ${data.classes} ${data?.padding.join(' ')}`} id={data.id}>
                    <div className="wrapper flex w-full">
                        <div className="tabListOuter relative z-10 flex flex-col justify-between w-1/2 bg-gray containerPadding py-[7.5%] xxl-up:py-[7rem]">
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
                                                <span className={`${style.tabLinkArrow} relative inline-block w-fit`}>{item.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="tabContentOuter overflow-x-hidden dark__overlay relative w-1/2">
                            <div ref={coverRef} className={`${style.pinkCover} absolute`} style={{
                                visibility: showPinkCover ? 'visible' : 'hidden', // Show/hide based on state
                                opacity: showPinkCover ? 1 : 0 // Optional: Fade in/out instead of visibility
                            }}></div>
                            {data.items.map((item, i) => {
                                return (
                                    <div key={i} className={`tabContent ${style.tabContent} ${i === activeIndex ? style.activeContent : ''} absolute top-0 right-0 w-full h-full transition-transform duration-500 ease-linear containerPadding overflow-hidden py-[15%] xxl-up:py-[7rem]`}>
                                        {item.image && (item.image.mediaItemUrl) &&
                                            <div className="bg-img !h-[117%] !z-[0]">
                                                <Image
                                                    src={item.image.mediaItemUrl}
                                                    width={800}
                                                    height={1090}
                                                    className="w-full h-full object-cover"
                                                    alt={item.image.altText}
                                                    loading='eager'
                                                />
                                            </div>
                                        }
                                        <div className={`descriptionWrapper translate-x-[-80px] opacity-0 relative w-full h-full z-[1] text-white flex flex-col justify-between`}>
                                            <div className="description mb-[0.1rem]">
                                                <h5 className={`mb-[2rem]`}>{item.subtitle}</h5>
                                                <h5 className={`leading-[1.5] subtitle font-normal line-clamp-3`}>{item.bodyWithoutEditor}</h5>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: item.body }} />
                                        </div>
                                    </div>
                                );
                            })}
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
                            {data?.items.map((item, index) => (
                                <div data-cursor-expand="true" data-cursor-icon={activeIndex === index ? "iconMinus" : "iconPlus"} key={index} className={`accordion-item relative  ${activeIndex === index ? "" : "border-b border-black"}`} onClick={() => toggleAccordion(index)}>
                                    <div className={`${style.accordionHeader} relative accordion-header ${activeIndex === index ? `${style.active} active` : ''} pt-[4rem] pb-[3.8rem] pr-[8rem] max-w-[123.9rem]`}>
                                        <h4 className='pointer-events-none'>{item.title}</h4>
                                    </div>
                                    <div className={`accordioncontent relative max-w-[123.9rem] overflow-y-clip overflow-visible transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-[250rem] open' : 'max-h-0 invisible'} ${style.accordioncontent}`}>
                                        {item.image &&
                                            <div className="bg-img dark__overlay !z-[0] !w-[calc(100%+3.2rem)] !left-[-1.6rem]">
                                                <Image
                                                    src={item.image.mediaItemUrl}
                                                    width={800}
                                                    height={1090}
                                                    className="w-full h-full object-cover"
                                                    alt={item.image.altText}
                                                />
                                            </div>
                                        }
                                        <div className="tabContent w-full relative overflow-hidden pt-[4.1rem] pl-[0.2rem] pb-[6rem]">
                                            <div className="description text-white relative">
                                                <h5 className={`mb-[1.5rem]`}>{item?.subtitle}</h5>
                                                <p className={`text-[20px]`}>{item?.bodyWithoutEditor}</p>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: item?.body }} />
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