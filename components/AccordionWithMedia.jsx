import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from '../components/styles/accordionWithMedia.module.css'



const AccordionItem = ({ id, heading, paragraph, isOpen, toggleAccordion }) => {
    return (
        <div
            data-cursor-expand="true"
            className={`${style.accordionItem} text-white wrap relative w-full pt-[3rem] pb-[2.8rem] border-b-[1px] cursor-pointer ${isOpen ? "open" : ""
                }`}
            onClick={() => toggleAccordion(id)}
        >
            <h4 className="lite">
                {heading}
            </h4>
            <div
                className={`${style.accordionContent} ${isOpen ? style.active : ""
                    } relative w-full pr-[4rem] overflow-hidden max-h-0`}
            >
                <div className="pt-[2rem]">
                    <p className="">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
};
const accordionData = [
    {
        id: 1,
        heading: "Brand Research",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
    },
    {
        id: 2,
        heading: "Brand Purpose",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
    },
    {
        id: 3,
        heading: "Brand Positioning",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
    },
    {
        id: 4,
        heading: "Brand Promise",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
    },
    {
        id: 5,
        heading: "Brand Activation",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
    },
];

export default function ClearDigitalAccordion() {
    const [openItem, setOpenItem] = useState(accordionData[0].id);
    const [bladeHeight, setBladeHeight] = useState(0);
    const [winWidth, isWinWidth] = useState(0);

    const toggleAccordion = (itemId) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };
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

    return (
        <>
            <section
                className={`accordionWithMedia bg-black`}
            >
                <div className={`container`}>
                    <div className="accordion_wrapper relative w-full flex flex-wrap">
                        <div className="col_two w-1/2 lg:w-full">
                            <div className="accordion_wrap relative w-full lg-up:max-w-[60rem]">
                                <h3 className="text-white mb-[2.1rem] lg:mb-10">
                                    A Full Suite of Brand Strategy Solutions
                                </h3>
                                {winWidth > 991 ? '' : <div className="col_two w-1/2 lg:w-full lg:mb-[2.5rem]">
                                    <div className="image_wrap relative w-full max-w-[67rem] h-full max-h-[64rem] mx-auto">
                                        <Image
                                            src="/strategy-services-landing-page.8126c15 1.svg"
                                            width={900}
                                            height={1000}
                                            alt="img"
                                            className=" w-full h-full object-cover "
                                        />
                                    </div>
                                </div>}
                                <div className={`accordion relative w-full lg-up:min-h-[75rem]`}>
                                    {accordionData.map((accordionItem) => (
                                        <AccordionItem
                                            key={accordionItem.id}
                                            id={accordionItem.id}
                                            heading={accordionItem.heading}
                                            paragraph={accordionItem.paragraph}
                                            isOpen={openItem === accordionItem.id}
                                            toggleAccordion={toggleAccordion}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {winWidth > 991 ? <div className="col_two w-1/2 lg:w-full">
                            <div className="image_wrap relative w-full max-w-[67rem] h-full max-h-[64rem] mx-auto">
                                <Image
                                    src="/strategy-services-landing-page.8126c15 1.svg"
                                    width={900}
                                    height={1000}
                                    alt="img"
                                    className=" w-full h-full object-cover "
                                />
                            </div>
                        </div> : ''}

                    </div>
                </div>
            </section>
        </>
    );
}
