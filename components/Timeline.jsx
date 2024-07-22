// import React, { useEffect, useRef } from "react";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import style from "../components/styles/timeline.module.css"
import { reverse } from "lodash";
// import HongoStyle from "/style/hongo.module.scss";

const data = [
    {
        id: 1,
        img: '/valod.png',
        nuraric: '1999',
        heading: 'It all starts',
        prenormaltxt: 'here',
        para: 'Steve Ohanians and Valod Amirkhanian launch the agency from Valod’s bedroom while they’re both in college.',
        firework: true,
        arrow: true,
    },
    {
        id: 2,
        img: '/section/Timeline/steve.webp',
        nuraric: '2000',
        heading: 'Client list hits double digits',
        para: 'Less than one year in and we’re already building up an impressive list of early innovators and web pioneers.',
        reverse: true,
        bulb: true,
    },
    {
        id: 3,
        img: '/section/Timeline/first-office.webp',
        nuraric: '2001',
        heading: 'First office opens',
        para: 'To accommodate our growing business, we open our first physical office at 940 Saratoga Ave., San Jose, CA.',
        arrowfine: true,
        super: true,
    },
    {
        id: 4,
        img: '/section/Timeline/steve.webp',
        nuraric: '2001',
        heading: 'Our B2B debut',
        para: 'We make our first foray into the B2B tech space, working with ViVOtech, Lightbit Technologies, and MosChip Semiconductor.',
        arrowfine: true,
        reverse: true,
        super: true,
    },
    {
        id: 5,
        img: '/danny.png',
        nuraric: '2001',
        heading: 'Our first hire!',
        para: 'As our client list (and our business) continues to grow, we start to build out our team with our first new hire.',
        arrowfine: true,
        super: true,
    },
    {
        id: 6,
        img: '/section/Timeline/steve.webp',
        nuraric: '2004',
        heading: 'Our first conference room',
        para: 'In support of our collaborative approach, we move to 777 N First, San Jose—our first office with a conference room.',
        arrowfine: true,
        reverse: true,
        super: true,
    },
    {
        id: 7,
        img: '/danny.png',
        nuraric: '2007',
        heading: 'Client list tops 100',
        para: 'We’re excited to expand our client list into triple digits, serving B2B tech leaders and top brands across key verticals.',
        arrowfine: true,
        super: true,
    },
    {
        id: 8,
        img: '/section/Timeline/steve.webp',
        nuraric: '2008',
        heading: 'Our headcount hits 15!',
        para: 'We expand our team of passionate creatives, developers, and project managers to keep up with our growing client base.',
        arrowfine: true,
        reverse: true,
        super: true,
    },
    {
        id: 9,
        img: '/section/Timeline/award.webp',
        nuraric: '2010',
        heading: 'We win our first Addy statue',
        para: 'We’re honored to have our work recognized by our peers with our very first American Advertising Federation (ADDY) award.',
        arrowfine: true,
        super: true,
    },
    {
        id: 10,
        img: '/section/Timeline/cheers.webp',
        nuraric: '2014',
        heading: 'Cheers to 15 years!',
        para: "So much to celebrate—over 100 awards, 900,000 web pages, 4B pixels and counting. That's why we’re partying like it’s 1999.",
        arrowfine: true,
        reverse: true,
        super: true,
    },
    {
        id: 11,
        img: '/section/Timeline/san-jose-film.webp',
        nuraric: '2014',
        heading: 'Partnering for art',
        para: 'We are honored when the San Jose International Short Film Festival invites us to design their poster.',
        arrowfine: true,
        super: true,
    },
    {
        id: 12,
        img: '/section/Timeline/pc-with-dog.webp',
        nuraric: '2016',
        heading: 'Expanding our reach with remote work',
        para: 'To keep up with demand and expand our talent pool, we hire our first remote worker—ahead of the curve, as usual.',
        arrowfine: true,
        reverse: true,
        super: true,
    },
    {
        id: 13,
        img: '/section/Timeline/meeting-room.webp',
        nuraric: '2017',
        heading: 'Move to our current digs',
        para: 'In keeping with our Silicon Valley spirit, we move to 1570 The Alameda, Suite 330—in the heart of San Jose.',
        arrowfine: true,
        super: true,
    },
    {
        id: 14,
        img: '/section/Timeline/intern.webp',
        nuraric: '2018',
        heading: 'Bring in the interns',
        para: 'We begin mentoring young designers, developers, and project managers with four-month paid internship opportunities.',
        arrowfine: true,
        reverse: true,
        super: true,
    },
    {
        id: 15,
        img: '/section/Timeline/club-launch.webp',
        nuraric: '2018',
        heading: 'Book club launch',
        para: 'Storytelling is at the heart of what we do—so we’re sharing the joy of reading through the Clear Digital Book Club.',
        arrowfine: true,
        super: true,
    },
    {
        id: 16,
        img: '/section/Timeline/summit.webp',
        nuraric: '2021',
        heading: 'First-ever Forward Summit',
        para: 'Bringing together partners and team members from around the world to uncover new ideas, address challenges, and build relationships.',
        arrowfine: true,
        super: true,
        reverse: true,
    },
    {
        id: 17,
        img: '/section/Timeline/inc-5000-logo.webp',
        nuraric: '2021',
        heading: 'We make the Inc. 5000 list',
        para: 'Clear Digital ranks on the Inc. 5000 list of the fastest-growing private companies for 2021.',
        arrowfine: true,
        super: true,
    },
    {
        id: 18,
        img: '/section/Timeline/myrious-logo.webp',
        nuraric: '2022',
        heading: 'Founding Partner at Myrious Group',
        para: 'We proudly partner with other agencies to help brands unlock their potential through the power of orchestration.',
        arrowfine: true,
        super: true,
        reverse: true,
    },
    {
        id: 19,
        img: '/section/Timeline/clear-digital-logo.webp',
        nuraric: '2023',
        heading: 'Rebrand to Clear Digital',
        para: 'Looking to the future while acknowledging our growth, innovation, and evolution to date, we’re proud to rebrand as Clear Digital.',
        arrowfine: true,
        super: true,
    },
    {
        id: 20,
        img: '/section/Timeline/forward-summit.webp',
        nuraric: '2023',
        heading: 'Forward Summit—in person',
        para: 'Bringing together the best minds in the business, we host our first live summit to talk shop, identify trends, and find solutions.',
        arrowfine: true,
        super: true,
        reverse: true,
    },
    {
        id: 21,
        img: '/danny.png',
        nuraric: '2024',
        heading: 'Clear Digital turns 25!',
        para: 'We’re looking back at how much we’ve learned, grown, and achieved since we started—and looking forward to the future with excitement. ',
        arrowfine: true,
        super: true,
    },
];

export default function ScrollDownColTwo() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [circleColor, setCircleColor] = useState("#000");
    const [firstLineActive, setfirstLineActive] = useState(false)
    const prevSegmentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const circles = document.querySelectorAll(`.${style.circle}`);
            const lines = document.querySelectorAll(`.${style.line}`);
            if (!circles.length) return;
            const threshold = window.innerHeight * 0.5;
            lines.forEach((segment, index) => {
                const { top } = segment.getBoundingClientRect();
                const circle = segment?.querySelector(`.${style.circle}`);
                if (top <= threshold) {
                    // Check if previous segment has the class
                    if (index > 0 && prevSegmentRef.current) {
                        const prevSegment = lines[index - 1];
                        if (prevSegment.classList.contains(style.active)) {
                            segment.classList.add(style.active);
                            setTimeout(() => {
                                circle?.classList.add(style.active);
                            }, 500);
                        }
                    } else {
                        segment.classList.add(style.active);
                        setTimeout(() => {
                            circle?.classList.add(style.active);
                        }, 500);
                    }
                    prevSegmentRef.current = segment;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const scrollHeightHandler = () => {
    //         const section = document.querySelector(".timeline");
    //         const sectionRect = section.getBoundingClientRect();
    //         const windowHeight = window.innerHeight;
    //         const scrollPercentage =
    //             ((windowHeight - sectionRect.top) / sectionRect.height) * 100;

    //         setScrollHeight(Math.min(scrollPercentage, 100));

    //         const scrollLineTwo = document.querySelector(".scroll_line_two");
    //         if (scrollLineTwo) {
    //             const scrollLineTwoRect = scrollLineTwo.getBoundingClientRect();
    //             const scrollLineTwoTop = scrollLineTwoRect.top;
    //             const scrollLineTwoBottom = scrollLineTwoRect.bottom;

    //             const circles = document.querySelectorAll(".circle");
    //             circles.forEach((circle) => {
    //                 const circleRect = circle.getBoundingClientRect();
    //                 const circleTop = circleRect.top;
    //                 const circleBottom = circleRect.bottom;

    //                 if (
    //                     circleBottom >= scrollLineTwoTop &&
    //                     circleTop <= scrollLineTwoBottom
    //                 ) {
    //                     circle.style.backgroundColor = "#FA198C";
    //                 } else {
    //                     circle.style.backgroundColor = "#000";
    //                 }
    //             });
    //         }
    //     };

    //     window.addEventListener("scroll", scrollHeightHandler);

    //     return () => {
    //         window.removeEventListener("scroll", scrollHeightHandler);
    //     };
    // }, []);

    return (
        <>
            <section
                className={`timeline grid__parallax dark pb-[30rem] `}
            >
                <div className={`container`}>
                    <div
                        className={`relative w-full lg:pl-[10rem] xs:pl-[5rem]  z-10 `}
                    >
                        <div className={`absolute top-0 left-[50%] translate-x-[-50%] w-[10rem] h-full tablet:right-[0] phablet:right-0 xs:w-[7rem] lg:left-[0] tablet:left-[5rem] phablet:left-[5rem] xs:left-[1rem] sm:translate-x-unset`}>
                            <div className="relative w-full h-full">
                                <div className="scroll_line_one absolute top-0 left-[50%] translate-x-[-50%] w-[1px] h-[calc(100%+15rem)] bg-gray-300 lg:left-auto tablet:right-[calc(6rem+3px)] phablet:right-[calc(6rem+3px)] phone:right-0 xs:right-[calc(3rem+3px)] lg:-translate-x-0 bg-black"></div>
                                <div
                                    className={`${style.line} ${style.lineOne} absolute top-0 left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    // style={{
                                    //     height: "13%", backgroundColor: "#FA198C",
                                    //     transition:
                                    //         scrollHeight === 100 ? "height 0.5s ease-in-out" : `none`,
                                    // }}
                                    id="lineOne"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                    <div
                                        className={`${style.circle} ${style.circleOne} circle circleOne absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:left-auto lg:right-[-9px] lg:translate-x-0`}
                                        // style={{ backgroundColor: circleColor }}
                                        id="circleOne"
                                    ></div>
                                </div>
                                <div
                                    className={`${style.line} ${style.lineTwo} absolute top-[13%] left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    // style={{
                                    //     height: "37%", backgroundColor: "#FA198C",
                                    //     transition:
                                    //         scrollHeight === 100 ? "height 0.5s ease-in-out" : `none`,
                                    // }}
                                    id="scroll_pink_line_two"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                    <div
                                        className={`${style.circle} ${style.circleTwo} circle circleTwo absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:left-auto lg:right-[-9px] lg:translate-x-0`}
                                        // style={{ backgroundColor: circleColor }}
                                        id="circleTwo"
                                    ></div>
                                </div>
                                <div
                                    className={`${style.line} ${style.lineThree} absolute top-[50%] left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    // style={{
                                    //     height: "36%", backgroundColor: "#FA198C",
                                    //     transition:
                                    //         scrollHeight === 100 ? "height 0.5s ease-in-out" : `none`,
                                    // }}
                                    id="scroll_pink_line_three"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                    <div
                                        className={`${style.circle} ${style.circleThree} circle circleThree absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:left-auto lg:right-[-9px] lg:translate-x-0`}
                                        // style={{ backgroundColor: circleColor }}
                                        id="circleThree"
                                    ></div>
                                </div>
                                <div
                                    className={`${style.line} ${style.lineFour} absolute top-[86%] left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    // style={{
                                    //     height: "22%", backgroundColor: "#FA198C",
                                    //     transition:
                                    //         scrollHeight === 100 ? "height 0.5s ease-in-out" : `none`,
                                    // }}
                                    id="scroll_pink_line_four"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                </div>
                            </div>
                        </div>
                        {/* <div
                            className={`scroll_line_two absolute top-0 left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[5rem] xs:right-[3rem] lg:-translate-x-0 `}
                            style={{
                                height:
                                    scrollHeight === 100
                                        ? "100%"
                                        : `calc(${scrollHeight}% - 200px)`,
                                backgroundColor: "#FA198C",
                                // transition: "none",
                                transition:
                                    scrollHeight === 100 ? "height 0.5s ease-in-out" : `none`,
                            }}
                        ></div> */}

                        {data.map((item, index) => (
                            <div className={`row relative w-full flex flex-wrap items-center ${index === data.length - 1 ? "" : "mb-[15rem] md:mb-[10rem]"} ${item.reverse === true ? "flex-row-reverse lg:justify-start" : "lg:justify-end"}`} key={index}>
                                {/* <div
                                    className="circle absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[2.4rem] h-[2.4rem] transition-all duration-100 rounded-[50%] bg-black lg:left-auto tablet:right-[calc(6rem-9px)] phablet:right-[calc(6rem-9px)] phone:right-[calc(5rem-9px)] xs:right-[calc(3rem-9px)] lg:translate-x-0 "
                                    style={{ backgroundColor: circleColor }}
                                ></div> */}

                                <div
                                    data-aos="slide-up"
                                    // data-aos-delay="400"
                                    data-aos-duration="300"
                                    className={`w-1/2 lg:w-[75%] xs:w-[80%] lg:pl-0 relative lg:pr-0 ${item.reverse === true ? "pl-[13.5rem]" : ""}`}>
                                    {item.firework ? <div className="firework absolute top-[-4.1rem] w-[12.5rem] h-[9.6rem] right-[20.5rem] z-[3] tablet:right-[7.5rem] phablet:right-[5rem] sm:right-[2rem] sm:w-[7.5rem] sm:h-[5.5rem] sm:top-[-3rem]">
                                        <Image src="/Firework.svg" alt="Firework" width={1000} height={1000} className="w-full h-full object-contain" />
                                    </div> : ''}
                                    <div className="image_wrap relative w-full max-w-[57rem] h-[54rem] text-[0] overflow-hidden lg:h-auto lg:mb-[5rem]">
                                        <Image src={item.img} width={1000} height={1000} alt="img" />
                                    </div>
                                </div>
                                <div
                                    data-aos="slide-up"
                                    // data-aos-delay="400"
                                    data-aos-duration="300"
                                    className="w-1/2 lg:w-[75%] xs:w-[80%] relative">
                                    {item.bulb ? <div className="img-wrap absolute left-[-4.3rem] top-[47%] w-[11.5rem] h-[12rem] lg:left-auto lg:right-0 tablet:w-[7.5rem] tablet:h-[8rem] tablet:top-[-10%] phablet:w-[7.5rem] phablet:h-[8rem] phablet:top-[-15%] sm:w-[5rem] sm:h-[5rem] sm:top-[-8%]">
                                        <Image src='/Bulb_mini.svg' alt="Bulb_mini" className="w-full h-full object-contain" width={1000} height={1000} />
                                    </div> : ''}
                                    {item.arrow ? <div className="img-wrap absolute left-[5rem] bottom-[-11rem] w-[12rem] h-[10rem] md:w-[9rem] md:h-[8rem] md:left-auto md:right-0 md:bottom-[-8rem] md:rotate-[305deg]">
                                        <Image src="/arrow-black.svg" alt="arrow-black" width={1000} height={1000} className="w-full h-full object-contain" />
                                    </div> : ''}
                                    {item.arrowfine ? <div className="img-wrap absolute left-[23.2rem] top-[-6rem] w-[12rem] h-[6.4rem] lg:left-[30%] lg:rotate-[10deg] lg:top-[-1rem] sm:w-[4rem] sm:h-[2.4rem] sm:top-0">
                                        <Image src="/arrow_strate.svg" alt="arrow_strate" width={1000} height={1000} className="w-full h-full object-cover" />
                                    </div> : ''}
                                    {item.super ? <div className="img-wrap absolute right-[21rem] top-[-7.8rem] w-[14.2rem] h-[3.2rem] tablet:left-[60%] phablet:left-[60%] lg:right-auto lg:top-[-1rem] sm:top-[-1rem] sm:w-[11.2rem] sm:left-[50%]">
                                        <Image src="/super.svg" alt="super" width={1000} height={1000} className="w-full h-full object-contain" />
                                    </div> : ''}
                                    <div
                                        className={`content_wrap relative w-full lg:pl-0 lg:pr-0 ${item.reverse === true ? "pl-[12rem] pr-[13.5rem] laptop:pl-[6rem]" : "pl-[13.5rem] pr-[12rem]"}`}>
                                        <h4 className="font-medium mb-[3rem]">{item.nuraric}</h4>
                                        <h3 className="mb-[3rem]">
                                            {item.heading} {''}
                                            <span className="relative inline-block underline-container blackMedium bpl">
                                                {item.prenormaltxt}
                                            </span>
                                            {item.Highlighttext ? <span className="relative inline-block pr-[3rem]">{item.Highlighttext}
                                                <div className="img-wrap absolute left-0 top-[10%] w-full h-full">
                                                    <Image src="/Cross out.svg" alt="Cross" width={1000} height={1000} className="w-full h-full object-contain " />
                                                </div>
                                                <div className="small-img absolute left-[23%] top-[-4.2rem] w-[14rem] h-[5.2rem] sm:w-[10rem] sm:h-[4.2rem]">
                                                    <Image src="/etaladi.svg" alt="etaladi" width={1000} height={1000} className="w-full h-full object-contain" />
                                                </div>
                                            </span> : ''}
                                            {item.circle ? <span className="relative inline-block">{item.circle}
                                                <div className="img-wrap absolute left-[-3rem] top-[-1rem] w-[19.8rem] h-[7.6rem] lg:left-[-1.5rem] lg:top-[-2.3rem] lg:w-[145%] lg:-[7.6rem]">
                                                    <Image src='/Circle.svg' alt="Circle" width={1000} height={1000} className="w-full h-full object-cover lg:object-contain" />
                                                </div>
                                            </span> : ''}
                                            {item.normaltxt}
                                        </h3>
                                        <p>{item.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
