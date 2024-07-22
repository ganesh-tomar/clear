import React from 'react'
import Image from 'next/image'

export default function BladeWithImageGridLite({content}) {
    return (
        <section className={`bladewiththreeimg before:hidden after:hidden no-padding sm:min-h-[260px] overflow-visible z-[2]  ${content?.bgColor}`}>
            <div className="logo-wrapp !max-w-[200px] max-h-fit lg:max-w-[20.5rem] lg:max-h-[3rem] sm:!max-w-[206px] sm:!max-h-full sm:mx-auto sm-up:hidden">
                <Image src={content?.bgImage} width={1000} height={1000} className='w-full h-auto object-cover' alt={content?.mageAlt} />
            </div>
            <div className="image-wrapper w-full h-full bottom-0 left-0 z-33 sm:hidden">
                <Image src={content?.imageUrl} width={1000} height={1000} className='w-full h-full object-contain' alt='Phones' />
                <div className="outOfSectionImage absolute top-[-200px] right-[30px] max-w-[500px] max-h-[460px] w-full h-full tablet:max-w-[400px] xm:max-w-[360px] tablet:max-h-[300px]  sm:hidden aos-init" data-aos="fade-left" data-aos-delay="500">
                    {
                        content?.animationImage && (
                            <Image src={content?.animationImage} width={1000} height={1000} alt='' className='w-full h-full object-contain' />
                        )
                    }
                    {
                        content?.animationFramImg && (
                            <>
                                <Image src={content?.animationFramImg} width={1000} height={1000} alt='' className='w-full h-full object-contain' />
                                <div className="videoWrap absolute top-[105px] right-[67px] w-full h-full max-w-[365px] max-h-[235px] laptopsmall:max-w-[262px] laptopsmall:max-h-[172px] laptopsmall:top-[138px] laptopsmall:right-[49px] tablet:max-w-[292px] tablet:max-h-[190px] tablet:right-[55px] tablet:top-[50px] md:max-w-[262px] md:max-h-[172px] md:right-[49px] md:top-[140px] ">
                                   
                                    <video loading="lazy" autoPlay muted loop playsInline preload="none" className={` object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
                                        <source src={content?.animationVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </>
                        )
                    }
                    
                </div>
            </div>

            <div className="container">

            </div>
        </section>
    )
}
