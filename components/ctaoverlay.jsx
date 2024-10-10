import React from "react";
import Image from "next/image";
import Link from "next/link";
import workContent from '../data/work-ctaoverlay.json';
import serviceOverviewContent from '../data/serviceoverview-ctaoverlay.json';
import driving from '../data/driving-ctaoverlay.json'
import outcome from '../data/outcome-overview.json';
import industry from '../data/industry-detail.json';

export default function Cta({ contentName, heading, subtitle, redesign, pLite, underlinePosition }) {
    const getContent = (contentName) => {
        switch (contentName) {
            case 'serviceOverview':
                return serviceOverviewContent;
            case 'work':
                return workContent;
            case 'outcome':
                return outcome;
            case 'industry':
                return industry;
            case 'driving':
                return driving;
            // Add more cases for additional content names
            default:
                return serviceOverviewContent; // Default to a specific content if the name is not recognized
        }
    };

    const content = getContent(contentName);
    return (
        <section className='cta  flex items-center height__full-nav dark__overlay' id={content.id}>
            <div className='bg-img'>
                <Image src={content.bgimg} alt='image' height={1600} width={1090} className='w-full h-full' />
            </div>
            <div className='container'>
                <div className={`${redesign === true ? 'max-w-[57rem]' : 'max-w-[141rem]'} ${content.star === true ? 'star' : ''} content relative`}>

                    {content.uppertxt ? <p className="text-pink medium !font-bold mb-[3rem]">{content.uppertxt}</p> : ''}
                    {content.upperboldtxt ? <p className="subtitle mb-[2rem] text-white ">{content.upperboldtxt}</p> : ''}
                    {content.imgvisibilty === true ? <div className="logo-wrap max-w-[15.3rem] max-h-[3.5rem] mb-[2rem]">
                        <Image src={content.img} alt="img" height={1000} width={1000} className="w-full h-full object-contain" />
                    </div> : ''}


                    <h2 className={`${heading === true ? 'h1' : ''} ${redesign === true ? 'h3' : ''} text-white mb-[20px]`}>{content.heading}{content.sup ? <sup
                        className={``}
                        dangerouslySetInnerHTML={{ __html: content.sup }}
                    /> : ''} <span className={`underline-container whiteMedium ${content.underlinePosition ? content.underlinePosition : 'bps'}`}>{content.highLightedText}</span>
                        {content.normaltxt}
                    </h2>
                    {pLite === 'true' ? <p className={`text-white mb-[3rem] max-w-[105rem] font-normal`}>{content.para}</p> : ''}
                    {pLite === 'true' ? '' : <h4 className={`${subtitle === true ? 'subtitle !leading-[1.5]' : 'medium-bold '} ${redesign === true ? 'p' : ''} text-white mb-[3rem] max-w-[105rem] font-normal`}>{content.para}</h4>}

                    <div className="btn-wrapper w-full">
                        <div className="btn-wrap inline-block mr-[1.5rem]">
                            <Link className="btn pink white-bordered" href="#">{content.link}</Link>
                        </div>
                        {content.outcomelink ? <div className="btn-wrap inline-block secondBtn mt-[2rem]">
                            <Link className="tertiary-btn" href="#">{content.outcomelink}</Link>
                        </div> : ''}

                    </div>
                </div>
            </div>
        </section>
    );
}
