import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import style from '../components/styles/techOverview.module.css'

export default function TechOverview() {
    return (
        <section className={`${style.techOverview} techOverview border-darkGray border-t group padding-top-md padding-small-bottom`}>
            <div className={`absolute top-0 left-0 w-full h-full opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200`}>
                <Image src={`/case_bg.svg`} className="w-full h-full object-cover object-bottom sm:object-[70%]" width={100} height={100} alt="image" />
            </div>
            <div className="container">
                <div className="w-colTwoWrapper relative flex z-[1] pt-[0.6rem] lg:flex-wrap lg:w-full">
                    <div className="w-1/2 group-hover:text-white lg:w-full">
                        <div className="wrap relative flex flex-col justify-between h-full mb-[4.5rem] tablet:mb-[10rem] md:mb-[7rem] lg-up:mr-[10rem] ">
                            <Link className='redirect' href="#" >.</Link>
                            <h3>Technology</h3>
                            <div className="desc lg:mt-[4rem]">
                                <h4 className='lite'>Lorem ipsum dolor sit amet consectetur.</h4>
                                <p className='mt-[7rem] lg:mt-[4rem]'>Select clients: Intel, Cohesity</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-full">
                        <ul className={`pl-0`}>
                            <li className={`${style.link} pb-[4.9rem]`}><Link href="#" className='tertiary-btn black group-hover:text-white '>Artificial Intelligence</Link></li>
                            <li className={`${style.link} py-[4.9rem]`}><Link href="#" className='tertiary-btn black group-hover:text-white '>Cybersecurity</Link></li>
                            <li className={`${style.link} py-[4.9rem]`}><Link href="#" className='tertiary-btn black group-hover:text-white '>Cloud</Link></li>
                            <li className={`${style.link} py-[4.9rem]`}><Link href="#" className='tertiary-btn black group-hover:text-white '>SaaS</Link></li>
                            <li className={`${style.link} py-[4.9rem]`}><Link href="#" className='tertiary-btn black group-hover:text-white '>Services</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
