import React from 'react'
import Image from 'next/image';
export default function TechnologyLogos() {

    const logos = [
        {
            img: '/jquery.png',
        },
        {
            img: '/wordpress.png',
        },
        {
            img: '/google_logo.png',
        },
        {
            img: '/livechat.png',
        },
        {
            img: '/marketo.png',
        },
    ]
    return (
        <div className="logo-wrapper w-full relative mt-[5rem] xs:mt-[0]">
            <h5 className="text-pink mb-[1.8rem] font-normal">Technologies used</h5>
            <div className="wrapper w-full flex flex-wrap ml-[-3rem] lg:ml-[-2rem] sm:!ml-[-3rem]  max-w-[100rem] ">
                {logos.map((wrap, index) => (
                    <div className={`wrap-case colFivewidth ${index === logos.length - 1 ? 'mr-0' : 'sm-up:mr-[5rem]'} sm:mx-[3rem] sm:w-[calc(50%-6rem)]`} key={index}>
                        <div className="logo-wrap  max-w-[14.8rem] h-[12.2rem] lg:max-w-[12.8rem] lg:h-[10.2rem] sm:max-w-[11.8rem] sm:h-[9.2rem] xs:mx-[auto]" key={index}>
                            <Image src={wrap.img} className="w-full h-full object-[inherit] sm:object-contain" width={100} height={100} alt="image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
