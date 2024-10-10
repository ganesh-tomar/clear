import React, { useState, useEffect } from "react";
import StickyStyle from "../components/styles/sticky.module.css";
import Link from 'next/link'

function Sticky() {
    const stickyData = [
        {
            id: "1",
            title: "Overview",
            url: "overview",
        },
        {
            id: "2",
            title: "Our process",
            url: "our-process",
        },
        {
            id: "3",
            title: "Case studies",
            url: "case-studies",
        },
        {
            id: "4",
            title: "Related services",
            url: "related-services",
        },
        {
            id: "5",
            title: "Resources",
            url: "resources",
        },
    ];

    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, setWinWidth] = useState(0);
    const [scrollValue, setScrollValue] = useState(0);

    const handleScroll = () => {
        const stickyHeight = document.querySelector("#stickyNav .stickyOuter")?.offsetHeight;
        const headerHeight = document.querySelector("header")?.offsetHeight;
        const element = document.querySelector('.footer-clear-digital');
        const footer = element.getBoundingClientRect();
        setScrollValue(headerHeight);
        const distanceFromTop = footer.top;
        if (stickyHeight && headerHeight) {
            const totalHeight = stickyHeight + headerHeight;
            if (distanceFromTop < totalHeight) {
                setScrollValue(-100);
            } else {
                setScrollValue(headerHeight);
            }
        }
    };

    const Stickytop = {
        top: `${scrollValue - 2}px`,
        borderTop: `1px solid black`
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSubMenu = (event) => {
        const parentListItem = event.target.closest('li');
        if (parentListItem) {
            const parentList = parentListItem.parentNode;
            const hasOpenSiblings = parentList.querySelectorAll(':scope > li a');
            for (let i of hasOpenSiblings) {
                const sibling = i;
                if (sibling !== parentListItem) {
                    sibling.classList.remove(StickyStyle.activated);
                }
            }
        }
        event.target.classList.add(StickyStyle.activated);
    };

    const handleStickyClick = (e, id) => {
        const x = document.querySelectorAll("section");
        const yOffset = window.scrollY;
        e.preventDefault();
        const stickyHeight =
            document.getElementById("stickyNav")?.offsetHeight || 0;

        x.forEach((item) => {
            const attr = item.getAttribute("id");
            const scrollPosition =
                yOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            if (attr === id) {
                const topp = item.getBoundingClientRect().top;
                const d = scrollPosition + topp - 104 - stickyHeight;
                window.scrollTo({
                    top: d,
                    behavior: "smooth",
                });
            }
        });
    };

    const handleIntersection = (entries) => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting || entry.intersectionRatio > 0)
            .map(entry => entry.target.id);

        const filteredSections = visibleSections.filter(sectionId => {
            const sectionElement = document.getElementById(sectionId);

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
            setWinWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            {winWidth > 991 ? (
                <section
                    className={`${StickyStyle.mainSticky} block sticky py-0 z-[9] bg-white transition-all duration-300 shadow-bottom-white-shadow `}
                    style={Stickytop}
                    id={"stickyNav"}
                >
                    <div className={`w-full stickyOuter border-b border-darkGray  z-[10] bg-white`}>
                        <div className="container h-full">
                            <ul className="flex relative sm:justify-between h-full">
                                {stickyData.map((data, index) => {
                                    return (
                                        <li
                                            key={data.id}
                                            datatype={data.id}
                                            className="mr-[5.5rem] h-full flex items-start sm:px-1 xl-up:text-[1.6rem] font-bold  relative tablet-mid:pr-[1rem]"
                                            onClick={toggleSubMenu}
                                        >
                                            <Link
                                                href={`/${data.url}`}
                                                aria-label={`Navigate to ${data.title}`}
                                                className={`text-black inline-block py-[2rem] ${visibleSections[0] === data.url
                                                    ? `${StickyStyle.activated} activated`
                                                    : ""
                                                    }transition-all hover:text-pink ease-in-out`}
                                                onClick={(e) =>
                                                    handleStickyClick(e, data.url, index, data.url, 50)
                                                }
                                            >
                                                {data.title}
                                            </Link>
                                        </li>
                                    );
                                })}
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

