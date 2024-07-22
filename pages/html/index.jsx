import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import ImageSlider from '../../components/ImageSlider';
import ContentGrid from '../../components/ContentGrid';
import ColTwoSlider from '../../components/colTwoSlider';
import LogoSlider from '../../components/LogoSlider';
import ColTwoImageSlider from '../../components/ColTwoImageSlider';
import FooterCta from '../../components/Footercta';
import TabSlider from '../../components/TabSlider';
// import Cards from '../components/Cards';
import HomepageHero from '../../components/HomepageHero';
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
// Dynamically import GSAP and ScrollTrigger
const gsap = dynamic(() => import('gsap'), { ssr: false });
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });
export default function Home() {
    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);

    useEffect(() => {
        async function loadAnimation() {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (sectionOneRef.current && sectionTwoRef.current) {
                gsap.fromTo(
                    sectionTwoRef.current,
                    { y: '-30%' },
                    {
                        y: '0%',
                        scrollTrigger: {
                            trigger: sectionOneRef.current,
                            start: 'bottom bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                    }
                );
            }
        }

        loadAnimation();
    }, []);

    const clientSliderData = [
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac atur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            prefix: '$',
            count: '20',
            denotation: 'M',
            subText: 'Lorem ipsum dolor.',
            subDescription: 'Lorem ipsum dolor sit amet consectetur amet pretium amet in mus quis',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        // {
        //     heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
        //     logo: '/Vocera_Logo_White.svg',
        //     author: 'Jane Doe,',
        //     designation: 'CEO',
        //     btnText: 'View Case Study',
        //     btnUrl: '/'
        // }
    ];
    const insightSliderData = [
        {
            imageSrc: '/insight_card.png',
            heading: 'Ensure Your Brand’s Direction by Auditing These 5 Key Areas of Your B2B Digital Strategy',
            subText: '',
            url: '/',
            linkText: '',
            categories: ['Article', 'Digital Strategy',],
            medium: 'By Steve Ohanians on June 29, 2023',
            hiddenlink: 'Read more',
            hiddenurl: '/',
            redirect: true,
        },
        {
            imageSrc: '/insight_card.png',
            heading: 'Ensure Your Brand’s Direction by Auditing These 5 Key Areas of Your B2B Digital Strategy',
            subText: '',
            url: '/',
            linkText: '',
            categories: ['Article', 'Digital Strategy',],
            medium: 'By Steve Ohanians on June 29, 2023',
            hiddenlink: 'Read more',
            hiddenurl: '/',
            redirect: true,
        },
        {
            imageSrc: '/insight_card.png',
            heading: 'Ensure Your Brand’s Direction by Auditing These 5 Key Areas of Your B2B Digital Strategy',
            subText: '',
            url: '/',
            linkText: '',
            categories: ['Article', 'Digital Strategy',],
            medium: 'By Steve Ohanians on June 29, 2023',
            hiddenlink: 'Read more',
            hiddenurl: '/',
            redirect: true,
        }
    ];
    return (
        <Layout>
            <NextSeo
                title="ClearDigital"
                description="ClearDigital "
            />
            <HomepageHero ref={sectionOneRef} />
            <ImageSlider ref={sectionTwoRef} />
            {/* <Cards/>git */}
            <ContentGrid introName={'home'} cards="home" />
            <TabSlider />
            <ColTwoSlider data={clientSliderData} pb={'none'} />
            <LogoSlider contentname={'data'} />
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-gray" contentName="home" />
            <FooterCta />
        </Layout>
    )
}
