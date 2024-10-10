import React from 'react'
import Image from 'next/image';
export default function TechnologyLogos({data}) {
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
            <p className="text-pink mb-[1.8rem] !font-[700] ">{data?.logoTitle}</p>
            <div className="wrapper w-full flex flex-wrap sm:!ml-[-3rem] max-w-[100rem]">
                {data?.logos.map((wrap, index) => (
                    <div className={`wrap-case colFivewidth ${index === logos.length - 1 ? 'mr-0' : 'sm-up:mr-[4rem]'} sm:mx-[3rem] sm:w-[calc(50%-6rem)]`} key={index}>
                        <div className="logo-wrap max-w-[9.4rem] h-[10rem] xs:mx-[auto] sm:max-w-[7rem] sm:h-[7rem]" key={index}>
                            <Image src={wrap.img} className="w-full h-full object-[inherit] sm:object-contain" width={100} height={100} alt={wrap?.imgAlt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
