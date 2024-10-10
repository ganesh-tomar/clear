import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import style from '../../../../components/styles/bladeWithThreeImg.module.css'

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
        <section className={`bladewiththreeimg height__full-nav imageSlider relative before:hidden after:hidden xldesktop-up:min-h-[115vh] phablet:min-h-[370px] tablet:min-h-[500px] laptopsmall:min-h-[700px] laptopSmallMid:min-h-[800px] desktopsmallmid:min-h-[740px] laptopbig:min-h-[800px] laptopmid:min-h-[800px] desktopMidUp:min-h-[850px] ipad:min-h-[645px] sm:!min-h-[220px] no-padding overflow-visible ${style.bladewiththreeimg} ${content?.bgColor} ${content?.sectionClass}`}>
            <div className="wrap h-full w-full absolute top-0 lg:h-full sm:flex sm:items-center">
                <div className="logo-wrapp !max-w-[200px] max-h-fit lg:max-w-[20.5rem] lg:max-h-[3rem] sm:!max-w-[206px] sm:!max-h-full sm:mx-auto hidden">
                    <Image src={content?.bgImage} width={1920} height={1920} className='w-full h-auto object-contain' alt={content?.imageAlt} />
                </div>
                <div className={`image-wrapper relative w-full h-full bottom-0 left-0 z-33 laptopsmall:h-[110%] tablet:h-[110%] phablet:h-[118%] ${content?.sectionClass === 'revealAnimation' ? 'sm:h-[calc(100%+30%)] tablet:mt-[-30px] phablet:mt-[-30px]' : 'sm:h-full'}`}>
                    <Image src={content?.imageUrl} width={1920} height={1920} className='elementToBeAnimate w-full phablet:object-cover tablet:object-cover laptopsmall:object-cover tablet:h-full laptopsmall:h-full phablet:h-full sm:object-cover sm:h-[120%]' alt={content?.imageAlt} />
                </div>
            </div>
            <div ref={parallaxRef} className={`outOfSectionImage absolute top-[-150px] right-[216px] z-[2] sm:hidden desktopmid:right-[116px] max-w-[690px] max-h-[768px] desktopmid:max-h-[500px] desktopmid:max-w-[525px] xm:max-h-[100%] xm:h-[350px] xm:right-[125px] w-full h-full desktopMidUp:right-[125px] ipad:right-[60px] lg:!right-[30px] xm:top-[-115px] phablet:top-[-70px] phablet:h-[250px] ${content?.animationVideo ? 'md:!w-[330px]' : 'md:!w-[275px]'} tablet:!w-[400px] laptopsmall:!w-[400px] md:!max-w-[100%] xm:max-w-[100%] tablet:max-h-[300px] sm:hidden`}>
                {
                    content?.animationImage && (
                        <Image src={content?.animationImage} width={1920} height={1920} alt={'Animation img'} className='w-full h-full object-scale-down object-[top_right]' />
                    )
                }
                {
                    content?.animationFramImg && (
                        <>
                            <Image src={content?.animationFramImg} width={1920} height={1920} alt={content?.animationAlt} className='w-full object-[top_right]' />
                            <div className="videoWrap absolute top-[26px] right-[95px] w-full h-full max-w-[502px] max-h-[324px] md:max-w-[240px] md:!max-h-[156px] md:!top-[12px] md:!right-[45px] laptop:top-[20px] xxl-down:top-[26px] largedesktop:top-[26px] desktopmidDown:top-[26px] laptop:max-h-[250px] desktopmid:max-w-[382px] desktopmid:max-h-[246px] desktopmid:top-[20px] desktopmid:right-[71px] laptopmid:max-h-[248px] laptopmid:top-[30px] laptopsmall:max-w-[292px] laptopsmall:!max-h-[192px] laptopsmall:!top-[11px] laptopsmall:!right-[55px] tablet:max-w-[292px] tablet:!max-h-[192px] tablet:!top-[11px] tablet:!right-[55px] ">
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
