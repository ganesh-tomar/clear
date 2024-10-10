import React, { useState, useEffect } from "react";
import StickyStyle from "../../components/styles/sticky.module.css";
import Link from 'next/link'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
function Sticky(data) {
    const [isSticky, setIsSticky] = useState(false);
    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, isWinWidth] = useState(0);




    useEffect(() => {
        const timer = setTimeout(() => {
            const header = document.querySelector('header');
            const sectionElement = document.querySelector('.sticky');
            const footer = document.querySelector('.footer-clear-digital');

            if (header && sectionElement && footer) {
                const headerHeight = header.offsetHeight - 1;
                const stickyHeight = sectionElement.offsetHeight;
                const totalHeight = headerHeight + stickyHeight;

                // Create a timeline to handle the scrolling behavior
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: footer,
                        start: `top top+=${headerHeight}`,
                        end: `top+=${stickyHeight} top`,
                        scrub: true,
                        markers: false,
                    },
                });

                // Pin the sticky section
                gsap.to(sectionElement, {
                    scrollTrigger: {
                        trigger: sectionElement,
                        start: `top ${headerHeight}px`,
                        endTrigger: footer,
                        end: `top ${headerHeight + stickyHeight}px`,
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                        markers: false, // Set to true to enable debugging
                    },
                });

                // Scroll both header and sticky section up together
                timeline
                    .to(header, { y: -headerHeight, duration: 1 }, 0)
                    .to(sectionElement, { y: -stickyHeight, duration: 1 }, 0);

            }
        }, 500);
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            clearTimeout(timer);
        };
    }, [winWidth]);

    const toggleSubMenu = (event) => {
        const parentListItem = event.target.closest('li');
        if (parentListItem) {
            const parentList = parentListItem.parentNode;
            const hasOpenSiblings = parentList.querySelectorAll(':scope > li a');
            for (let i = 0; i < hasOpenSiblings.length; i++) {
                const sibling = hasOpenSiblings[i];
                if (sibling !== parentListItem) {
                    sibling.classList.remove(StickyStyle.activated);
                }
            }
        }
        event.target.classList.add(StickyStyle.activated);
    };
    const handleStickyClick = (e, id) => {
        e.preventDefault();

        const sections = document.querySelectorAll("section");
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        const stickyNavHeight = document.querySelector(".stickyOuter")?.offsetHeight || 0;

        sections.forEach((item) => {
            const attr = item.getAttribute("id");
            if (attr === id) {
                const scrollPosition =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0;

                const sectionTop = item.getBoundingClientRect().top;
                const targetPosition = scrollPosition + sectionTop - (headerHeight + stickyNavHeight);

                gsap.to(window, {
                    scrollTo: {
                        y: targetPosition,
                        autoKill: false, // prevent interruption of the animation by user scroll
                    },
                    duration: 1, // adjust the duration to your preference
                    ease: "power2.inOut", // choose an easing function that you like
                });
            }
        });
    };

    const handleIntersection = (entries) => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting || entry.intersectionRatio > 0)
            .map(entry => entry.target.id);

        const windowHeight = window.innerHeight;

        const filteredSections = visibleSections.filter(sectionId => {
            const sectionElement = document.getElementById(sectionId);

            // Check if the element is found before accessing its properties
            if (sectionElement) {
                const sectionBottom = sectionElement.getBoundingClientRect().bottom;

                return sectionBottom - 200 > 0;
            }

            return false;
        });

        setVisibleSections(filteredSections);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });

        const sectionElements = document.querySelectorAll("section:not(.sticky");

        sectionElements.forEach((sectionElement) => {
            observer.observe(sectionElement);
        });

        return () => {
            observer.disconnect();
        };
    }, [visibleSections]);

    useEffect(() => {
        const handleResize = () => {
            isWinWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    let sectionPadding = '';
    data.padding.map(item => {
        sectionPadding += ' ' + item;
    });

    return (
        <>
            {winWidth > 991 ? (
                <section
                    className={`${data.classes} ${sectionPadding} ${StickyStyle.mainSticky} block sticky py-0 z-[9] shadow-bottom-white-shadow`}
                    id={data.id}
                >
                    <div className={`w-full stickyOuter border-b border-darkGray z-[10] bg-white`}>
                        <div className="container h-full">
                            <ul className="flex relative sm:justify-between h-full">
                                {data?.items && data?.items.map((item, index) => (
                                    <li
                                        key={index}
                                        datatype={item.id}
                                        className="mr-[5.5rem] h-full flex items-start sm:px-1 xl-up:text-[1.6rem] font-bold relative tablet-mid:pr-[1rem]"
                                        onClick={toggleSubMenu}
                                    >
                                        <Link
                                            href={`#${item.sectionId}`}
                                            aria-label={`Navigate to ${item.text}`}
                                            className={`text-black inline-block py-[2rem] ${visibleSections[0] === item.sectionId
                                                ? `${StickyStyle.activated} activated`
                                                : ""
                                                } transition-all hover:text-pink ease-in-out`}
                                            onClick={(e) =>
                                                handleStickyClick(e, item.sectionId, index, item.sectionId, 50)
                                            }
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
            <style jsx>
                {
                    `
                    .activated{
                        color:#FF3B84;
                    }
                    `
                }
            </style>
        </>
    );
};

export default Sticky;

