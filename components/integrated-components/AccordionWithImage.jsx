import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from '../../components/styles/accordionWithMedia.module.css';
import { useRouter } from 'next/router';

export default function AccordionWithImage(data) {
    const [openItem, setOpenItem] = useState(null);
    const [winWidth, isWinWidth] = useState(0);
    const router = useRouter();

    const toggleAccordion = (e, index) => {
        closeAccordion();
        if (openItem !== index) {
            const content = e.target.closest(`.${style.accordionItem}`).querySelector(`.${style.accordionContent}`);
            const pHeight = e.target.closest(`.${style.accordionItem}`).querySelector('.contentWrap').offsetHeight;
            const contentWrap = e.target.closest(`.${style.accordionItem}`).querySelector('.contentWrap p');
            content.style.height = `${pHeight}px`;
            setTimeout(() => {
                contentWrap.style.opacity = 1;
            }, 150);
            setOpenItem(index);
        } else {
            setOpenItem(null);
        }
    };

    const closeAccordion = () => {
        const accordions = document.querySelectorAll(`.accordionWithMedia .${style.accordionItem}`);
        accordions.forEach(element => {
            const content = element.querySelector(`.${style.accordionContent}`);
            const contentWrap = element.querySelector('.contentWrap p');
            contentWrap.style.opacity = 0;
            content.style.height = `0px`;
        });
    };

    useEffect(() => {
        closeAccordion()
        setOpenItem(0);
        const content = document.querySelector(`.${style.accordionContent}`);
        const pHeight = document.querySelector(`.${style.accordionItem}`).querySelector('.contentWrap').offsetHeight;
        const contentWrap = document.querySelector(`.${style.accordionItem}`).querySelector('.contentWrap p');
        content.style.height = `${pHeight}px`;
        contentWrap.style.opacity = 1;
    }, [router.query])

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
        <section className={`accordionWithMedia bg-black ${data?.classes} ${data?.padding?.join(' ')}`} id={data?.id}>
            <div className={`container`}>
                <div className="accordion_wrapper relative w-full flex flex-wrap">
                    <div className="col_two w-1/2 lg:w-full">
                        <div className="accordion_wrap relative w-full lg-up:max-w-[60rem]">
                            {data?.title &&
                                <h3 className="text-white mb-[2.1rem] lg:mb-10">{data.title}</h3>
                            }
                            {winWidth > 991 && data?.image ? '' : <div className="col_two w-1/2 lg:w-full lg:mb-[2.5rem]">
                                <div className="image_wrap relative w-full max-w-[67rem] h-full max-h-[64rem] mx-auto">
                                    <Image
                                        src={data?.image?.mediaItemUrl}
                                        width={900}
                                        height={1000}
                                        alt={data?.image?.altText}
                                        className=" w-full h-full object-cover "
                                    />
                                </div>
                            </div>}
                            {data?.items &&
                                <div className={`accordion relative w-full lg-up:min-h-[50rem]`}>
                                    {data.items.map((accordionItem, index) => (
                                        <div
                                            key={index}
                                            data-cursor-expand="true"
                                            data-cursor-rotate
                                            data-cursor-icon={openItem === index ? "iconMinus" : "iconPlus"}
                                            className={`${style.accordionItem} text-white wrap relative w-full pt-[3rem] pb-[2.8rem] border-b-[1px] cursor-pointer ${openItem ? "open" : ""}`}
                                            onClick={(e) => toggleAccordion(e, index)}
                                        >
                                            <h4 className="lite">
                                                {accordionItem.title}
                                            </h4>
                                            <div className={`${style.accordionContent} ${openItem ? style.active : ""} relative w-full pr-[4rem] overflow-hidden h-0 m-0`}>
                                                <div className="pt-[2rem] contentWrap">
                                                    <p className="opacity-0 transition-opacity duration-300 ease-in-out">
                                                        {accordionItem.bodyWithoutEditor}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    {winWidth > 991 && data.image ? <div className="col_two w-1/2 lg:w-full">
                        <div className="image_wrap relative w-full max-w-[67rem] h-full max-h-[64rem] mx-auto">
                            <Image
                                src={data?.image?.mediaItemUrl}
                                width={900}
                                height={1000}
                                alt={data?.image?.altText}
                                className=" w-full h-full object-cover overflow-visible"
                            />
                        </div>
                    </div> : ''}
                </div>
            </div>
        </section>
    );
}
