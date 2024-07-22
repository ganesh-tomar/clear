import { useGSAP } from '@gsap/react'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import style from '../components/styles/tabSlider.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Demo() {
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [showPinkCover, setShowPinkCover] = useState(false);
    const coverRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const data = {
        items: [
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
        ]
    }
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const headHeight = document.querySelector('header')?.offsetHeight || 0;
        let allowScroll = true; // sometimes we want to ignore scroll-related stuff, like when an Observer-based section is transitioning.
        let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
        let currentIndex = 0;
        let swipePanels = gsap.utils.toArray(".swipe-section .panel");

        // set z-index levels for the swipe panels
        gsap.set(swipePanels, { zIndex: i => swipePanels.length - i })

        // create an observer and disable it to start
        let intentObserver = ScrollTrigger.observe({
            type: "wheel,touch,pointer,scroll",
            onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
            onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
            tolerance: 100,
            preventDefault: true,
            onEnable(self) {
                allowScroll = false;
                scrollTimeout.restart(true);
                // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
                let savedScroll = self.scrollY();
                self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
                document.addEventListener("scroll", self._restoreScroll, { passive: false });
            },
            onDisable: self => document.removeEventListener("scroll", self._restoreScroll)
        });
        intentObserver.disable();

        // handle the panel swipe animations
        function gotoPanel(index, isScrollingDown) {
            // return to normal scroll if we're at the end or back up to the start
            if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
                intentObserver.disable(); // resume native scroll
                return;
            }
            allowScroll = false;
            scrollTimeout.restart(true);

            let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];

            gsap.to(target, {
                yPercent: isScrollingDown ? -100 : 0,
                duration: 0.75
            });
            animateCover()
            currentIndex = index;
            setActiveIndex(currentIndex)
        }

        // pin swipe section and initiate observer
        ScrollTrigger.create({
            trigger: ".swipe-section",
            pin: true,
            start: `top ${headHeight}`,
            end: "+=200", // just needs to be enough to not risk vibration where a user's fast-scroll shoots way past the end
            onEnter: (self) => {
                if (intentObserver.isEnabled) { return } // in case the native scroll jumped past the end and then we force it back to where it should be.
                self.scroll(self.start + 1); // jump to just one pixel past the start of this section so we can hold there.
                intentObserver.enable(); // STOP native scrolling
            },
            onEnterBack: (self) => {
                if (intentObserver.isEnabled) { return } // in case the native scroll jumped backward past the start and then we force it back to where it should be.
                self.scroll(self.end - 1); // jump to one pixel before the end of this section so we can hold there.
                intentObserver.enable(); // STOP native scrolling
            }
        });

    })

    const animateCover = () => {
        setShowPinkCover(true);
        const tl = gsap.timeline();

        tl.fromTo(coverRef.current,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, transformOrigin: "left", duration: 0.5, ease: "power2.in" })
            .to(coverRef.current,
                { scaleX: 0, transformOrigin: "right", duration: 0.5, ease: "power2.out" },
                "reveal");
    }

    const tabClickHandler = (index) => {
        if (index === activeIndex) {
            return;
        }

        animateCover()

        setTimeout(() => {
            setActiveIndex(index);
        }, 450);
    };
    return (
        <>
            <div class="swipe-section">
                <section className={`${style.tabSlider} tabSlider h-[calc(100vh-11rem)] bg-gray no-padding absolute top-0 left-0`}>
                    <div className="wrapper flex h-full w-full">
                        <div className="tabListOuter relative z-10 flex flex-col justify-between w-1/2 lg-up:pb-[7.4rem] bg-gray containerPadding pt-[7.5%] xxl-up:pt-[118px]">
                            <div className="title mb-[3rem]">
                                <h3>Title</h3>
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
                                        <div className="bg-img dark__overlay !z-[0]">
                                            <Image
                                                src={'/tab_content_a.png'}
                                                width={800}
                                                height={1090}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </div>
                                        <div className={`descriptionWrapper relative w-full h-full z-[1] text-white flex flex-col justify-between`}>
                                            <div className="description mb-[0.1rem]">
                                                <h4 className={`mb-[3rem] font-normal`}>Solidify Your Foundation</h4>
                                                <h5 className={`leading-[1.5] font-normal`}>Our strategic branding & positioning services set the stage for success.</h5>
                                            </div>
                                            <ul className={`pl-0`}>
                                                <li className={`py-[5rem] border-gray border-b`}><a href="#" className='tertiary-btn'>{activeIndex}Brand Strategy</a></li>
                                                <li className={`py-[5rem] border-gray border-b`}><a href="#" className='tertiary-btn'>Brand Messaging</a></li>
                                                <li className={`py-[5rem] border-gray border-b`}><a href="#" className='tertiary-btn'>Visual Identity</a></li>
                                                <li className={`py-[5rem] border-gray border-b`}><a href="#" className='tertiary-btn'>Data & Metrics Analysis</a></li>
                                                <li className={`py-[5rem] border-gray border-b`}><a href="#" className='tertiary-btn'>User Research</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div>
                    </div>
                </section>
                <section class="panel bg-red-500">
                    ScrollTrigger.observe() section
                </section>
                <section class="panel bg-purple-400">
                    SWIPE SECTION 2
                </section>
                <section class="panel bg-orange-400">
                    Last swipe section... continue scrolling
                </section>
            </div>
        </>
    )
}
