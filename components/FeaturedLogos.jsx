import React from 'react'
import style from '../components/styles/colTwoImageSlider.module.css'
import Image from "next/image"
export default function FeaturedLogos() {
    const logos = [
        { img: "/forbes-logo.svg" },
        { img: "/medium.svg" },
        { img: "/logoipsum.svg" },
        { img: "/hyper_best.svg" },
    ];

    return (
        <div className={`logowrapper w-full  mt-[12.5rem] md:mt-[10rem] relative flex flex-wrap justify-between`}>
            <div className={`w-[25%] lg:w-[100%]`}>
                <h3 className={`relative inline ${style.star_logo}`}>Featured in:</h3>
            </div>

            <div className="logowrapper justify-between relative flex flex-wrap w-[65%] lg:w-full lg:mt-[6rem] sm:gap-[2rem]">
                {logos.map((logo, index) => (
                    <div className="imgwrapcase max-w-[15.3rem] max-h-[4.6rem] sm:max-w-[12rem] sm:px-0 sm-up:max-h-[7.7rem] w-full tablet:px-[2rem] phablet:px-[2rem] md:mb-[3rem]" key={index}>
                        <Image
                            src={logo.img}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                            alt="img"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
