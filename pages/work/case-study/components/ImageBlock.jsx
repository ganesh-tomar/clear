import React from 'react'
import Image from 'next/image';

export default function ImageBlock() {
    return (
        <section className='imageBlock grid__parallax dark no-padding-bottom'>
            <div className="container">
                <div className="imageWrap">
                    <Image
                        className="h-[53.7] w-[104rem] mx-auto"
                        width={5000}
                        height={5000}
                        src='/FPO Infographic.svg'
                        alt="image"
                    />
                </div>
            </div>
        </section>
    )
}
