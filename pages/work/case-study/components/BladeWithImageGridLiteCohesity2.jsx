import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';

export default function BladeWithImageGridLite({ content }) {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const element = parallaxRef.current;
        gsap.to(element, {
            yPercent: -40, // Adjust this value for the amount of parallax effect
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom", // When the top of the element hits the bottom of the viewport
                end: "bottom top", // When the bottom of the element hits the top of the viewport
                scrub: true,
            },
        });
    }, []);


    return (
        <section className={`bladewiththreeimg height__full-nav imageSlider relative before:hidden after:hidden lg:min-h-[500px] no-padding sm:!min-h-[260px] overflow-visible ${content?.bgColor} ${content?.sectionClass}`}>
            <div className="wrap elementToBeAnimate h-[calc(100vh+40%)] w-full absolute top-[-10px] lg:h-full sm:flex sm:items-center">
                <div className="logo-wrapp !max-w-[200px]  max-h-fit lg:max-w-[20.5rem] lg:max-h-[3rem] sm:!max-w-[206px] sm:!max-h-full sm:mx-auto sm-up:hidden" >
                    <Image src={content?.bgImage} width={1920} height={1920} className='w-full h-auto object-cover ' alt={content?.imageAlt} />
                </div>
                <div className="image-wrapper relative w-full h-[140%] top-[-20%] lg:h-full bottom-0 left-0 z-33 sm:hidden">
                    <Image 
                    src={content?.imageUrl} 
                    width={1920} height={1920} className='w-full h-full object-contain object-top' alt={content?.imageAlt} />
                </div>
            </div>
            <div ref={parallaxRef} className={`outOfSectionImage absolute top-[-150px] right-[216px] z-[2] desktopmid:right-[116px] max-w-[690px] max-h-[768px] desktopmid:max-h-[500px] desktopmid:max-w-[525px] xm:max-h-[100%] xm:h-[350px] xm:right-[125px] w-full h-full desktopMidUp:right-[125px] ipad:right-[60px] lg:!right-[30px] xm:top-[-115px] ${content?.animationVideo ? 'md:!w-[330px]' : 'md:!w-[275px]'} tablet:!w-[400px] laptopsmall:!w-[400px] md:!max-w-[100%] xm:max-w-[100%] tablet:max-h-[300px] sm:hidden`}>
                {
                    content?.animationImage && (
                        <Image src={content?.animationImage} width={1920} height={1920} alt={'Animation img'} className='w-full h-full object-scale-down object-[top_right]' />
                    )
                }
                {
                    content?.animationFramImg && (
                        <>
                            <Image src={content?.animationFramImg} width={1920} height={1920} alt={content?.animationAlt} className='w-full h-full object-contain' />
                            <div className="videoWrap absolute top-[101px] right-[95px] w-full h-full max-w-[502px] max-h-[324px] md:max-w-[240px] md:!max-h-[156px] md:!top-[28px] md:!right-[45px] laptop:top-[42px] xxl-down:top-[80px] largedesktop:top-[156px] desktopmidDown:top-[90px] laptop:max-h-[332px] desktopmid:top-[66px] laptopmid:max-h-[332px] laptopsmall:max-w-[292px] laptopsmall:!max-h-[192px] laptopsmall:!top-[11px] laptopsmall:!right-[55px] tablet:max-w-[292px] tablet:!max-h-[192px] tablet:!top-[11px] tablet:!right-[55px] ">
                                <video loading="lazy" autoPlay muted loop playsInline preload="none" className={`object-cover absolute top-[0] laptopmid:top-[-10px] left-[0] bottom-[0] w-[100%] h-[100%]`}>
                                    <source src={content?.animationVideo} type="video/mp4" />
                                </video>
                            </div>
                        </>
                    )
                }

            </div>
        </section>
    )
}