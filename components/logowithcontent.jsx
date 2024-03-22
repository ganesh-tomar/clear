import React from 'react';
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Logowithcontent = ({ contentName }) => {
    const contentData = {
        data: [
            {
                bgimg: '/cardsbg.svg',
                logo: '/vocera.svg',
                hover_logo: '/vocera_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: "/itero_logo.svg",
                hover_logo: "/itero_logo_white.svg",
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: "/align_logo.svg",
                hover_logo: "/align_logo_white.svg",
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/vocera.svg',
                hover_logo: '/vocera_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: "/itero_logo.svg",
                hover_logo: "/itero_logo_white.svg",
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: "/align_logo.svg",
                hover_logo: "/align_logo_white.svg",
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            // Add other data objects here
        ],

        twocards: [
            {
                bgimg: '/cardsbg.svg',
                logo: '/vocera.svg',
                hover_logo: '/vocera_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
            {

                bgimg: '/cardsbg.svg',
                logo: '/itero_logo.svg',
                hover_logo: '/itero_logo_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '',
            },
        ],

        threecards: [
            {
                bgimg: '/cardsbg.svg',
                logo: '/vocera.svg',
                hover_logo: '/vocera_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: false,
                redirect: '#',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: "/itero_logo.svg",
                hover_logo: "/itero_logo_white.svg",
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/cardsbg.svg',
                logo: "/align_logo.svg",
                hover_logo: "/align_logo_white.svg",
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
                redirect: '#',
            },
            // Add other threecards objects here
        ],

        industryFocus: [
            {
                bgimg: '/case_bg.svg',
                title: 'Financial Services & Insurance',
                heading: 'Build a reputation for banking innovation',
                description: 'Select clients: Intel, Cohesity',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Healthcare',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Manufacturing',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Semiconductor',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Consumer Goods',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Renewable Energy',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Construction & Real Estate',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Higher Education',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Non-Profit',
                heading: 'Lorem ipsum dolor sit amet consectetur.',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            // Add other threecards objects here
        ],

        contactus: [
            {
                bgimg: '/case_bg.svg',
                title: 'Clear Digital HQ San Jose, CA',
                heading: '1570 The Alameda, Suite 330 San Jose, CA 95126',
                description: '408.246.0000',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'San Francisco, CA',
                heading: '540 Howard Street  San Francisco, CA 94105',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Chicago, IL',
                heading: '4753 North Broadway Chicago, IL 60640',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'Houston, TX',
                heading: '609 Main Street  Houston, TX 77002',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
            {
                bgimg: '/case_bg.svg',
                title: 'New York, NY',
                heading: '500 7th Avenue  New York, NT 10018',
                description: 'Select clients: Align, iTero',
                border: true,
                redirect: '#',
            },
        ],
    };

    const content = contentData[contentName] || [];

    return (
        <section className="logowithcontent py-0 border-b border-darkGray" id='case-studies'>
            {content.map((wrap, index) => (
                <div key={index} className={`${style.wrapper} group ${wrap.border === true ? `border-t border-darkGray` : ''} py-[5rem] area height__one_third flex  w-full relative border-darkGray`}>
                    <Link href={wrap.redirect ? wrap.redirect : '/'} className='redirect !z-[6]'>.</Link>
                    {wrap.bgimg && (
                        <div className={`absolute top-0 left-0 w-full h-full ${style.bgimg} opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200`}>
                            <Image src={wrap.bgimg} className="w-full h-full object-cover object-bottom sm:object-[70%]" width={100} height={100} alt="image" />
                        </div>
                    )}

                    <div className="container">
                        <div className={`w-full relative h-full flex items-center flex-wrap`}>
                            <div className={`imgwrapper w-[50%] ${wrap.logo ? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0' : ''} md:w-full`}>
                                {wrap.logo && (
                                    <div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
                                        <Image className="absolute transition-opacity group-hover:opacity-0 duration-200 left-0 object-contain top-0 w-auto h-full" width={1000} height={1000} src={wrap.logo} alt="image" />
                                        <Image className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 left-0 top-0 w-auto h-full" width={1000} height={1000} src={wrap.hover_logo} alt="image" />
                                    </div>
                                )}
                                {wrap.title && (
                                    <h3 className={`${style.content} group-hover:text-white lg-up:pr-[20rem] tablet:pr-[8rem]`}>{wrap.title}</h3>
                                )}
                            </div>
                            <div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
                                <div className={`${style.content} content max-w-[60rem] ipad:max-w-[100%] md:max-w-full group-hover:text-white`}>
                                    <h4 className={`heading pr-[5rem] sm:pr-[0] ${wrap.title ? 'lite' : ''} ${style.heading}`}>{wrap.heading}</h4>
                                    <p className={` letter-spacing-[-0.32px] ${wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'} pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}>{wrap.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Logowithcontent;












