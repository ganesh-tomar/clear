import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UnderlineText from './UnderlineText';
import Underline from './Underline';


const ContentGrid = (underlineColor) => {
    return (
        <section className='contentGrid grid__parallax dark  laptop:pb-[150px] lg:pb-[100px]' id='overview'>
            <div className='container'>
                <div className='intro max-w-[120rem] lg:max-w-[100%]'>
                    <div className='wrapper'>
                        <div className='intro__text'>
                            <h6 className='subtitle mb-[2rem]'>
                                Overview
                            </h6>
                            <h2>
                                Stand out brands are focused and thoughtful
                            </h2>
                            <h5 className='mt-[5rem] lite'>In a competitive market, it’s all too easy to try to be all things to all people. Creating a strong brand platform forces you to make choices, to focus on what is most important to your organization and what you can uniquely own. This is the foundation of your story, the digital experiences you create, the relationships you have with customers. Taking the time to get your brand right will get you further, faster.</h5>
                        </div>
                    </div>
                </div>
                <div className='w-mainRow flex flex-wrap mt-[5.8rem] -ml-[10px]'>
                    <div className='w-threeCard relative pr-[9rem] mx-[10px] md:w-full laptop:pr-[50px] lg:pr-[0] tablet:w-halfWidth tablet:mb-[50px] md:mb-[50px] sm:pr-[0]'>
                        {/* <Link href="/" className="redirect">.</Link> */}
                        {/* <div className='max-w-[7.9rem] max-h-[8.5rem] mb-[3rem] w-full sm:max-w-[60px] sm:h-[60px]'>
                            <Image src={"/Collaboration.png"} alt='img' width={300} height={300} className='md:object-contain h-full w-full' />
                        </div> */}
                        <h4 className='lite mb-[10px]'>Engagement <br /> is everything</h4>
                        <p className=''>While you’re a B2B brand, you work with people. And emotions are the heart of every interaction. Get people to feel and engage.</p>

                    </div>
                    <div className='w-threeCard relative pr-[9rem] mx-[10px] md:w-full laptop:pr-[50px] lg:pr-[0]  tablet:w-halfWidth tablet:mb-[50px] md:mb-[50px] sm:pr-[0]'>
                        {/* <Link href={'#'} className='redirect'>  .  </Link> */}
                        {/* <div className='max-w-[7.9rem] max-h-[8.5rem] mb-[3rem] w-full sm:h-[60px]'>
                            <Image src={"/Performance.png"} alt='img' width={300} height={300} className='md:object-contain h-full w-full' />
                        </div> */}
                        <h4 className='lite mb-[10px]'>What can <br /> you own?</h4>
                        <p className=''>When competitors offer the same products and services, uncovering what makes you different is about pulling back the layers.</p>

                    </div>
                    <div className='w-threeCard relative pr-[9rem] mx-[10px] md:w-full laptop:pr-[50px] lg:pr-[0]  tablet:w-halfWidth sm:pr-[0]'>
                        {/* <Link href={'#'} className='redirect'>  .  </Link> */}
                        {/* <div className='max-w-[7.9rem] max-h-[8.5rem] mb-[3rem] w-full sm:h-[60px]'>
                            <Image src={"/Excellence.png"} alt='img' width={300} height={300} className='md:object-contain h-full w-full' />
                        </div> */}
                        <h4 className='lite mb-[10px]'>Build a <br /> consistent story</h4>
                        <p className=''>Getting all of your team and materials telling a unified story can only happen once you’ve clearly articulated your brand.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentGrid;
