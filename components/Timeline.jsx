import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import style from "../components/styles/timeline.module.css";
import Lottie from 'react-lottie';
import BulbLottie from '../public/Lootie/Light_Bulb_Marker.json';
import SuperCollArrowLottie from '../public/Lootie/Super_Cool_Arrow.json';

const data = [
    {
        id: 1,
        img: '/valod.png',
        year: '1999',
        heading: 'It all starts',
        prenormaltxt: 'here',
        para: 'Steve Ohanians and Valod Amirkhanian launch the agency from Valod’s bedroom while they’re both in college.',
        firework: true,
        arrow: true,
    },
    {
        id: 2,
        img: '/section/Timeline/steve.webp',
        year: '2000',
        heading: 'Client list hits double digits',
        para: 'Less than one year in and we’re already building up an impressive list of early innovators and web pioneers.',
        reverse: true,
        bulb: true,
    },
    {
        id: 3,
        img: '/section/Timeline/first-office.webp',
        year: '2001',
        heading: 'First office opens',
        para: 'To accommodate our growing business, we open our first physical office at 940 Saratoga Ave., San Jose, CA.',
        arrowfine: true,
    },
    {
        id: 4,
        img: '/section/Timeline/steve.webp',
        year: '2001',
        heading: 'Our B2B debut',
        para: 'We make our first foray into the B2B tech space, working with ViVOtech, Lightbit Technologies, and MosChip Semiconductor.',
        reverse: true,
        bulb: true,
    },
    {
        id: 5,
        img: '/danny.png',
        year: '2001',
        heading: 'Our first hire!',
        para: 'As our client list (and our business) continues to grow, we start to build out our team with our first new hire.',
        arrowfine: true,
    },
    {
        id: 6,
        img: '/section/Timeline/steve.webp',
        year: '2004',
        heading: 'Our first conference room',
        para: 'In support of our collaborative approach, we move to 777 N First, San Jose—our first office with a conference room.',
        reverse: true,
        bulb: true,
    },
    {
        id: 7,
        img: '/danny.png',
        year: '2007',
        heading: 'Client list tops 100',
        para: 'We’re excited to expand our client list into triple digits, serving B2B tech leaders and top brands across key verticals.',
        arrowfine: true,
    },
    {
        id: 8,
        img: '/section/Timeline/steve.webp',
        year: '2008',
        heading: 'Our headcount hits 15!',
        para: 'We expand our team of passionate creatives, developers, and project managers to keep up with our growing client base.',
        reverse: true,
        bulb: true,
    },
    {
        id: 9,
        img: '/section/Timeline/award.webp',
        year: '2010',
        heading: 'We win our first Addy statue',
        para: 'We’re honored to have our work recognized by our peers with our very first American Advertising Federation (ADDY) award.',
        arrowfine: true,
    },
    {
        id: 10,
        img: '/section/Timeline/cheers.webp',
        year: '2014',
        heading: 'Cheers to 15 years!',
        para: "So much to celebrate—over 100 awards, 900,000 web pages, 4B pixels and counting. That's why we’re partying like it’s 1999.",
        arrowfine: true,
        reverse: true,
    },
    {
        id: 11,
        img: '/section/Timeline/san-jose-film.webp',
        year: '2014',
        heading: 'Partnering for art',
        para: 'We are honored when the San Jose International Short Film Festival invites us to design their poster.',
        arrowfine: true,
        super: true,
    },
    {
        id: 12,
        img: '/section/Timeline/pc-with-dog.webp',
        year: '2016',
        heading: 'Expanding our reach with remote work',
        para: 'To keep up with demand and expand our talent pool, we hire our first remote worker—ahead of the curve, as usual.',
        reverse: true,
        bulb: true,
    },
    {
        id: 13,
        img: '/section/Timeline/meeting-room.webp',
        year: '2017',
        heading: 'Move to our current digs',
        para: 'In keeping with our Silicon Valley spirit, we move to 1570 The Alameda, Suite 330—in the heart of San Jose.',
        arrowfine: true,
    },
    {
        id: 14,
        img: '/section/Timeline/intern.webp',
        year: '2018',
        heading: 'Bring in the interns',
        para: 'We begin mentoring young designers, developers, and project managers with four-month paid internship opportunities.',
        reverse: true,
        bulb: true,
    },
    {
        id: 15,
        img: '/section/Timeline/club-launch.webp',
        year: '2018',
        heading: 'Book club launch',
        para: 'Storytelling is at the heart of what we do—so we’re sharing the joy of reading through the Clear Digital Book Club.',
        arrowfine: true,
    },
    {
        id: 16,
        img: '/section/Timeline/summit.webp',
        year: '2021',
        heading: 'First-ever Forward Summit',
        para: 'Bringing together partners and team members from around the world to uncover new ideas, address challenges, and build relationships.',
        bulb: true,
        reverse: true,
    },
    {
        id: 17,
        img: '/section/Timeline/inc-5000-logo.webp',
        year: '2021',
        heading: 'We make the Inc. 5000 list',
        para: 'Clear Digital ranks on the Inc. 5000 list of the fastest-growing private companies for 2021.',
        arrowfine: true,
        super: true,
    },
    {
        id: 18,
        img: '/section/Timeline/myrious-logo.webp',
        year: '2022',
        heading: 'Founding Partner at Myrious Group',
        para: 'We proudly partner with other agencies to help brands unlock their potential through the power of orchestration.',
        bulb: true,
        reverse: true,
    },
    {
        id: 19,
        img: '/section/Timeline/clear-digital-logo.webp',
        year: '2023',
        heading: 'Rebrand to Clear Digital',
        para: 'Looking to the future while acknowledging our growth, innovation, and evolution to date, we’re proud to rebrand as Clear Digital.',
        arrowfine: true,
    },
    {
        id: 20,
        img: '/section/Timeline/forward-summit.webp',
        year: '2023',
        heading: 'Forward Summit—in person',
        para: 'Bringing together the best minds in the business, we host our first live summit to talk shop, identify trends, and find solutions.',
        bulb: true,
        reverse: true,
    },
    {
        id: 21,
        img: '/danny.png',
        year: '2024',
        heading: 'Clear Digital turns 25!',
        para: 'We’re looking back at how much we’ve learned, grown, and achieved since we started—and looking forward to the future with excitement. ',
        arrowfine: true,
        super: true,
    },
];

gsap.registerPlugin(ScrollTrigger);
export default function ScrollDownColTwo() {
    const [leftPosition, setLeftPosition] = useState(0)
    const [animationsState, setAnimationsState] = useState(
        data.map(() => ({
            rocket: { isStopped: true, isPaused: false },
            arrow: { isStopped: true, isPaused: false },
        }))
    );

    const rocketRefs = useRef([]);
    const arrowRefs = useRef([]);


    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.dataset.index);

                if (entry.isIntersecting) {
                    // Animation comes into view
                    setAnimationsState((prevState) =>
                        prevState.map((state, i) =>
                            i === index
                                ? {
                                    rocket: { isStopped: false, isPaused: false },
                                    arrow: { isStopped: false, isPaused: false },
                                }
                                : state
                        )
                    );
                } else {
                    // Animation goes out of view - Reset the animations
                    setAnimationsState((prevState) =>
                        prevState.map((state, i) =>
                            i === index
                                ? {
                                    rocket: { isStopped: true, isPaused: true },
                                    arrow: { isStopped: true, isPaused: true },
                                }
                                : state
                        )
                    );
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        rocketRefs.current.forEach((ref) => ref && observer.observe(ref));
        arrowRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            rocketRefs.current.forEach((ref) => ref && observer.unobserve(ref));
            arrowRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    useEffect(() => {
        const pinkLine = document.querySelector(`.${style.pinkLine}`);
        const circles = document.querySelectorAll('.circle');

        const middleOfViewport = (window.innerHeight / 2) + 100;

        gsap.to(pinkLine, {
            height: () => `${ScrollTrigger.maxScroll(window) - ScrollTrigger.start}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: pinkLine,
                start: `top ${middleOfViewport}`,
                end: () => `+=${ScrollTrigger.maxScroll(window)}`,
                onUpdate: self => {
                    const scrollDistance = self.scroll() - self.start;
                    pinkLine.style.height = `${scrollDistance}px`;

                    // Check each circle's position relative to the viewport's middle
                    circles.forEach(circle => {
                        const rect = circle.getBoundingClientRect();
                        if (rect.top < middleOfViewport) {
                            circle.classList.add('!bg-pink');
                        } else {
                            circle.classList.remove('!bg-pink');
                        }
                    });
                },
                scrub: true,
            },
        });

    }, []);

    useEffect(() => {
        const handleResize = () => {
            const pinkBarLeftOffset = document.querySelector('.scroll_line_one').getBoundingClientRect().left;
            if (window.innerWidth < 992 && window.innerWidth > 595) {
                setLeftPosition(pinkBarLeftOffset + 23)
            } else if (window.innerWidth < 596 && window.innerWidth > 375) {
                setLeftPosition(pinkBarLeftOffset - 3)
            } else if (window.innerWidth < 376) {
                setLeftPosition(pinkBarLeftOffset + 23)
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const leftOffest = {
        left: `-${leftPosition}px`
    };

    return (
        <section className={`timeline grid__parallax dark pb-[30rem] `}>
            <div className={`container`}>
                <div className={`relative w-full lg:pl-[10rem] xs:pl-[5rem]  z-10 `}>
                    <div className={`absolute top-0 left-[50%] translate-x-[-50%] w-[10rem] h-full tablet:right-[0] phablet:right-0 xs:w-[7rem] lg:left-[0] tablet:left-[5rem] phablet:left-[5rem] xs:left-[1rem] sm:translate-x-unset`}>
                        <div className="relative w-full h-full">
                            <div className="scroll_line_one absolute top-0 left-[50%] translate-x-[-50%] w-[1px] h-[calc(100%+15rem)] bg-gray-300 lg:left-auto tablet:right-[calc(6rem+3px)] phablet:right-[calc(6rem+3px)] phone:right-0 xs:right-[calc(3rem+3px)] lg:-translate-x-0 bg-black"></div>
                            <div className={`${style.line} ${style.lineOne} absolute top-0 left-[50%] translate-x-[-50%] w-[8px] h-[calc(100%+15rem)] overflow-hidden lg:w-[6px] lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}>
                                <div className={`${style.pinkLine}`}></div>
                            </div>
                        </div>
                    </div>
                    {data.map((item, index) => (
                        <div className={`row relative w-full flex flex-wrap items-center ${index === data.length - 1 ? "" : "mb-[15rem] md:mb-[10rem]"} ${item.reverse === true ? "flex-row-reverse lg:justify-start" : "lg:justify-end"}`} key={index}>
                            <div className={`${style.circle} circle circleOne absolute lg-up:!left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:right-auto lg:translate-x-0`} style={leftOffest} />
                            <div className={`w-1/2 lg:w-[75%] xs:w-[80%] lg:pl-0 relative lg:pr-0 ${item.reverse === true ? "pl-[13.5rem]" : ""}`}>
                                {item.firework ? <div className="firework absolute top-[-4.1rem] w-[12.5rem] h-[9.6rem] right-[20.5rem] z-[3] tablet:right-[7.5rem] phablet:right-[5rem] sm:right-[2rem] sm:w-[7.5rem] sm:h-[5.5rem] sm:top-[-3rem]">
                                    <Image src="/Firework.svg" alt="Firework" width={1000} height={1000} className="w-full h-full object-contain" />
                                </div> : ''}
                                <div className="image_wrap relative w-full max-w-[57rem] h-[54rem] text-[0] overflow-hidden lg:h-auto lg:mb-[5rem]">
                                    <Image src={item.img} width={1000} height={1000} alt="img" />
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-[75%] xs:w-[80%] relative">
                                {item.bulb && (
                                    <div
                                        ref={(el) => (rocketRefs.current[index] = el)}
                                        data-index={index}
                                        className="img-wrap absolute left-[-4.3rem] top-[47%] w-[11.5rem] h-[12rem] lg:left-auto lg:right-0 tablet:w-[7.5rem] tablet:h-[8rem] tablet:top-[-10%] phablet:w-[7.5rem] phablet:h-[8rem] phablet:top-[-15%] sm:w-[5rem] sm:h-[5rem] sm:top-[-8%]"
                                    >
                                        <Lottie
                                            options={{
                                                loop: false,
                                                autoplay: false,
                                                animationData: BulbLottie,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice',
                                                },
                                            }}
                                            isStopped={animationsState[index]?.rocket.isStopped}
                                            isPaused={animationsState[index]?.rocket.isPaused}
                                        />
                                    </div>
                                )}
                                {item.arrowfine && (
                                    <div
                                        ref={(el) => (arrowRefs.current[index] = el)}
                                        data-index={index}
                                        className="img-wrap absolute left-[23.2rem] top-[-6rem] w-[25rem] h-[7rem] lg:left-[30%] lg:rotate-[10deg] lg:top-[-1rem] sm:w-[16rem] sm:h-[6rem]"
                                    >
                                        <Lottie
                                            options={{
                                                loop: false,
                                                autoplay: false,
                                                animationData: SuperCollArrowLottie,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice',
                                                },
                                            }}
                                            isStopped={animationsState[index]?.arrow.isStopped}
                                            isPaused={animationsState[index]?.arrow.isPaused}
                                        />
                                    </div>
                                )}
                                <div className={`content_wrap relative w-full lg:pl-0 lg:pr-0 ${item.reverse === true ? "pl-[12rem] pr-[13.5rem] laptop:pl-[6rem]" : "pl-[13.5rem] pr-[12rem]"}`}>
                                    <h4 className="font-medium mb-[3rem]">{item.year}</h4>
                                    <h3 className="mb-[3rem]">
                                        {item.heading} {''}
                                        <span className="relative inline-block underline-container blackMedium bpl">
                                            {item.prenormaltxt}
                                        </span>
                                        {item.Highlighttext &&
                                            <span className="relative inline-block pr-[3rem]">{item.Highlighttext}
                                                <div className="img-wrap absolute left-0 top-[10%] w-full h-full">
                                                    <Image src="/Cross out.svg" alt="Cross" width={1000} height={1000} className="w-full h-full object-contain " />
                                                </div>
                                                <div className="small-img absolute left-[23%] top-[-4.2rem] w-[14rem] h-[5.2rem] sm:w-[10rem] sm:h-[4.2rem]">
                                                    <Image src="/etaladi.svg" alt="etaladi" width={1000} height={1000} className="w-full h-full object-contain" />
                                                </div>
                                            </span>
                                        }
                                        {item.circle &&
                                            <span className="relative inline-block">{item.circle}
                                                <div className="img-wrap absolute left-[-3rem] top-[-1rem] w-[19.8rem] h-[7.6rem] lg:left-[-1.5rem] lg:top-[-2.3rem] lg:w-[145%] lg:-[7.6rem]">
                                                    <Image src='/Circle.svg' alt="Circle" width={1000} height={1000} className="w-full h-full object-cover lg:object-contain" />
                                                </div>
                                            </span>
                                        }
                                    </h3>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
