'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Leadership = () => {
    const carditems = [
        {
            img: '/steve_default.jpg',
            hoverImg: '/steve_ohanians.png',
            boldtxt: 'Steve Ohanians',
            txt: 'Co-Founder & Director of Digital Strategy',
            linktxt: 'Read Bio',
            linkhrf: '/author/steve_admin'
        },
        {
            img: '/valod_leadership.png',
            hoverImg: '/valod_hover.jpg',
            boldtxt: 'Valod Amirkhanian',
            txt: 'Co-Founder & Director of Technology',
            linktxt: 'Read Bio',
            linkhrf: '/author/valod'
        },
        {
            img: '/danny_leadership.png',
            hoverImg: '/danny_hover.jpg',
            boldtxt: 'Danny Halvorson',
            txt: 'Partner & Creative Director',
            linktxt: 'Read Bio',
            linkhrf: '/author/danny'
        },
        {
            img: '/annie.png',
            hoverImg: '/annie_hover.jpg',
            boldtxt: 'Annie Raygoza',
            txt: 'Director of Client Services',
            linktxt: 'Read Bio',
            linkhrf: '/author/araygoza'
        },
    ]

    return (
        <section className="leadership dark grid__parallax no-padding-top ">
            <div className="container">
                <div className="intro mb-[5rem]">
                    <h3>Leadership</h3>
                </div>
                <div className="wrapper flex w-[calc(100%+3rem)] flex-wrap ml-[-1.5rem]">
                    {carditems.map((item, index) => (
                        <div className="card group min-h-[47.1rem] lg:min-h-[40rem] sm:max-w-[33rem] w-[calc(25%-3rem)] sm:!w-full lg:w-[calc(50%-3rem)] lg:mb-[3rem] mx-[1.5rem] relative" key={index}>
                            <Link className="redirect" href={item.linkhrf}>{item.linktxt}</Link>
                            <div className="img-wrap relative sm:max-w-[33rem] h-[33rem] w-full mb-[2rem]">
                                <Image src={item.img} width={1000} height={1000} alt="image" className="absolute left-0 top-0 w-full h-full opacity-100 object-cover" fetchPriority="high"/>
                                <Image src={item.hoverImg} width={1000} height={1000} alt="image" className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-cover" fetchPriority="high"/>
                            </div>
                            <p className="subtitle !font-bold mb-[0.5rem]">{item.boldtxt}</p>
                            <p className="small font-normal mb-[5rem]">{item.txt}</p>
                            <div className="link-wrap  absolute left-0 bottom-0">
                                <Link className="tertiary-btn pink" href={item.linkhrf}>{item.linktxt}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Leadership;