// import React, { useEffect, useRef } from "react";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import style from "../../components/styles/timeline.module.css"

export default function ScrollDownColTwo(data) {
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
                                    id="lineOne"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                    <div
                                        className={`${style.circle} ${style.circleOne} circle circleOne absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:left-auto lg:right-[-9px] lg:translate-x-0`}
                                        id="circleOne"
                                    ></div>
                                </div>
                                <div
                                    className={`${style.line} ${style.lineTwo} absolute top-[13%] left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    id="scroll_pink_line_two"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                    <div
                                        className={`${style.circle} ${style.circleTwo} circle circleTwo absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:left-auto lg:right-[-9px] lg:translate-x-0`}
                                        id="circleTwo"
                                    ></div>
                                </div>
                                <div
                                    className={`${style.line} ${style.lineThree} absolute top-[50%] left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    id="scroll_pink_line_three"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                    <div
                                        className={`${style.circle} ${style.circleThree} circle circleThree absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[2.4rem] h-[2.4rem] rounded-[50%] bg-black lg:left-auto lg:right-[-9px] lg:translate-x-0`}
                                        id="circleThree"
                                    ></div>
                                </div>
                                <div
                                    className={`${style.line} ${style.lineFour} absolute top-[86%] left-[50%] translate-x-[-50%] w-[8px] lg:w-[6px]  lg:left-auto tablet:right-[6rem] phablet:right-[6rem] phone:right-[-3px] xs:right-[3rem] lg:-translate-x-0 `}
                                    id="scroll_pink_line_four"
                                >
                                    <div className={`${style.pinkLine}`}></div>
                                </div>
                            </div>
                        </div>
                        {data?.timelineItem?.map((item, index) => {

                            const isReverse = index % 2 === 0;
                            return (
                                <div className={`row relative w-full flex flex-wrap items-center ${index === data.timelineItem.length - 1 ? "" : "mb-[15rem] md:mb-[10rem]"} ${isReverse ? "lg:justify-end" : "flex-row-reverse lg:justify-start"}`}
                                    key={index}>
                                    <div data-aos="slide-up" data-aos-duration="300" className={`w-1/2 lg:w-[75%] xs:w-[80%] lg:pl-0 relative lg:pr-0 ${isReverse ? "" : "pl-[13.5rem]"} ${item?.imageClass || ""}`}>
                                        {item?.image?.sourceUrl && <div className="image_wrap relative w-full max-w-[57rem] h-[54rem] text-[0] overflow-hidden lg:h-auto lg:mb-[5rem]">
                                            <Image
                                                src={item.image.sourceUrl}
                                                width={1000}
                                                height={1000}
                                                alt={item.image.altText}
                                            />
                                        </div>}
                                    </div>
                                    <div data-aos="slide-up" data-aos-duration="300" className="w-1/2 lg:w-[75%] xs:w-[80%] relative">
                                        {item?.linkUrl && <Link href={item.linkUrl} className="redirect">
                                            .
                                        </Link>}
                                        <div className={`content_wrap relative w-full lg:pl-0 lg:pr-0 ${isReverse ? "pl-[13.5rem] pr-[12rem]" : "pl-[12rem] pr-[13.5rem] laptop:pl-[6rem]"} ${item?.contentClass || ""}`}>
                                            {item?.subtitle && <h4 className="font-medium mb-[3rem]">{item.subtitle}</h4>}
                                            {item?.title && <h3 className="mb-[3rem]">{item.title}</h3>}
                                            {item?.body && <div dangerouslySetInnerHTML={{ __html: item.body }}></div>}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
        </>
    );
}
