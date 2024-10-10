import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function LogoWithDetail({ contentname, pt, pb }) {
    const contentdata = {
        approach: [
            {
                imgSrc: '/logos/collaborate.svg',
                imgAlt: 'collaborate',
                title: 'Headline About Our Highly Collaborative Approach',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                btnUrl: '#',
                btnText: 'More on Collaboration',
            },
            {
                imgSrc: '/logos/focused.svg',
                imgAlt: 'focused',
                title: 'Headline About Our Deep B2B Expertise Lorem Ipsum',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                btnUrl: '#',
                btnText: 'More on B2B Expertise',
            },
            {
                imgSrc: '/logos/excellence.svg',
                imgAlt: 'excellence',
                title: 'Headline About Our Design and Development Excellence',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                btnUrl: '#',
                btnText: 'More on Excellence',
            },
        ],
    };

    const content = contentdata[contentname] || [];
    return (
        <section className={`logo-with-detail ${pt ? pt : ''} ${pb ? pb : ''}`}>
            {content.map((item, index) => (
                <div key={index} className={`border-t border-darkGray py-[5rem] area height__one_third flex items-center w-full relative`}>
                    <div className="container">
                        <div className='w-colTwoWrapper -ml-[1rem] flex items-center md:flex-wrap md:w-full md:ml-0'>
                            <div className="w-colTwo mx-[1rem] pl-[12rem] tablet:pl-[4rem] md:pl-0 md:w-full md:mb-[2rem]">
                                <div className="logoWrap max-h-[20.7rem] max-w-[20.7rem] min-h-[20.7rem] tablet:max-h-[14rem] tablet:max-w-[14rem] tablet:min-h-[14rem] md:max-h-[10rem] md:max-w-[10rem] md:min-h-[10rem]">
                                    <Image
                                        src={item.imgSrc}
                                        width={1000}
                                        height={1000}
                                        alt={item.imgAlt}
                                        className={'w-full h-full object-cover'}
                                    />
                                </div>
                            </div>
                            <div className="w-colTwo mx-[1rem] md:w-full pr-[15rem] ipad:pr-0">
                                {item.title && <h4 className=''>{item.title}</h4>}
                                {item.description && <p className="mt-[2rem]">{item.description}</p>}
                                {item.btnText && <div className="link-wrap mt-[2rem]"><Link className={`tertiary-btn pink`} href={item.btnUrl}>{item.btnText}</Link></div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
