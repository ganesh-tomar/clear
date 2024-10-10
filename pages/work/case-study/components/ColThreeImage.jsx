import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ColThreeImage({ content }) {
    const data = content?.content;
    return (
        <section className={`colThreeImage ${content?.bgColor}`}>
            <div className="container">
                <div className="row flex flex-wrap">
                    {
                        data?.map((item, index) => {
                            return (
                                <div key={index} className={`item relative w-[calc(33.33%-20px)] mx-[10px] md:w-[calc(50%-20px)] ${data?.length > 3 ? 'mb-[20px]' : ''} md:mb-[20px] sm:!w-full sm:mx-auto`}>
                                    <Link href={'/'} className="redirect">.</Link>
                                    <div className="imgWrap">
                                        <Image src={item?.img} alt={item?.imgAlt} width={1000} height={1000} className='' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
